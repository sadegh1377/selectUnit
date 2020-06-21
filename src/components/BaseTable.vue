<template>
    <div id="BaseTable">
        <table class="table">
            <thead class="card-header">
            <tr>
                <th>نام استاد</th>
                <th>نام درس</th>
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
                    {{cr.profName}}
                </td>
                <td>
                    {{cr.courseName}}
                </td>
                <td>
                    <textarea></textarea>
                </td>
                <td>
                    <textarea class="font"></textarea>
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
    import Inputs from "./AllInputs";

    export default {
        name: "BaseTable",
        components: {Inputs},
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
</style>
