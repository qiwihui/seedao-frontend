
module.exports = {
  devServer: {
    proxy: {
      "/discordBotApi": {
        target: "http://8.210.30.59",//process.env.VUE_APP_API_URL, 
        secure: false,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/discordBotApi': ''
        // }
      }
    }
  }
};
