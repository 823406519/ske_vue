module.exports = {
  presets: ['@vue/app'],
  plugins: [
    // 配置element-ui 的按需导入
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
