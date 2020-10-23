import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 首页
const Home = () => import('views/home/Home')

//搜索页面
const Search = () => import('views/search/Search')

// 购物车
const Cart = () => import('views/cart/Cart')

// 商品信息
const Goods = () => import('views/goods/Goods')

// 订单
const Order = () => import('views/profile/order/Order')

//发布商品
const Upgoods = () => import('views/profile/upgoods/Upgoods')

//设置
const Fit = () => import('views/profile/fit/Fit')

// 个人空间
const Porfile = () => import('views/profile/Profile')
const Login = () => import('views/login/Login')
const Register = () => import('views/register/Register')
//修改个人信息
const Info = () => import('views/profile/child/info/Info')


let routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name:'home',
    component: Home
  },
  {
    path: '/goods',
    name:'goods',
    component: Goods
  },
  {
    path: '/search',
    name:'search',
    component: Search
  },
  {
    path: '/cart',
    name:'cart',
    component: Cart
  },
  {
    path: '/porfile',
    name:'porfile',
    component: Porfile
  },
  {
    path: '/order',
    name:'order',
    component: Order
  },
  {
    path: '/upgoods',
    name:'upgoods',
    component: Upgoods
  },
  {
    path: '/fit',
    name:'fit',
    component: Fit
  },
  {
    path: '/login',
    name:'login',
    component: Login
  },
  {
    path: '/register',
    name:'register',
    component: Register
  },
  {
    path: '/info',
    name:'info',
    component: Info
  },
  {
    path:'**',
    redirect:'/home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/cart' || to.path === '/order' || to.path === '/info') {
    let token = localStorage.getItem('token');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  } else {
    next()
  }
})


export default router