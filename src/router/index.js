import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CalculateAvg from "../components/average/CalculateAvg";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/calculate-avg',
        name: 'CalculateAvg',
        component: CalculateAvg
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
