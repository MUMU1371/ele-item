import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import found from '../pages/found'
import order from '../pages/order'
import mine from '../pages/mine'
import set from '../pages/set'
import search from '../pages/search'
import fruit from '../pages/fruit'
import fruitsort from '../pages/fruitsort'
import prefer from '../pages/prefer'
import shopDetail from '../pages/shopDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component:home,
      meta: {
        show: true
      }
    },
    {
      path: '/',
      redirect: '/home',
      meta: {
        show: true
      }
    },
    {
      path: '/found',
      component: found,
      meta: {
        show: true
      }
    },
    {
      path: '/order',
      component: order,
      meta: {
        show: true
      }
    },
    {
      path: '/mine',
      component: mine,
      meta: {
        show: true
      }
    },
    {
      path: '/set',
      component:set,
      meta: {
        show: false
      }
    },
    {
      path: '/search',
      component:search,
      meta: {
        show: false
      }
    },
    {
      path:'/fruit',
      component:fruit,
      meta:{
        show:false
      }
    },
    {
      path:'/fruitsort',
      component:fruitsort,
      meta:{
        show:false
      }
    },
    {
      path:'/prefer',
      component:prefer,
      meta:{
        show:false
      }
    },
    {
      path:'/shopDetail',
      component:shopDetail,
      meta:{
        show:false
      }
    }
  ]
})
