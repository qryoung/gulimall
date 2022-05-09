module.exports = {

    // 关闭校验
    lintOnSave: false,

    devServer: {
        proxy: {
        //   '/': {
        //     target: 'http://gmall-h5-api.atguigu.cn',
        //     secure: true,
        //     changeOrigin: true
        //   },
          '/api/': {
            target: 'http://gmall-h5-api.atguigu.cn', //  接口路径
            ws: true, // 如果要代理websockets，配置该参数
            secure: false, // 如果接口为https，需要配置该参数
            changeOrigin: true, // 是否跨域
            // pathRewrite: { // 改写接口请求地址，把/api改为/         http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
              '^/api': '/'
            // }
          }
        }
      }
    




}