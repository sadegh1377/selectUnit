<template>
    <div id="WelcomePage">
        <section class="container col-lg-5 col-sm-12 col-md-8 mt-5">
            <div class="card" :class="this.$store.state.mode">
                <div class="container row align-self-center m-0 p-0">
                    <div class="card-header col-sm-6 col-lg-6 col-md-6" @click="showSingUp" :class="{actived: show,}">
                        ثبت
                        نام
                    </div>
                    <div class="card-header col-sm-6 col-lg-6 col-md-6" @click="showlogIn" :class="{actived:!show}">ورود
                    </div>

                </div>
                <sing-up v-if="show"/>
                <login v-else/>
            </div>
        </section>
    </div>
</template>

<script>
    import SingUp from "../components/login/SingUp";
    import Login from "../components/login/Login";

    export default {
        name: "WelcomePage",
        components: {Login, SingUp},
        data() {
            return {
                show: 'login'
            }
        },
        methods: {
            showlogIn() {
                this.show = false
            },
            showSingUp() {
                this.show = true
            }
        }
    }
</script>

<style scoped>
    * {
        font-weight: bold;
        font-family: "2  Mitra", serif;
    }

    .actived {
        background-color: lightskyblue;
        transition: color, background-color 0.3s ease-in-out;
    }

    .dark .actived {
        color: #f3f3f3;
        background-color: #3178a5;
        transition: color, background-color 0.3s ease-in-out;
    }

    .dark {
        color: #f3f3f3;
        background-color: #2c3e50 !important;
        transition: color, background-color 0.3s ease-in-out;
    }

    .card-header {
        cursor: pointer;
    }
</style>