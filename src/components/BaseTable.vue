<template>
    <div id="BaseTable">
        <table class="table">
            <thead class="card-header">
            <tr>
                <th>نام درس</th>
                <th>نام استاد</th>
                <th v-for="day in daysOfWeek" :key="day.id">
                    {{day}}
                </th>
                <th>امتحان</th>
            </tr>
            </thead>
            <tr v-for="(cr, index) in courses" :key="index">
                <td @click="deleteRow(index)" class="hover" title="حذف کردن">
                    {{cr.courseName}}
                </td>
                <td>
                    {{cr.profName}}
                </td>
                <td v-for="i in 6">
                    <textarea></textarea>
                </td>

                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
                <!--                <td>-->
                <!--                    <input type="text">-->
                <!--                </td>-->
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "BaseTable",
        props: [
            "courses"
        ],
        data() {
            return {
                daysOfWeek: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه"]
            }
        },
        methods: {
            deleteRow(index) {
                this.courses.splice(index, 1);
            }
        }
    }
</script>

<style scoped>

    /*.font{*/
    /*    !*width: 150px;*!*/
    /*    !*height: 70px;*!*/
    /*    font-size: 15px;*/
    /*}*/
    .hover {
        cursor: pointer;
    }

    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
</style>
