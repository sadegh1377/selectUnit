<template>
    <div id="app">
        <!--        <div id="nav">-->
        <!--            <router-link to="/" class="fontSize">انتخاب واحد</router-link>-->
        <!--            |-->
        <!--            <router-link to="/calculate-avg" class="fontSize">محاسبه معدل</router-link>-->
        <!--            |-->
        <!--            <router-link to="/to-do-list" class="fontSize">لیست کار</router-link>-->
        <!--            |-->
        <!--            <router-link to="/voting" class="fontSize">رای گیری</router-link>-->
        <!--            &lt;!&ndash;            |&ndash;&gt;-->
        <!--            &lt;!&ndash;                        <router-link to="/calculator" class="fontSize">ماشین حساب</router-link>&ndash;&gt;-->
        <!--        </div>-->
        <div class="bg-success container text-white w-100 mt-2 customRounded2">
            <h3 class="m-0">یک رای گیری ساده برای پیدا کردن بهترین استاد از نظر داشنجویان</h3>
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Scheherazade:wght@700&display=swap');
    /*@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@700&display=swap');*/
    /*@import url('https://fonts.googleapis.com/css2?family=Lateef&display=swap');*/
    * {
        /*font-family: 'Lateef', cursive;*/
        font-size: 20px;
        font-family: 'Scheherazade', serif;
        /*font-family: 'Amiri', serif;*/
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

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
        font-size: 40px !important;
    }

    .customRounded2 {
        border-top-left-radius: 0.25rem !important;
        border-top-right-radius: 0.25rem !important;
    }

</style>
