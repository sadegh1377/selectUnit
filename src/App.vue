<template>
  <div id="app">
    <Navbar/>
    <!--        <div class="bg-success container text-white w-100 mt-2 customRounded2">-->
    <!--            <h3 class="m-0">یک رای گیری ساده برای پیدا کردن بهترین استاد از نظر دانشجویان</h3>-->
    <!--        </div>-->
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./view/Footer";
import Navbar from "./view/Navbar";

export default {
  components: {Footer, Navbar}
}
</script>

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



.customRounded2 {
  border-top-left-radius: 0.25rem !important;
  border-top-right-radius: 0.25rem !important;
}

</style>
