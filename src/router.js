import Vue from "vue";  
import VueRouter from "vue-router";
import TheHead from "./components/TheHead";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

Vue.use(VueRouter); 

const router = new VueRouter ({
mode: 'history',
    routes : [ 
        {path: '*',
    component: TheHead.vue},
       {path : '/',
    component: TheHead.vue }, 
    {path: '/Administration', 
component: Cart.vue}, {
    path: '/Boutique', 
    component: Shop.vue
}

    ]
})

export default router; 