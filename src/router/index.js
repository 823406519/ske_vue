import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 导入component部分
import About from '../views/About.vue'
import Classification from '../views/Classification.vue'
import Search from '../views/Search.vue'
import Recommend from '../views/Recommend.vue'
import Write from '../views/Write.vue'

// 导出router部分
export default new Router({
  routes: [
    // 推荐资源
    {
      path: '/recommend-resource',
      alias: '/',
      component: Recommend,
      meta: {
        showHeader: true
      }
    },

    // 关于我们
    {
      path: '/about-us',
      component: About,
      meta: {
        showHeader: true
      }
    },

    // 分类
    {
      path: '/classification',
      component: Classification,
      meta: {
        showHeader: true
      }
    },

    // 搜索
    {
      path: '/search/:title',
      component: Search,
      meta: {
        showHeader: true
      }
    },

    // 写文章
    {
      path: '/write',
      component: Write,
      meta: {
        showHeader: false
      }
    }
  ]
})
