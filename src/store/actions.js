import {
  LOG_IN,
  LOG_OUT,
  REGISTER, // 不需要committ
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
// 引入封装axios的api
import http from '../api/http'

export default {
  /**
   * @description 发送登陆请求
   * @params modal 用来显示登陆modal
   */
  async login({ commit }, { email, password }) {
    const result = await http.post('/users/actions/login', { email, password }) // 获取返回数据

    const { code, message, token, user } = result
    // 如果code 1
    if (code === 1) {
      localStorage.setItem('token', 'Bearer ' + token) // 保存token
      // commit提交mutation 改变state,使用user作为传递数据
      commit(LOG_IN, user)
    }
    return { code, message }
    // 不需要判断token的有效性
  },

  /**
   * @description 注销
   */
  async logout({ commit }) {
    // 不需要异步请求，需要清空localstorage 的token，还原state
    localStorage.setItem('token', 'Share Konwledge Everywhere')
    commit(LOG_OUT)
  },

  /**
   * @description 注册
   */
  async register({ commit }, { username, email, password, password2 }) {
    const result = await http.post('/users', {
      username,
      email,
      password,
      password2
    })
    const { code, message } = result
    // 不要提交mutation修改state
    return { code, message }
  },

  /**
   * @description 发送token验证请求
   */
  async validateToken({ commit }) {
    const result = await http.get('/token') // 返回数据
    const { code, message } = result
    if (code === 1) {
      const user = result.user
      commit(VALIDATE_TOKEN, user)
      return
    }

    //辅助测试
    /*  if (code === 0) {
      console.log('validate token message ---->', message)
    } */
  },

  /**
   * @description 忘记密码，发送邮件
   */
  async forgetPassword({ commit }, email) {
    const result = await http.post('/forget-password', { email })
    const { code, message } = result
    return { code, message }
  },

  /**
   * @description 重置密码
   */
  async resetPassword({ commit }, { token, password }) {
    console.log(token)
    const result = await http.post(`/reset-password/${token}`, { password })
    const { code, message } = result
    return { code, message }
  },

  // --------------------资源相关的
  /**
   * @description 获得推荐资源
   */
  async getRecommendResources({ commit }, sort) {
    const result = await http.get(`/recommend-resources/${sort}`)
    const { code, message, resources } = result

    // 获取错误
    if (code === 0) {
      console.log(message)
      return
    }

    if (code === 1) {
      commit(GET_RECOMMEND_RESOURCES, resources)
    }
  },

  /**
   * @description 获得分类资源
   */
  async getClassificationResources({ commit }, { classification, sort }) {
    const result = await http.get(
      `/classification-resources/${classification}/${sort}`
    )

    const { code, message } = result

    if (code === 0) {
      console.log(message)
      const resources = []
      commit(GET_CLASSIFICATIOIN_RESOURCES, resources)
      return
    }

    if (code === 1) {
      const resources = result.resources
      commit(GET_CLASSIFICATIOIN_RESOURCES, resources)
    }
  },

  /**
   * @description 获得搜索资源
   */
  async search({ commit }, { title, sort }) {
    const result = await http.get(`/search`, { title, sort })
    const { code, message } = result

    if (code === 0) {
      console.log('herer==>fff')
      console.log(message)
      const resources = []
      commit(SEARCH, resources)
      return
    }

    if (code === 1) {
      const resources = result.resources
      commit(SEARCH, resources)
    }
  },

  /**
   * @params 写文章或资源
   */
  async write({ commit }, { classification, title, content }) {
    const result = await http.post('/users/resources', {
      classification,
      title,
      content
    })

    if (result.code === 1) return result.message
  },

  async getResource({ commit }, _id) {
    const result = await http.get(`resources/${_id}`)
    const { code, message } = result

    if (code === 0) {
      console.log(message)
      return
    }
    if (code === 1) {
      const resource = result.resource
      commit(GET_RESOURCE, resource)
    }
  },

  /**
   * @description 写评论
   */
  async comment({ commit }, { _id, comment }) {
    const result = await http.post(`resources/${_id}/comments`, { comment })

    const { code, message } = result
    return { code, message }
  },

  /**
   * @description 增加点赞
   */
  async addLikeCounts({ commit }, _id) {
    const result = await http.put(`/resources/${_id}/like-counts`)
    const { code, message } = result
    return { code, message }
  },

  /**
   * @description 增加收藏
   */
  async addCollectionCounts({ commit }, _id) {
    const result = await http.put(`/resources/${_id}/collection-counts`)
    const { code, message } = result
    return { code, message }
  },

  /**
   * @description 编辑文章
   */
  async edit({ commit }, { _id, classification, title, content }) {
    const result = await http.put(`/resources/${_id}`, {
      classification,
      title,
      content
    })
    const { code, message } = result
    return { code, message }
  },

  // -------- 用户中心相关
  async getUserInfo({ commit }, _id) {
    const result = await http.get(`/users/${_id}`)
    const { code } = result
    if (code === 1) {
      const user = result.user
      commit(GET_USER_INFO, user)
    }
  },

  // 用户设置之修改用户信息
  async setUserInfo(
    { commit },
    { username, gender, age, location, introduction, mtto }
  ) {
    const result = await http.put('/users/profile', {
      username,
      gender,
      age,
      location,
      introduction,
      mtto
    })
    const { code, message } = result
    return { code, message }
  },

  // 用户设置之修改密码
  async changePassword({ commit }, { password, password2, password3 }) {
    const result = await http.put('/users/password', {
      password,
      password2,
      password3
    })

    const { code, message } = result
    return { code, message }
  }
}
