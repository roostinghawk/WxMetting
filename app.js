//app.js
App({
  appendLog: function(message) {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(message)
    wx.setStorageSync('logs', logs)
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    this.appendLog("App launched");
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})