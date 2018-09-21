import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import found from '../pages/found'
import order from '../pages/order'
import mine from '../pages/mine'


Vue.use(Router)

export default new Router({
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
    }
  ]
})
