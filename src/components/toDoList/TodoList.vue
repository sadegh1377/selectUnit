<template>
    <div id="TodoList" class="">
        <div class="container col-sm-12 col-md-8 col-lg-6 mainBackground border p-3">
            <div class="row p-1 m-0 border listBackground mt-2"
                 :class="{bgChecked: task.isChecked === true}"
                 v-for="(task,index) in tasksList" :key="index">
                <div class="col-sm-6 col-md-8 col-lg-8 text-right p-0">
                    <input type="checkbox" class="checkbox mt-3" v-model="task.isChecked"
                           @click="checked(task)">
                    <p class="mr-3 d-inline"
                       :class="{checked : task.isChecked === true}"
                       v-if="!task.editing">{{task.taskName}}</p>
                    <input type="text"
                           class="mr-3 rounded"
                           v-else
                           v-focus
                           @blur="doneEditing(task)"
                           @keyup.enter="doneEditing(task)"
                           @keyup.esc="cancelEditing(task)"
                           v-model="task.taskName">
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 text-left">
                    <font-awesome-icon icon="edit" class="mt-2 hover"
                                       @click="editTask(task)"></font-awesome-icon>
                    |
                    <font-awesome-icon icon="trash" class="mt-2 hover"
                                       @click="deleteTack(index)"></font-awesome-icon>
                </div>
            </div>
            <div class="mt-2">
                <input type="text" class="w-75 text-center "
                       v-model="taskName"
                       @keyup.enter="addTask"
                       v-focus
                       placeholder="کار های خود را اینجا وارد کنید و اینتر بزنید">
                <p class="text-danger" v-if="feedback">{{feedback}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TodoList",
        data() {
            return {
                taskName: null,
                isChecked: false,
                beforeEditTask: null,
                tasksList: [
                    {
                        taskName: "انجام پروژه درسی",
                        isChecked: false,
                        editing: false
                    }
                ],
                feedback: null

            }
        },
        directives: {
            focus: {
                inserted(el) {
                    el.focus()
                }
            }
        },
        methods: {
            addTask() {
                if (this.taskName === null ||
                    this.taskName === "" ||
                    this.taskName.match(/^ *$/) !== null) {
                    this.feedback = "نام کار نمیتواند خالی باشد"
                } else {
                    this.tasksList.push({
                        taskName: this.taskName,
                        isChecked: false,
                        editing: false
                    })
                    this.taskName = null;
                    this.feedback = null;
                }
            },
            deleteTack(task) {
                this.tasksList.splice(task, 1);
                if (this.tasksList.length === 0) {
                    this.feedback = null;
                }
            },
            editTask(task) {
                this.beforeEditTask = task.taskName;
                task.editing = true;
            },
            doneEditing(task) {
                if (task.taskName.trim() === "") {
                    task.taskName = this.beforeEditTask;
                }
                task.editing = false;
            },
            cancelEditing(task) {
                task.taskName = this.beforeEditTask;
                task.editing = false;
            },
            checked(task) {
                this.isChecked = task.isChecked === false;
            }
        }
    }
</script>

<style scoped>
    .mainBackground {
        background-color: #f9f9f9;
    }

    .listBackground {
        background-color: #f1f1f1;
    }

    .checkbox {
        /*margin-top: 1px;*/
        height: 20px;
        width: 20px;
        background-color: #eee;
    }

    .hover {
        cursor: pointer;
    }

    .checked {
        text-decoration: line-through;
    }

    .bgChecked {
        background-color: #42b983;
        /*color: #f9f9f9;*/
    }

    input {
        /*text-align: center;*/
        opacity: 0.8;
        padding: 5px;
        border: 1px solid #333333;
        border-radius: 10px;
        outline: none;
        width: 210px;
        /*font-weight: 400;*/
    }
</style>