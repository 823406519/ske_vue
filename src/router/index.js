import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 导入component部分
import About from '../views/About.vue'
import Classification from '../views/Classification.vue'

// 导出router部分
export default new Router({
  routes: [
    {
      path: '/'
      // alias: '/recommend-resource'
    },
    {
      path: '/recommend-resource'
    },
    {
      path: '/about-us',
      component: About
    },
    {
      path: '/classification',
      component: Classification
    }
  ]
})
