// 通过mutations修改state

import { LOGIN, VALIDATE_TOKEN } from './mutation-types.js'

// 引入封装的axios api方法

export default {
  // 获取登陆用户的信息
  [LOGIN](state, user) {
    state.isLogin = true
    state.status = user.status
    state.gender = user.gender
    state.birthday = user.birthday
    state.location = user.location
    state.introduction = user.introduction
    state.collections = user.collections
    state.resources = user.resources
    state.username = user.username
    state.email = user.email
    state.avatar = user.avatar
  },

  // token 有效后对state进行修改
  [VALIDATE_TOKEN](state, user) {
    state.isLogin = true
    state.status = user.status
    state.gender = user.gender
    state.birthday = user.birthday
    state.location = user.location
    state.introduction = user.introduction
    state.collections = user.collections
    state.resources = user.resources
    state.username = user.username
    state.email = user.email
    state.avatar = user.avatar
  }
}
