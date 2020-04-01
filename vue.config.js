const path = require('path') // 引入path模块
function resolve (dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

module.exports = {
  publicPath: '././',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'localhost',
    port: 8082
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('views', resolve('./src/views'))
      .set('components', resolve('./src/components'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
