import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodoList from '@/views/todo-list/TodoList.vue';
import Author from '@/views/author/Author.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: TodoList,
    },
    {
        path: '/author',
        name: 'Author',
        component:  Author,
    }
]

const router = new VueRouter({
    routes
})

export default router
