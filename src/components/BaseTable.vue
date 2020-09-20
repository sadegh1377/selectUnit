<template>
    <div id="BaseTable">
        <div ref="table">
            <p>مجموع واحد:{{sumOfUnit}}</p>
            <table ref="table" class="table dir">
                <thead class="card-header">
                <tr>
                    <th class="dir" v-for="(header, id) in headerOfTable" :key="id">
                        {{header}}
                    </th>
                </tr>
                </thead>
                <tr v-for="(cr, index) in courses" :key="index">
                    <td class="" title="حذف کردن">
                        <input type="text" v-model="cr.courseName">
                    </td>
                    <td>
                        <input type="text" v-model="cr.profName">
                    </td>
                    <td>
                        <input type="number" v-model="cr.unit" disabled>
                    </td>
                    <td v-for="i in cr.numberOfTextArea">
                        <textarea></textarea>
                    </td>
                </tr>
            </table>
        </div>
        <div class="text-left mb-3 ml-3">
            <span v-if="feedback && courses.length===0" class="text-danger ml-3">{{feedback}}</span>
            <button class="btn btn-primary" @click="downloadVisualReport">ذخیره کردن</button>

        </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas"

    export default {
        name: "BaseTable",
        props: [
            "courses",
            "sumOfUnit"
        ],
        data() {
            return {
                headerOfTable: ["نام درس", "نام استاد", "واحد", "شنبه",
                    "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "امتحان"],
                feedback: null,

            }
        },
        methods: {
            deleteRow(index) {
                this.courses.splice(index, 1);
            },
            downloadVisualReport() {
                if (this.courses.length === 0) {
                    this.feedback = "حداقل یک سطر باید پر شود"
                } else {
                    html2canvas(this.$refs.table).then(canvas => {
                        let a = document.createElement('a');
                        a.href = canvas.toDataURL("image/jpeg")
                            .replace("image/jpeg", "image/octet-stream");
                        a.download = 'برنامه درسی.jpg';
                        a.click();
                        document.body.removeChild(a);
                    }).catch((error) => {
                        console.log(error.toString())
                    });
                }
            },

        }
    }
</script>

<style scoped>

    .dir {
        text-align: center;
        direction: rtl;
    }

    p {
        text-align: center;
        font-weight: 600;
    }

    tr:nth-child(odd) {
        background-color: #f1f1f1;
    }

    input {
        text-align: center;
        opacity: 0.8;
        padding: 10px;
        border: 1px solid #333333;
        border-radius: 10px;
        outline: none;
        /*font-weight: 400;*/
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        width: 50px !important;
    }

    textarea {
        text-align: center;
        width: 120px;
        /*height: 50px;*/
        font-weight: 400;
        opacity: 0.8;
        border: 1px solid #333333;
        border-radius: 10px;
    }
</style>
