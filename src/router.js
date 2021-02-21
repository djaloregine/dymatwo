import Vue from "vue";  
import VueRouter from "vue-router";

import Admin from "./components/features/Admin/Admin.vue";
import User from "./components/features/User/User.vue";

Vue.use(VueRouter); 

const router = new VueRouter ({
mode: 'history',
    routes : [ 
        {path : '*',
        redirect: '/shop'},
       {path : '/',
    redirect: '/shop' }, 
    {path: '/shop', 
component: User}, {
    path: '/admin', 
    component: Admin
}

    ]
})

export default router; 