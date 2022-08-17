import {createRouter} from "vue-router/dist/vue-router";
import {createWebHistory} from "vue-router/dist/vue-router";

import MyComponent from "../components/MyComponent.vue";
import MyComponent2 from "../components/MyComponent2.vue";

import BooksCreate from "../components/books/BooksCreate.vue";
import BooksIndex from "../components/books/BooksIndex.vue";
import Dashboard from "../components/Dashboard.vue";
import BooksDetails from "../components/books/BooksDetails.vue";
import BooksUpdate from "../components/books/BooksUpdate.vue";
import Login from "../components/auth/Login.vue";

const isNotAuthenticated = (to, from, next) => {
    if (!!localStorage.getItem('user-token')) {
        next()
        return
    }
    next('/login')
}

const routes = [
    {
        path: '/login',
        name: 'login',
        props: true,
        component: Login
    },
    {
        path: '/books/:id',
        name: 'books.update',
        props: true,
        component: BooksUpdate,
        beforeEnter: isNotAuthenticated,
    },
    {
        path: '/books',
        name: 'books.create',
        component: BooksCreate,
        beforeEnter: isNotAuthenticated,
    },
    {
        path: '/books',
        name: 'books.index',
        component: BooksIndex,
        beforeEnter: isNotAuthenticated,
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/books/:id',
        name: 'books.details',
        props: true,
        component: BooksDetails,
        beforeEnter: isNotAuthenticated,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})