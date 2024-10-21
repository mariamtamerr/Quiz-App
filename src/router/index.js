
import QuizQuestions from "@/views/QuizQuestions.vue";
import QuizzesView from "@/views/QuizzesView.vue";

import {  createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes : [
        {
            path: '/',
            name: 'home',
            component: QuizzesView
        },
        {
            path: '/quiz/:id',
            name: 'questions',
            component: QuizQuestions
        },
    ]
})

export default router;