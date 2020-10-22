<template>
    <div id="app">
        <div id="nav">
            <router-link to="/" class="fontSize">انتخاب واحد</router-link>
            |
            <router-link to="/calculate-avg" class="fontSize">محاسبه معدل</router-link>
            |
            <router-link to="/to-do-list" class="fontSize">لیست کار</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
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
