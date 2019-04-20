import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 导入component部分
import About from '../views/About.vue'
import Classification from '../views/Classification.vue'
import Search from '../views/Search.vue'
import Recommend from '../views/Recommend.vue'
import Write from '../views/Write.vue'

import UsersProfile from '../views/UsersProfile/UsersProfile.vue'

import UserBasicInfo from '../views/UsersProfile/components/UserBasicInfo.vue'
import UsersResource from '../views/UsersProfile/components/UsersResource.vue'
import UserColletions from '../views/UsersProfile/components/UserColletions.vue'

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
    },

    // 个人中心
    {
      path: '/users/:id',
      component: UsersProfile,
      meta: {
        showHeader: true
      },
      children: [
        // 基础信息
        {
          path: 'basic-info',
          alias: '/users/:id',
          component: UserBasicInfo,
          meta: {
            showHeader: true
          }
        },

        // 个人资源
        {
          path: 'resources',
          component: UsersResource,
          meta: {
            showHeader: true
          }
        },

        // 个人收藏
        {
          path: 'collections',
          component: UserColletions,
          meta: {
            showHeader: true
          }
        },
      ]
    },
    // 个人中心 -注销
    {
      path: 'users/:id/logout'
    }
  ]
})
