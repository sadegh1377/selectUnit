<template>
    <div id="BaseTable">
        <table class="table">
            <thead class="card-header">
            <tr>
                <th>نام درس</th>
                <th>نام استاد</th>
                <th>شنبه</th>
                <th>یکشنبه</th>
                <th>دوشنبه</th>
                <th>سه شنبه</th>
                <th>چهارشنبه</th>
                <th>امتحان</th>
            </tr>
            </thead>
            <tr v-for="(cr, index) in courses" :key="index">
                <td>
                    {{cr.courseName}}
                </td>
                <td>
                    {{cr.profName}}
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
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
            return {}
        }
    }
</script>

<style scoped>

    /*.font{*/
    /*    !*width: 150px;*!*/
    /*    !*height: 70px;*!*/
    /*    font-size: 15px;*/
    /*}*/
    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
</style>
