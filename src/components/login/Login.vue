<template>
    <div id="SingUp">
        <div class="container bg-light" :class="this.$store.state.mode">
            <form @submit.prevent="login">
                <div class="">
                    <input type="email" id="email" name="email" placeholder="ایمیل" v-model="email"
                           :class="{inputDark:this.$store.state.mode === 'dark'}">
                </div>
                <div class="">
                    <input type="password" id="location" name="location" placeholder="رمز عبور" v-model="password"
                           :class="{inputDark:this.$store.state.mode === 'dark'}">
                </div>
                <br>
                <button class="btn-block bg-color" :class="{btnDark:this.$store.state.mode === 'dark'}">ورود</button>
            </form>
        </div>
        <p class="bg-danger font-weight-bold text-white" v-if="feedback">{{feedback}}</p>
    </div>
</template>
<script>
    import firebase from 'firebase'

    export default {
        name: "Login",
        data() {
            return {
                email: null,
                password: null,
                feedback: null
            }
        },
        methods: {
            login() {
                if (this.email && this.password) {
                    firebase.auth().signInWithEmailAndPassword(
                        this.email,
                        this.password
                    ).then(cred => {
                        // console.log(cred.user)
                        this.$router.push({name: 'Home'})
                    }).catch(err => {
                        console.log(err)
                        this.feedback = err.message
                    })
                    this.feedback = null
                } else {
                    this.feedback = "جاهای خالی را پر کنید"
                }
            }
        }
    }
</script>
<style scoped>
    input {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        resize: vertical;
        margin-top: 10px;
    }

    .bg-color {
        background-color: #4bb3da;
        padding: 12px 20px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
        border: none;
        outline: none;
        color: #2c3e50;
        transition: color, background-color 0.3s ease-in-out;
    }

    /* Style the container */
    .container {
        border-radius: 5px;
        background-color: #999999;
        padding: 20px;
    }

    .dark {
        color: #f3f3f3;
        background-color: #2c3e50 !important;
        transition: color, background-color 0.3s ease-in-out;
    }

    .inputDark {
        color: #f3f3f3;
        background-color: #4f667d;
        border: 1px solid #15202b !important;
        transition: color, background-color 0.3s ease-in-out;

    }

    .inputDark::placeholder {
        color: #f3f3f3;
        transition: color 0.3s ease-in-out;
    }

    .btnDark {
        background-color: #00548b !important;
        transition: color, background-color 0.3s ease-in-out;
        color: #f3f3f3 !important;
    }

</style>
