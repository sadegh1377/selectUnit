<template>
    <div id="inputs">
        <div class="container mt-4">
            <form class="row" @submit.prevent="submit">
                <div class="col-sm-4 col-lg-4">
                    <!--                    <label class="col-6">نام درس</label>-->
                    <input type="text" class="input-group" v-model="courseName" placeholder="نام درس">
                </div>
                <div class="col-sm-4 col-lg-4">
                    <!--                    <span class="">نام استاد</span>-->
                    <input type="text" class="input-group" v-model="profName" placeholder="نام استاد">
                </div>
                <div class="">
                    <button class="btn btn-primary btn-lg ">ثبت</button>
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
        <base-table :courses="courses" class="mt-5"/>
    </div>
</template>

<script>
    import BaseTable from "./BaseTable";
    import slugify from 'slugify'

    export default {
        name: "inputs",
        components: {BaseTable},
        component() {
            BaseTable
        },
        data() {
            return {
                profName: null,
                courseName: null,
                // description: "",
                // dayOfWeek: null,
                // dayOfExam: "",
                courses: [],
                feedback: null
            }
        },
        methods: {
            submit() {
                if (this.profName === null || this.profName === "" ||
                    this.courseName === null || this.courseName === "") {
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
                    })
                    this.profName = null;
                    this.courseName = null;
                }
            }
        }

    }
</script>

<style scoped>
    input {
        opacity: 0.6;
        padding: 10px;
        border: 1px solid #333333;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
    }
</style>
