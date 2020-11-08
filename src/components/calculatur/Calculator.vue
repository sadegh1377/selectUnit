<template>
    <div id="Calculator" class="center">
        <div class="calculator" :class="{white : isDark}">
            <div class="header" :class="{white : isDark}">
                <div class="menu" :class="{white : isDark}">
                    <button type="button" class="button" :class="{whiteButton : isDark}">
                        <font-awesome-icon icon="bars"></font-awesome-icon>
                    </button>
                </div>
                <div class="label" :class="{white : isDark}">
                    <div>
                        <p><b>calculator</b></p>
                    </div>
                </div>
                <div class="dark_and_light" :class="{whiteButton : isDark}">
                    <button type="button" class="button" @click="changeColor" :class="{whiteButton : isDark}">
                        <font-awesome-icon icon="moon"></font-awesome-icon>
                    </button>
                </div>
            </div>
            <div class="monitor">
                <div class="box">
                    <div class="screen" :class="{whiteScreen : isDark}">
                        <br>
                        <br>
                        <br>
                        <!--                        <span>{{inputNum}}</span>-->
                        <input type="text" class="" v-model="inputNum" :class="{whiteInput : isDark}">
                        <br>
                        <br>
                        <span class="text-left"
                              :class="{whiteInput : isDark}">answer is {{answer}}</span>
                    </div>
                    <!--                    <input type="text" class="screen" :class="{white : isDark}"-->
                    <!--                           v-model="inputNum"-->
                    <!--                           placeholder="0"-->
                    <!--                           :disabled="isDisable"/>-->
                </div>
            </div>
            <div class="buttons">
                <table class="table_button">
                    <tr>
                        <td>
                            <button type="button" class="button prime-button" value="c" :class="{whiteButton : isDark}"
                                    @click="deleteAll">
                                C
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="delete"
                                    :class="{whiteButton : isDark}"
                                    @click="deleteJustOne">
                                <font-awesome-icon icon="eraser"></font-awesome-icon>
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="%" :class="{whiteButton : isDark}"
                                    @click="square()">
                                √
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="/" :class="{whiteButton : isDark}"
                                    @click="getOperate('/')">
                                /
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="button" value="7" :class="{whiteButton : isDark}"
                                    @click="getOperate(7)">7
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="8" :class="{whiteButton : isDark}"
                                    @click="getOperate(8)">8
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="9" :class="{whiteButton : isDark}"
                                    @click="getOperate(9)">9
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="*" :class="{whiteButton : isDark}"
                                    @click="getOperate('*')">
                                x
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="button" value="4" :class="{whiteButton : isDark}"
                                    @click="getOperate(4)">4
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="5" :class="{whiteButton : isDark}"
                                    @click="getOperate(5)">5
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="6" :class="{whiteButton : isDark}"
                                    @click="getOperate(6)">6
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="-" :class="{whiteButton : isDark}"
                                    @click="getOperate('-')">
                                -
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="button" value="1" :class="{whiteButton : isDark}"
                                    @click="getOperate(1)">1
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="2" :class="{whiteButton : isDark}"
                                    @click="getOperate(2)">2
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="3" :class="{whiteButton : isDark}"
                                    @click="getOperate(3)">3
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button" value="+" :class="{whiteButton : isDark}"
                                    @click="getOperate('+')">
                                +
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" class="button" value="00" :class="{whiteButton : isDark}"
                                    @click="getOperate('00')">00
                            </button>
                        </td>
                        <td>
                            <button type="button"
                                    class="button"
                                    value="0"
                                    :class="{whiteButton : isDark}"
                                    @click="getOperate(0)"
                            >0
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button" value="." :class="{whiteButton : isDark}"
                                    @click="getOperate('.')">.
                            </button>
                        </td>
                        <td>
                            <button type="button" class="button prime-button"
                                    value="=" :class="{whiteButton : isDark}"
                                    @click="equal">
                                =
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Calculator",
        data() {
            return {
                isDark: false,
                isDisable: false,
                inputNum: "",
                answer: ""
            }
        },
        // watch: {
        //     inputNum() {
        //         this.isDisable = this.inputNum.length >= 9;
        //     }
        // },
        methods: {
            getOperate(element) {
                if (this.inputNum.charAt(0) === "0") {
                    this.inputNum = ""
                }
                // if (this.inputNum.length < 9) {
                this.inputNum += element;
                console.log(this.inputNum)
                // } else {}
            },
            square() {
                eval(this.inputNum) < 0 ? this.answer = "Can not suqre the negative value"
                    : this.answer = Math.sqrt(eval(this.inputNum));
            }
            ,
            equal() {
                this.answer = eval(this.inputNum);
            },

            changeColor() {
                this.isDark = !this.isDark;
            },

            deleteAll() {
                this.inputNum = "";
                this.answer = "";
                // this.isDisable = false
            },

            deleteJustOne() {
                this.inputNum = this.inputNum.slice(0, -1);
            },
        }
    }
