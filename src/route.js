import {createRouter,createWebHistory} from 'vue-router'
import cart from './components/cart.vue'
import productions from './components/productions.vue'
import book from './components/book.vue'

const routes=[
    {path:'/',
    component:productions},
    {path:'/cart',
    component:cart},
    {path:'/book/:id',
    component:book}
];

const router = createRouter({
    routes:routes,
    history:createWebHistory()
});

export default router;