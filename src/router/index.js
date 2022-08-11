import {createRouter} from "vue-router/dist/vue-router";
import {createWebHistory} from "vue-router/dist/vue-router";

import MyComponent from "../components/MyComponent.vue";
import MyComponent2 from "../components/MyComponent2.vue";

import BooksCreate from "../components/books/BooksCreate.vue";
import BooksIndex from "../components/books/BooksIndex.vue";
import Dashboard from "../components/Dashboard.vue";
import BooksDetails from "../components/books/BooksDetails.vue";

const routes = [
    {
        path: '/books',
        name: 'books.create',
        component: BooksCreate
    },
    {
        path: '/books',
        name: 'books.index',
        component: BooksIndex
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/books/:id/details',
        name: 'books.details',
        props: true,
        component: BooksDetails
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})