</script>

<style scoped>

    input:focus {
        color: #f9f9f9;
    }

    .center {
        margin-right: auto;
        margin-left: auto;
        height: 200px;
        width: 200px;
    }

    .white {
        background-color: #f7f7f7 !important;
        color: black !important;
    }

    .whiteScreen {
        font-weight: bold;
        border: 0px;
        padding: 0px;
        background-color: white !important;
        width: 100%;
        height: 100%;
        color: white;
    }

    .whiteInput {
        background-color: white !important;
        color: #0a0a0a !important;
    }

    .whiteButton {
        background-color: #42b983 !important;
        width: 80%;
        height: 100%;
        border: 0px;
        padding: 0px;
        color: black !important;
        font-size: 15px;
        border-radius: 50%;
    }

    .whiteButton:focus {
        outline: none !important;
        background-color: #42b983 !important;
        color: white;
    }

    .whiteButton:hover {
        background-color: #42b983 !important;
        color: black;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=text] {
        width: 99%;
        color: white;
        border: none;
        background-color: #0a0a0a;
        -moz-appearance: textfield;
    }

    /*--------------------------------------------*/
    .calculator {
        /*-webkit-box-align: center;*/
        /*-ms-flex-align: center;*/
        /*align-items: center;*/
        text-align: center;
        color: cornsilk;
        position: absolute;
        width: 300px;
        height: 500px;
        background-color: black;
    }

    .calculator .header {
        width: 100%;
        height: 10%;
    }

    .calculator .header .menu {
        background-color: #0a0a0a;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        float: left;
    }

    .calculator .header .menu .button {
        background-color: #0a0a0a;
        width: 90%;
        height: 100%;
        border: 0px;
        padding: 0px;
        color: whitesmoke;
        border-radius: 50%;
    }

    .calculator .header .menu .button:hover {
        background-color: #42b983;
        color: black;
    }

    .calculator .header .menu .button:focus {
        outline: none;
        background-color: #42b983;
        color: black;
    }

    .calculator .header .label {
        background-color: #0a0a0a;
        text-align: center;
        width: 60%;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        float: left;
    }

    .calculator .header .label div {
        text-align: center;
        width: 70%;
        height: 100%;
        font-size: 18px;
        border-bottom: solid 2px whitesmoke;
    }

    .calculator .header .label div:hover {
        color: orange;
        border-bottom: solid 2px orange;
    }

    .calculator .header .dark_and_light {
        background-color: #0a0a0a;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        float: left;
    }

    .calculator .header .dark_and_light .button {
        background-color: #0a0a0a;
        width: 90%;
        height: 100%;
        border: 0px;
        padding: 0px;
        color: whitesmoke;
        border-radius: 50%;
    }

    .calculator .header .dark_and_light .button:hover {
        background-color: orange;
        color: black;
    }

    .calculator .header .dark_and_light .button:focus {
        outline: none;
        background-color: orangered;
        color: black;
    }

    .calculator .monitor {
        width: 100%;
        height: 40%;
    }

    .calculator .monitor .box {
        width: 100%;
        height: 100%;
    }

    .calculator .monitor .box .screen {
        font-weight: bold;
        border: 0px;
        padding: 0px;
        background-color: #0a0a0a;
        width: 100%;
        height: 100%;
        color: white;
    }

    .calculator .buttons {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
        height: 50%;
    }

    .calculator .buttons .table_button {
        width: 100%;
        height: 90%;
    }

    .calculator .buttons .table_button tr {
        width: 100%;
    }

    .calculator .buttons .table_button tr td {
        border-radius: 50%;
        width: 25%;
        height: 20%;
    }

    .calculator .buttons .table_button tr td .button {
        background-color: #0a0a0a;
        width: 80%;
        height: 100%;
        border: 0px;
        padding: 0px;
        color: whitesmoke;
        font-size: 15px;
        border-radius: 50%;
    }

    .calculator .buttons .table_button tr td .button:hover {
        background-color: orange;
        color: black;
    }

    .calculator .buttons .table_button tr td .button:focus {
        outline: none;
        background-color: orangered;
        color: white;
    }

    .calculator .buttons .table_button tr td .prime-button {
        color: orange;
    }

    .calculator .buttons .table_button tr td .prime-button:focus {
        outline: none;
        background-color: orangered;
        color: wheat;
    }

    /*# sourceMappingURL=calculator.css.map */
</style>
