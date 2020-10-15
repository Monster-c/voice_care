import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import Personal from '../views/Personal/Personal.vue'
import Company from '../views/Company/Company.vue'
import About from '../views/About/About.vue'
import Register from '../views/Register/Register.vue'
import Login from '../views/Login/Login.vue'





//import HelloWorld from '@/components/HelloWorld'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}





Vue.use(VueRouter)








const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: Personal
  },
  {
    path: '/Company',
    name: 'Company',
    component: Company
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path:'/Register',
    name:"Register",
    component:Register
  },
  {
    path:'/Login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

//导出包
export default router
