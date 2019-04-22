import { LOGIN, VALIDATE_TOKEN } from './mutation-types.js'
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
      commit(LOGIN, user)
    }
    return { code, message }
    // 不需要判断token的有效性
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
  }
}
