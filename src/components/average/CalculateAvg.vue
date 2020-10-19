<template>
    <div id="CalculateAvg" class="container">
        <table class="table border">
            <thead class="card-header">
            <tr>
                <th>نام درس</th>
                <th>نمره</th>
                <th>واحد</th>
                <th>حذف</th>
            </tr>
            </thead>
            <tr v-for="(cr,index) in courses" :key="index">
                <td>
                    <input type="text" v-model="cr.crsName">
                </td>
                <td>
                    <input type="number" v-model="cr.grade">
                </td>
                <td>
                    <input type="number" v-model="cr.unit" required>
                </td>
                <td class="pointer" @click="deleteCrsRow(index)">
                    <font-awesome-icon icon="trash"/>
                </td>
            </tr>
            <tr class="background pointer" @click="addCrsRow">
                <td colspan="4">
                    <font-awesome-icon icon="plus" size="sm"/>
                    افزودن ردیف
                </td>
            </tr>
        </table>
        <button class="btn btn-primary mb-2 fontWeight"
                @click="calculateAvg">محاسبه
        </button>
        <h4 class="text-center" v-if="average"> معدل شما: {{average}}</h4>
        <p class="text-danger" v-if="feedback">{{feedback}}</p>
    </div>
</template>

<script>
    export default {
        name: "CalculateAvg",
        data() {
            return {
                crsName: null,
                grade: null,
                unit: null,
                average: null,
                courses: [{
                    crsName: null,
                    grade: null,
                    unit: null
                }],
                feedback: null
            }
        },
        methods: {
            addCrsRow() {
                this.courses.push({
                    crsName: null,
                    grade: null,
                    unit: null
                })
            },
            deleteCrsRow(crs) {
                this.courses.splice(crs, 1);
            },
            calculateAvg() {
                if (this.courses.length === 0) {
                    this.feedback = "جاهای خالی را پر کنید";
                } else {
                    let sumOfUnits = 0;
                    let sumOfGrades = 0;
                    let crs = this.courses;
                    let flag = false;
                    for (let i = 0; i < this.courses.length; i++) {
                        if (crs[i].unit === null ||
                            crs[i].unit === 0 ||
                            crs[i].unit === "") {
                            this.feedback = "واحد نمیتواند صفر یا خالی باشد";
                            flag = true;
                            break;
                        } else if (crs[i].grade === null ||
                            crs[i].grade === "") {
                            this.feedback = "نمره نمیتواند خالی باشد";
                            flag = true;
                            break;

                        } else {
                            sumOfUnits += Number(crs[i].unit);
                            sumOfGrades += Number(crs[i].unit) * Number(crs[i].grade);
                        }
                    }
                    if (!flag) {
                        this.feedback = null;
                        this.average = (sumOfGrades / sumOfUnits).toFixed(2);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    #CalculateAvg {
        height: 70vh;
    }

    input {
        outline: none;
        text-align: center;
    }

    .border {
        border-radius: 20px;
    }

    .table {
        text-align: center;
    }

    .background {
        background-color: #f7f7f7;
    }

    .fontWeight {
        font-weight: 700 !important;
    }

    .pointer:hover {
        cursor: pointer
    }
</style>