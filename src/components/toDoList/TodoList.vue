<template>
    <div id="TodoList" class="">

        <div class="container col-sm-12 col-md-8 col-lg-6 mainBackground border p-3">
            <div class="row p-1 m-0 border listBackground mt-2 rounded"
                 :class="{bgChecked: task.isChecked === true}"
                 v-for="(task,index) in tasksList" :key="index">
                <div class="col-sm-6 col-md-8 col-lg-8 text-right">
                    <input type="checkbox"
                           class="checkbox mt-3 col-sm-1 col-md-1 col-lg-1 "
                           v-model="task.isChecked"
                           @click="checked(task,index)">
                    <p class=" d-inline col-sm-11 col-md-11 col-lg-11"
                       :class="{checked : task.isChecked === true}"
                       v-if="!task.editing">{{task.taskName}}</p>
                    <input type="text"
                           class=" rounded col-lg-11"
                           v-else
                           v-focus
                           @blur="doneEditing(task)"
                           @keyup.enter="doneEditing(task)"
                           @keyup.esc="cancelEditing(task)"
                           v-model="task.taskName">
                </div>
                <div class="col-sm-6 col-md-4 col-lg-4 text-left">
                    <font-awesome-icon icon="tasks" class="mt-2 hover subTaskColor"
                                       @click="openSubTask(index)"></font-awesome-icon>
                    |
                    <font-awesome-icon icon="edit" class="mt-2 hover editColor"
                                       @click="editTask(task)"></font-awesome-icon>
                    |
                    <font-awesome-icon icon="trash" class="mt-2 hover deleteColor"
                                       @click="deleteTask(index,null)"></font-awesome-icon>
                </div>
                <transition name="fade">
                    <div v-show="task.isSubTaskOn" class="w-100 subTaskAnime">
                        <div class="row p-1 w-75 center border subListBackground mt-2 rounded"
                             :class="{bgChecked: subTask.isChecked === true}"
                             v-for="(subTask,subIndex) in tasksList[index].subTasks" :key="subIndex">
                            <div class="col-sm-6 col-md-8 col-lg-8 text-right p-0">
                                <input type="checkbox" class="checkbox mt-3" v-model="subTask.isChecked"
                                       @click="checked(subTask,null)">
                                <p class="mr-3 d-inline"
                                   :class="{checked : subTask.isChecked === true}"
                                   v-if="!subTask.editing">{{subTask.taskName}}</p>
                                <input type="text"
                                       class="mr-3 rounded"
                                       v-else
                                       v-focus
                                       @blur="doneEditing(subTask)"
                                       @keyup.enter="doneEditing(subTask)"
                                       @keyup.esc="cancelEditing(subTask)"
                                       v-model="subTask.taskName">
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-4 text-left">
                                <font-awesome-icon icon="edit" class="mt-2 hover editColor"
                                                   @click="editTask(subTask)"></font-awesome-icon>
                                |
                                <font-awesome-icon icon="trash" class="mt-2 hover deleteColor"
                                                   @click="deleteTask(index,subIndex)"></font-awesome-icon>
                            </div>
                        </div>
                        <input type="text" class="center  mt-2 text-center"
                               v-model="task.subTaskName"
                               @keyup.enter="addSubTask(index,task.subTaskName)"
                               v-focus
                               placeholder="پروژه شبکه">
                    </div>
                </transition>
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
                        taskName: "انجام پروژه های درسی",
                        isChecked: false,
                        editing: false,
                        isSubTaskOn: false,
                        subTaskName: null,
                        subTasks: [
                            {
                                taskName: "پروژه شبکه",
                                isChecked: false,
                                editing: false,
                            }
                        ]
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
                        editing: false,
                        isSubTaskOn: false,
                        subTasks: [
                            {
                                taskName: "پروژه شبکه",
                                isChecked: false,
                                editing: false,
                            }
                        ]
                    })
                    this.taskName = null;
                    this.feedback = null;
                }
            },
            addSubTask(index, subTaskName) {
                if (subTaskName === null ||
                    subTaskName === "" ||
                    subTaskName.match(/^ *$/) !== null) {
                    this.feedback = "نام کار نمیتواند خالی باشد"
                } else {
                    this.tasksList[index].subTasks.push(
                        {
                            taskName: subTaskName,
                            isChecked: false,
                            editing: false
                        })
                    this.tasksList[index].subTaskName = null;
                    this.feedback = null;
                }
            },
            openSubTask(index) {
                this.tasksList[index].isSubTaskOn = !this.tasksList[index].isSubTaskOn;
            },
            deleteTask(index, subIndex) {
                if (subIndex === null) {
                    this.tasksList.splice(index, 1);

                } else {
                    this.tasksList[index].subTasks.splice(subIndex, 1);
                }
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
            checked(task, index) {
                if (index === null) {
                    this.isChecked = task.isChecked === false;
                } else {
                    task.subTasks.forEach((subTask) => {
                        subTask.isChecked = task.isChecked === false;
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .center {
        margin-left: auto;
        margin-right: auto;
    }

    .fade-enter-active {
        transition: max-height .3s ease-in, opacity .9s ease-in-out;
        max-height: 1000px;
    }

    .fade-leave-active {
        transition: max-height 0.4s ease-out, opacity 0.2s ease-in-out;
        max-height: 1000px;
    }

    .fade-enter, .fade-leave-to {
        max-height: 0;
        opacity: 0;
    }

    .editColor {
        color: #0d86ff;
    }

    .deleteColor {
        color: #f84949;
    }

    .subTaskColor {
        color: #8400ff;
    }

    .mainBackground {
        background-color: #f9f9f9;
    }

    .listBackground {
        background-color: #f1f1f1;
    }

    .subListBackground {
        background-color: #f9f9f9;
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
        background-color: #6ae7af;
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