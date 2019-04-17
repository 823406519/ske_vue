# 使用vue-cli手动配置创建项目
1. 安装
  yarn global add @vue/cli
2. 创建项目
  vue create ske_vue 
3. 选择配置
   - Babel
   - Router
     - 选择不使用history mode
   - Vuex
   - Css Pre-processors
     - Sass/SCSS (with node-sass)
   - Linter/formatter
     - ESLint + Prettier
     - Lint on save
   - Unit Testing
     - Jest
   - 选择在单独的文件配置以上的选择
   - 选择不保存这个开发环境

# 项目目录
  - node_modules 包文件夹
  - public 静态资源文件夹
  - src 源码目录
    - assets 静态资源目录
      - css
      - font
      - images
      - scss
    - component 组件目录
    - router 路由目录 
    - store 组件目录
    - views 页面目录
    - App.vue 页面入口
    - main.js 项目入口
  - tests 测试目录
  - .gitignore git提交忽略的内容配置
  - babel.config.js babel的配置
  - package.json 包描述文件
  - postcss.config.js css预编译配置文件
  - README.md 项目描述文件
  - vue.config.js 进行vue-cli的配置
  - yarn.lock yarn用于锁定版本安装的文件

# git 同步


# 前端模块页面整体构造

# 路由路由设计

# 安装eleent-ui 作为ui库
  - yarn add babel-plugin-component element-ui（按需导入）


