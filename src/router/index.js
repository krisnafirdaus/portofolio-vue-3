import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../views/HomePage.vue';
import UsersPage from '../views/UsersPage.vue';
import NotFound from '../views/NotFound.vue';
import ExpenseTracker from '../views/ExpenseTracker.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        {
            path: "/users",
            name: "Users",
            component: UsersPage
        },
        {
            path: "/:catchAll(.*)",
            name: "NotFound",
            component: NotFound
        },
        {
            path: "/expense-tracker",
            name: "ExpenseTracker",
            component: ExpenseTracker
        }
    ]
})

export default router;