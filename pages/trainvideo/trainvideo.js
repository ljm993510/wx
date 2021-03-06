// pages/trainvideo/trainvideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    false:false,
    currentTargetInfo:null,
    coverdisplay: "none", //默认显示封面图片
    videoBgShow:"block"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx = wx.createVideoContext('myVideo')
    this.videoCtx.play()

  },
  bindended:function(){
    this.setData({
      coverdisplay: "none",
      videoBgShow: 'block'
    })
    this.videoCtx.play()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;

    wx.getStorage({
      key: 'currentTargetInfo',
      success: function (res) {
        that.setData({
          currentTargetInfo: res.data
        })
        console.log(that.data.currentTargetInfo)
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  //这里点击播放按钮事件，播放视屏【把封面图片隐藏】
})