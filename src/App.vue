<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" class="fontSize">انتخاب واحد</router-link>
            |
            <router-link to="/calculate-avg" class="fontSize">محاسبه معدل</router-link>
            |
            <router-link to="/to-do-list" class="fontSize">لیست کار</router-link>
            <!--            |-->
            <!--                        <router-link to="/calculator" class="fontSize">ماشین حساب</router-link>-->
        </div>
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style>
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
</style>
