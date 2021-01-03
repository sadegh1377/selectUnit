<template>
    <div id="Login">
        <div class="container bg-light" :class="this.$store.state.mode">
            <form @submit.prevent="submit">
                <div class="">
                    <input type="email" id="email" name="email" placeholder="ایمیل" v-model="email"
                           :class="{inputDark:this.$store.state.mode === 'dark'}">
                </div>
                <div class="">
                    <input type="text" id="name" name="name" placeholder="نام کاربری" v-model="userName"
                           :class="{inputDark:this.$store.state.mode === 'dark'}">
                </div>
                <div class="">
                    <input type="password" id="location" name="location" placeholder="رمز عبور" v-model="password"
                           :class="{inputDark:this.$store.state.mode === 'dark'}">
                </div>
                <br>
                <button class="btn-block bg-color" :class="{btnDark:this.$store.state.mode === 'dark'}">ثبت نام</button>
            </form>
            <br>
            <p class="bg-danger font-weight-bold text-white" v-if="feedback">{{feedback}}</p>
        </div>
    </div>
</template>

<script>
    import slugify from "slugify"
    import firebase from "firebase"
    import db from "../firebase/init.js"

    export default {
        name: "SingUp",
        data() {
            return {
                userName: null,
                password: null,
                email: null,
                feedback: null,
                slug: null
            }
        },
        methods: {
            submit() {
                if (this.userName && this.email && this.password) {
                    this.slug = slugify(this.userName, {
                        replacement: "-",
                        remove: / [$ * _ += ~()'"!\-;@]/g,
                        lower: true
                    });
                    let ref = db.collection("users").doc(this.userName);
                    ref.get().then(doc => {
                        if (doc.exists) {
                            this.feedback = 'این نام کاربری موجود است'
                        } else {
                            firebase.auth().createUserWithEmailAndPassword(
                                this.email,
                                this.password
                            ).then(cred => {
                                ref.set({
                                    userName: this.userName,
                                    user_id: cred.user.uid
                                })
                            }).then(() => {
                                this.$router.push({name: 'Home'})
                            })
                                .catch(err => {
                                    console.log(err)
                                    this.feedback = err.message
                                })
                        }
                    })

                } else {
                    this.feedback = "جاهای خالی را پر کنید"
                }
            }
        }
    }
</script>

<style scoped>
    /* Style inputs, select elements and textareas */
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
