import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../view/home/Home";
import Category from "../view/category/Category";
import Cart from "../view/cart/Cart";
import Profile from "../view/profile/Profile";

Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:Home
  },{
    path:"/category",
    component:Category
  },{
    path:"/cart",
    component:Cart
  },{
    path:"/profile",
    component:Profile
  }
]

const router = new VueRouter({
  routes
})

export  default router
