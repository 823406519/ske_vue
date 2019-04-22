export default {
  isLogin: false, // 登陆的状态

  // 保存登陆的用户的信息
  status: 0, // 是否激活，0默认为不激活
  gender: 0, // 性别，0是男
  birthday: [], // 存放生日
  locatioin: '', // 常住地
  mtto: '', //座右铭
  introduction: '', // 个人简介
  collections: [], // 存放收藏资源的id数组
  resources: [], // 存放资源的id数组
  username: '', // 用户名
  email: '', // 邮箱
  avatar: '', // 全球头像地址

  // 其他用户个人中心信息
  user_status: 0, // 是否激活，0默认为不激活
  user_gender: 0, // 性别，0是男
  user_birthday: [], // 存放生日
  user_locatioin: '', // 常住地
  user_mtto: '', //座右铭
  user_introduction: '', // 个人简介
  user_collections: [], // 存放收藏资源的id数组
  user_resources: [], // 存放资源的id数组
  user_username: '', // 用户名
  user_email: '', // 邮箱
  user_avatar: '', // 全球头像地址

  // 资源信息
  classification: 0, // 0-4 5个分类
  like_counts: 0, // 点赞数
  read_counts: 0, // 阅读数
  collection_counts: 6, // 收藏数
  r_id: '', // 资源id，对应获取的_id
  author_id: '', //作者id
  title: '', //标题
  content: '', // 内容
  last_update_time: '', //最后一次更新时间
  comments: [] // 评论，包括评论人id和评论内容
}
