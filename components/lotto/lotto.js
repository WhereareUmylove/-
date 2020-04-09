Component({
  data: {
   lottoNumber:''
  },
  ready: function() {
  },
  methods: {
    getLotto: function(){
      this.setData({
        lottoNumber:"xxx"
      })
      var date = new Date()
      let day =  date.getDay()
      let month = date.getMonth()
      let appKey = "c5e2b1c6fc59e9b451d0aaac6887520d"
      let url = 'http://api.juheapi.com/japi/toh?key='+appKey+'&v=1.0&month='+month+'&day='+day
      wx.request({
        url: url,
        data: {},
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
      })
    },
  }
})