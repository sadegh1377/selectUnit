<template>
    <div id="BaseTable">
        <table class="table dir">
            <thead class="card-header">
            <tr>
                <th class="dir" v-for="(header, id) in headerOfTable" :key="id">
                    {{header}}
                </th>
            </tr>
            </thead>
            <tr v-for="(cr, index) in courses" :key="index">
                <td class="hover" title="حذف کردن">
                    {{cr.courseName}}
                </td>
                <td>
                    {{cr.profName}}
                </td>
                <td>
                    {{cr.unit}}
                </td>
                <td v-for="i in cr.numberOfTextArea">
                    <textarea></textarea>
                </td>
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
                headerOfTable: ["نام درس", "نام استاد", "واحد" , "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "امتحان"]

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

    .dir {
        direction: rtl;
    }

    tr:nth-child(odd) {
        background-color: #f2f2f2;
    }
</style>
