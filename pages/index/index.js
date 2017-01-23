var util = require('../../utils/util.js')

//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello，我是刘伟',
    userInfo: {},
    flag: true,
    validStartDate : util.formatDate(new Date()),
    meetingDate: util.formatDate(new Date()),
    meetingStartTime: util.formatTime(new Date())
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 发起会议
  submitMeeting: function(e) {
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
  bindStartTimeChange: function(e) {
    this.setData({
      meetingStartTime: e.detail.value
    })
  },
   bindEndTimeChange: function(e) {
    this.setData({
      meetingEndTime: e.detail.value
    })
  }
})
