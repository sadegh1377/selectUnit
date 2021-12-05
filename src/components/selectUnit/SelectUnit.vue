<template>
    <div id="BaseTable" class="container">
        <p>مجموع واحد:{{calculateSum}}</p>
        <div ref="table">
            <table ref="table" class="table dir  shadow">
                <thead class="card-header">
                <tr>
                    <th class="dir" v-for="(header, id) in headerOfTable" :key="id">
                        {{header}}
                    </th>
                </tr>
                </thead>
                <tr v-for="(cr, index) in courses" :key="index">
                    <td class="">
                        <input type="text"
                               v-focus
                               v-model="cr.courseName">
                    </td>
                    <td>
                        <input type="text"
                               v-model="cr.profName">
                    </td>
                    <td>
                        <input type="number" v-model.number="cr.unit" min="0" max="5" :disabled="cr.unit">
                    </td>
                    <td v-for="i in numberOfTextArea">
                        <textarea></textarea>
                    </td>
                </tr>
                <tr class="background pointer" @click="addCrsRow">
                    <td colspan="9">
                        <font-awesome-icon icon="plus" size="sm"/>
                        افزودن ردیف
                    </td>
                </tr>
            </table>
        </div>
        <div class="text-left mb-3 ml-3">
            <span v-if="feedback && courses.length===0" class="text-danger ml-3">{{feedback}}</span>
            <button class="btn btn-primary shadow" @click="downloadVisualReport">ذخیره کردن</button>

        </div>
    </div>
</template>

<script>
    import html2canvas from "html2canvas"

    export default {
        name: "BaseTable",
        directives: {
            focus: {
                inserted(el) {
                    el.focus()
                }
            }
        },
        data() {
            return {
                courses: [{
                    profName: null,
                    courseName: null,
                    unit: null,
                }],
                sumOfUnits: 0,
                numberOfTextArea: 6,
                headerOfTable: ["نام درس", "نام استاد", "واحد", "شنبه",
                    "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "امتحان"],
                feedback: null,

            }
        },
        methods: {
            deleteRow(index) {
                this.courses.splice(index, 1);
            },
            addCrsRow() {
                this.courses.push({
                    profName: null,
                    courseName: null,
                    unit: null,
                })
            },
            downloadVisualReport() {
                window.scrollTo(0, 0);
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
        },
        computed: {
            calculateSum() {
                if (this.courses.length > 1 || this.courses[this.courses.length - 1].unit) {
                    this.sumOfUnits += Number(this.courses[this.courses.length - 1].unit);
                    return this.sumOfUnits;
                }
            }
        }
    }
</script>

<style scoped>
    .pointer:hover {
        cursor: pointer
    }

    .background {
        background-color: #f7f7f7;
    }

    .dir {
        text-align: center;
        direction: rtl;
    }

    p {
        text-align: center;
    }

    tr:nth-child(odd) {
        background-color: #f1f1f1;
    }

    input {
      text-align: center;
      padding: 16px;
      border: 1px solid #333;
      border-radius: 10px;
      outline: none;
      width: 100%;
    }

    .filed {
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        opacity: 0.8;
        padding: 16px;
        /*border: 1px solid #333333;*/
        /*border-radius: 10px;*/
        outline: none;
        width: 210px;
        overflow: auto;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
      -moz-appearance: textfield;
      width: 100%!important;
      border: 1px solid #333;
      border-radius: 10px;
      opacity: 1!important;
    }

    textarea {
      text-align: center;
      width: 100%;
      border: 1px solid #333;
      border-radius: 10px;
    }
</style>
