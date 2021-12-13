<template>
  <div id="BaseTable" class="container">
    <p>مجموع واحد:{{ sumOfUnits }}</p>
    <div ref="table">
      <table ref="table" class="table dir  shadow">
        <thead class="card-header">
        <tr>
          <th class="dir" v-for="(header, id) in headerOfTable" :key="id">
            {{ header }}
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
            <input type="number" v-model.number="cr.unit" min="0" max="5">
          </td>
          <td>
            <textarea v-model="cr.saturday"></textarea>
          </td>
          <td>
            <textarea v-model="cr.sunday"></textarea>
          </td>
          <td>
            <textarea v-model="cr.monday"></textarea>
          </td>
          <td>
            <textarea v-model="cr.tuesday"></textarea>
          </td>
          <td>
            <textarea v-model="cr.wednesday"></textarea>
          </td>
          <td>
            <textarea v-model="cr.examDay"></textarea>
          </td>
          <td class="pointer" @click="deleteCrsRow(index)">
            <font-awesome-icon class="deleteColor" icon="trash"/>
          </td>
        </tr>
        <tr class="background pointer" @click="addCrsRow">
          <td colspan="12">
            <font-awesome-icon icon="plus" size="sm"/>
            افزودن ردیف
          </td>
        </tr>
      </table>
    </div>
    <div class="text-left mb-3 ml-3">
      <span v-if="feedback && courses.length===0" class="text-danger ml-3">{{ feedback }}</span>
      <button class="btn btn-primary shadow" @click="downloadVisualReport">ذخیره کردن</button>

    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas"

export default {
  name: "SelectUnit",
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
        saturday: null,
        sunday: null,
        monday: null,
        tuesday: null,
        wednesday: null,
        examDay: null

      }],
      sumOfUnits: 0,
      numberOfTextArea: 6,
      headerOfTable: ["نام درس", "نام استاد", "واحد", "شنبه",
        "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "امتحان", "حذف"],
      feedback: null,

    }
  },
  methods: {
    deleteCrsRow(crs) {
      this.courses.splice(crs, 1);
    },
    addCrsRow() {
      this.courses.push({
        profName: null,
        courseName: null,
        unit: null,
        saturday: null,
        sunday: null,
        monday: null,
        tuesday: null,
        wednesday: null,
        examDay: null
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
  watch: {
    calculateSum(newU, oldU) {
      let newUnit = JSON.parse(newU)
      let oldUnit = JSON.parse(oldU)
      for (let i = 0; i < this.courses.length; i++) {
        if (newUnit[i].unit !== oldUnit[i].unit) {
          this.sumOfUnits = Number(this.sumOfUnits) - Number(oldUnit[i].unit) + Number(newUnit[i].unit)
        }
      }
    }
  },
  computed: {
    calculateSum() {
      return JSON.stringify(this.courses)
    }
  }
}
</script>

<style scoped>

.deleteColor {
  color: #f84949;
  margin-top: 20px;
}

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
  width: 100% !important;
  border: 1px solid #333;
  border-radius: 10px;
  opacity: 1 !important;
}

textarea {
  text-align: center;
  width: 100%;
  border: 1px solid #333;
  border-radius: 10px;
}
</style>
