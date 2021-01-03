<template>
    <div id="inputs">
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
