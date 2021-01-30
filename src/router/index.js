import Vue from 'vue'
import VueRouter from 'vue-router'
import SelectUnit from '../components/selectUnit/SelectUnit.vue'
import CalculateAvg from "../components/average/CalculateAvg";
import TodoList from "../components/toDoList/TodoList";
import Calculator from "../components/calculatur/Calculator";
import Voting from "../components/voting/Voting";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'SelectUnit',
        component: SelectUnit,
        meta:{
            title: 'انتخاب واحد',
            metaTags: [
                {
                    name: 'SelectUnit',
                    content: 'انتخاب واحد'
                }
            ]
        }
    },
    // {
    //     path: '/',
    //     name: 'Voting',
    //     component: Voting
    // },
    {
        path: '/calculate-avg',
        name: 'CalculateAvg',
        component: CalculateAvg,
        meta:{
            title: 'معدل',
            metaTags: [
                {
                    name: 'CalculateAvg',
                    content: 'محاسبه معدل'
                }
            ]
        }
    },
    {
        path: '/to-do-list',
        name: 'ToDoList',
        component: TodoList,
        meta:{
            title: 'لیست کار',
            metaTags: [
                {
                    name: 'ToDoList',
                    content: 'لیست انجام کار'
                }
            ]
        }
    },
    // {
    //     path: '/calculator',
    //     name: 'Calculator',
    //     component: Calculator
    // },
    {
        path: '*',
        name: 'NotFound',
        component: () => import("../components/notFound/NotFound.vue")
    }

]
const router = new VueRouter({
    mode: "history",
    routes
})

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

    // Find the nearest route element with meta tags.
    const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

    // If a route with a title was found, set the document (page) title to that value.
    if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

    // Remove any stale meta tags from the document using the key attribute we set below.
    Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

    // Skip rendering meta tags if there are none.
    if(!nearestWithMeta) return next();

    // Turn the meta tag definitions into actual elements in the head.
    nearestWithMeta.meta.metaTags.map(tagDef => {
        const tag = document.createElement('meta');

        Object.keys(tagDef).forEach(key => {
            tag.setAttribute(key, tagDef[key]);
        });

        // We use this to track which meta tags we create so we don't interfere with other ones.
        tag.setAttribute('data-vue-router-controlled', '');

        return tag;
    })
        // Add the meta tags to the document head.
        .forEach(tag => document.head.appendChild(tag));

    next();
});



export default router
