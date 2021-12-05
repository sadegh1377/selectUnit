<template>
  <div id="app">
    <div id="nav" class="border mb-5">
      <router-link to="/" class="border p-3 rounded ml-3 shadow-sm">انتخاب واحد</router-link>
      <router-link to="/calculate-avg" class="border p-3 rounded ml-3 shadow-sm">محاسبه معدل</router-link>
      <router-link to="/to-do-list" class="border p-3 rounded shadow-sm"> لیست کار</router-link>
      <!--            |-->
      <!--                        <router-link to="/calculator" class="fontSize">ماشین حساب</router-link>-->
    </div>
    <!--        <div class="bg-success container text-white w-100 mt-2 customRounded2">-->
    <!--            <h3 class="m-0">یک رای گیری ساده برای پیدا کردن بهترین استاد از نظر دانشجویان</h3>-->
    <!--        </div>-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Scheherazade:wght@700&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap');*/
/*@import url('https://fonts.googleapis.com/css2?family=Lateef&display=swap');*/

@font-face {
  font-family: "iranSans";
  src: local("iranSans"),
  url(assets/font/FontsFree-Net-ir_sans.ttf) format("truetype");
}

#app {
  font-family: iranSans, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active {
  transition: opacity 0.3s ease-in;
}

.fade-leave-active {
  transition: opacity 0.3s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fontSize {
  font-size: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.customRounded2 {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

</style>
<script>
import Footer from "./components/footer/Footer";

export default {
  components: {Footer}
}
</script>