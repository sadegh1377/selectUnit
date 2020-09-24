<template>
    <div id="inputs">
        <div class="container mt-4">
            <form class="row" @submit.prevent="submit">
                <div class="col-sm-5 col-lg-5">
                    <!--                    <label class="col-6">نام درس</label>-->
                    <input type="text" class="input-group" v-model="courseName" placeholder="نام درس" ref="courseName">
                </div>
                <div class="col-sm-5 col-lg-5">
                    <!--                    <span class="">نام استاد</span>-->
                    <input type="text" class="input-group" v-model="profName" placeholder="نام استاد">
                </div>
                <div class="col-sm-1 col-lg-1">
                    <input type="number" class="input-group " v-model="unit" placeholder="واحد">
                </div>
                <div class="col-sm-1 col-lg-1">
                    <button class="btn btn-primary ">ثبت</button>
                </div>
                <p v-show="feedback" class="alert-danger mr-2">{{feedback}}</p>
                <!--                <div class="col-2">-->
                <!--                    <label class="col-6">توضیحات</label>-->
                <!--                    <input type="text" class="col-6" v-model="description">-->
                <!--                </div>-->
                <!--                <div class="col-2">-->
                <!--                    <label class="col-6">روز امتحان</label>-->
                <!--                    <input type="text" class="col-6" v-model="dayOfExam">-->
                <!--                </div>-->
                <!--                <div class="col-2">-->
                <!--                    <label class="col-4">روز:</label>-->
                <!--                    <select class="col-8" v-model="dayOfWeek">-->
                <!--                        <option value="saturday">شنبه</option>-->
                <!--                        <option value="sunday">یکشنبه</option>-->
                <!--                        <option value="monday">دوشنبه</option>-->
                <!--                        <option value="Tuesday">سه شنبه</option>-->
                <!--                        <option value="wednesday">چهارشنبه</option>-->
                <!--                    </select>-->
                <!--                </div>-->
            </form>
        </div>
        <base-table :courses="courses"
                    :sumOfUnit="sumOfUnit"
                    class="mt-3"/>
    </div>
</template>

<script>
    import BaseTable from "./BaseTable";
    import slugify from 'slugify'

    export default {
        name: "inputs",
        components: {BaseTable},
        data() {
            return {
                profName: null,
                courseName: null,
                unit: null,
                courses: [],
                feedback: null,
                sumOfUnit: 0,
            }
        },
        methods: {
            submit() {
                if (this.profName === null || this.profName === "" ||
                this.courseName === null || this.courseName === "",
                this.unit === null || this.unit === "") {
                    this.feedback = "جای های خالی را پر کنید!!!"
                } else {
                    this.profName = slugify(this.profName, {
                        replacement: ' ',
                        remove: /[$*_+()'"!\-:;@#^%~|.?=&`]/g,
                        lower: false
                    });
                    this.courseName = slugify(this.courseName, {
                        replacement: ' ',
                        remove: /[$*_+()'"!\-:;@#^%~|.?=&`]/g,
                        lower: false
                    });
                    this.courses.push({
                        profName: this.profName,
                        courseName: this.courseName,
                        unit: this.unit,
                        numberOfTextArea: 6,
                        editingProfName: false,
                        editingCrsName: false
                    })
                    this.sumOfUnit += Number(this.unit)
                    this.profName = null;
                    this.courseName = null;
                    this.unit = null
                    this.feedback = null
                }
                this.$refs.courseName.focus();
            }
        },
    }
</script>

<style scoped>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }

    input {
        opacity: 0.6;
        padding: 10px;
        border: 1px solid #333333;
        border-radius: 10px;
        outline: none;
        font-weight: 500;
    }
</style>
