// 通过mutations修改state

import {
  LOG_IN,
  LOG_OUT,
  REGISTER, // 不更新state
  VALIDATE_TOKEN,
  GET_RECOMMEND_RESOURCES,
  GET_CLASSIFICATIOIN_RESOURCES,
  SEARCH,
  GET_USER_INFO,
  WRITE, // 不更新state
  SET_USER_INFO, // 不更新state
  CHANGE_PASSWORD, // 不更新state
  FORGET_PASSWORD, // 不更新state
  RESET_PASSWORD, // 不更新state
  GET_RESOURCE,
  COMMENT, // 不更新state
  ADD_LIKE_COUNTS, // 不更新state
  ADD_COLLECTION_COUNTS, // 不更新state
  EDIT // 不更新state
} from './mutation-types'

// 引入封装的axios api方法

export default {
  // 登陆后，获取登陆用户的信息
  [LOG_IN](state, user) {
    state.isLogin = true
    state.user = user
    /* state.isLogin = true
    state._id = user._id
    state.status = user.status
    state.gender = user.gender
    state.birthday = user.birthday
    state.location = user.location
    state.introduction = user.introduction
    state.collections = user.collections
    state.resources = user.resources
    state.username = user.username
    state.email = user.email
    state.avatar = user.avatar */
  },

  // 注销后，将用户信息清空还原
  [LOG_OUT](state) {
    state.isLogin = false
    stae.user = {}
    /* state.isLogin = false
    state._id = ''
    state.status = 0
    state.gender = 0
    state.birthday = []
    state.location = ''
    state.introduction = ''
    state.collections = ''
    state.resources = []
    state.username = ''
    state.email = ''
    state.avatar = '' */
  },

  // token 有效后对state进行修改
  [VALIDATE_TOKEN](state, user) {
    state.isLogin = true
    state.user = user
    /* state._id = user._id
    state.status = user.status
    state.gender = user.gender
    state.birthday = user.birthday
    state.location = user.location
    state.introduction = user.introduction
    state.collections = user.collections
    state.resources = user.resources
    state.username = user.username
    state.email = user.email
    state.avatar = user.avatar */
  },

  // ---------------资源相关
  [GET_RECOMMEND_RESOURCES](state, recommendResources) {
    state.recommendSourcesList = recommendResources
  },
  [GET_CLASSIFICATIOIN_RESOURCES](state, classificationResources) {
    state.classificationList = classificationResources
  },

  [SEARCH](state, searchResources) {
    state.searchList = searchResources
  },

  [GET_RESOURCE](state, resource) {
    state.resource = resource
  },

  // ------------ 用户中心相关
  [GET_USER_INFO](state, user) {
    state.profile = user
    /* state.profile_id = user._id
    state.profile_status = user.status
    state.profile_gender = user.gender
    state.profile_birthday = user.birthday
    state.profile_location = user.location
    state.profile_introduction = user.introduction
    state.profile_collections = user.collections
    state.profile_resources = user.resources
    state.profile_username = user.username
    state.profile_email = user.email
    state.profile_avatar = user.avatar */
  }
}
