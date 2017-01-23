//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello，我是刘伟',
    userInfo: {},
    flag: true,
    meetingDate: new Date(),
    meetingTime: new Date()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeName: function(e) {
    // get app
    var app = getApp();

    // sent data change to view
    this.setData({
      motto: app.globalData,
      flag: !(this.data.flag)
    })
  },
  onShareAppMessage: function () {
   app.appendLog("Index page shared.");
  },
  onLoad: function () {
    console.log('onLoad')
    app.appendLog("Index page loaded.");
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
    bindDateChange: function(e) {
    this.setData({
      meetingDate: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      meetingTime: e.detail.value
    })
  }
})
