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
import UserSettings from '../views/UsersProfile/components/UserSettings.vue'
import ChangeProfile from '../views/UsersProfile/components/ChangeProfile.vue'
import ChangePassword from '../views/UsersProfile/components/ChangePassword.vue'

import Resource from '../views/Resource.vue'
import Edit from '../views/Edit.vue'

import ResetPsw from '../views/ResetPsw.vue'

import Test from '../views/Test.vue'

import NotFound from '../views/NotFound.vue'

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

    // 分类
    {
      path: '/classification',
      component: Classification,
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
        }
      ]
    },

    // 个人中心 - 设置
    {
      path: '/users/:id/settings',
      component: UserSettings,
      meta: {
        showHeader: true
      },
      children: [
        {
          path: 'profile',
          alias: '/users/:id/settings',
          component: ChangeProfile,
          meta: {
            showHeader: true
          }
        },
        {
          path: 'password',
          component: ChangePassword,
          meta: {
            showHeader: true
          }
        }
      ]
    },

    // 个人中心 -注销
    {
      path: 'users/:id/logout'
    },

    // 取得资源
    {
      path: '/resources/:id',
      component: Resource,
      meta: {
        showHeader: true
      }
    },

    // 编辑文章
    {
      path: '/resources/:id/edit',
      component: Edit
    },

    {
      path: '/reset-password/:token',
      component: ResetPsw
    },

    // 测试
    {
      path: '/test',
      component: Test
    },

    // 404
    {
      path: '*',
      component: NotFound
    }
  ]
})
