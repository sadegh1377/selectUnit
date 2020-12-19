import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectUnit from '../components/selectUnit/SelectUnit.vue'
import CalculateAvg from "../components/average/CalculateAvg";
import TodoList from "../components/toDoList/TodoList";
import Calculator from "../components/calculatur/Calculator";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SelectUnit',
        component: SelectUnit
    },
    {
        path: '/calculate-avg',
        name: 'CalculateAvg',
        component: CalculateAvg
    },
    {
        path: '/to-do-list',
        name: 'ToDoList',
        component: TodoList
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
