Component({
  data: {
    dailerDateSecond:[],
    dailerDateMinute:[],
    dailerDateDail:[],
    hourDate:[],
    time:'',
    day:'',
    date:'',
    ds:0,
    dm:0,
    dh:0,
    days:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months:["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
  },
  ready: function() {
    this.start()
  },
  methods: {
    onMyButtonTap: function(){
      this.setData({
        // 更新属性和数据的方法与更新页面数据的方法类似
      })
    },
    getTime:function () {
      var date = new Date(),
      second  = date.getSeconds() ,
      minute  = date.getMinutes() ,
      hour    = date.getHours() ,
      time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true }),
      day =  date.getDay() ,
      month = date.getMonth() ,
      date = date.getDate() +' . '+ this.data.months[month],
      ds = second * -6,
      dm = minute * -6,
      dh = hour * -30;

      this.setData({
        ds:ds
      })
      this.setData({
        dm:dm
      })
      this.setData({
        dh:dh
      })
      this.setData({
        time:time
      })
      this.setData({
        day:this.data.days[day]
      })
      this.setData({
        date:date
      })
    },
    dailer:function( name , size){
      for(var s = 0; s < 60 ; s++){
        let obj = {
          rotate:6*s,
          translateX:size,
          content:s
        }
        let newDailer = this.data[name]
        newDailer.push(obj)
        return newDailer
     }
    },
    start:function(){
      let second = this.dailer('dailerDateSecond',195)
      this.setData({
        dailerDateSecond:second
      })
      let minute = this.dailer('dailerDateMinute',145)
      this.setData({
        dailerDateMinute:minute
      })
      let dail = this.dailer('dailerDateDail',230)
      this.setData({
        dailerDateDail:dail
      })

      for(var s = 1; s < 13 ; s++){
        let obj = {
          rotate:30*s,
          content:s
        }
        let newHour = this.data.hourDate
        newHour.push(obj)
        this.setData({
          hourDate:newHour
        })
      }
      setInterval(()=> {
        var date = new Date(),
        second  = date.getSeconds() ,
        minute  = date.getMinutes() ,
        hour    = date.getHours() ,
        time = date.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true }),
        day =  date.getDay() ,
        month = date.getMonth() ,
        date = date.getDate() +' . '+ this.data.months[month],
        ds = second * -6,
        dm = minute * -6,
        dh = hour * -30;
  
        this.setData({
          ds:ds
        })
        this.setData({
          dm:dm
        })
        this.setData({
          dh:dh
        })
        this.setData({
          time:time
        })
        this.setData({
          day:this.data.days[day]
        })
        this.setData({
          date:date
        })
      }, 1000);
      this.getTime();
    },
    // 内部方法建议以下划线开头
    _myPrivateMethod: function(){
      // 这里将 data.A[0].B 设为 'myPrivateData'
      this.setData({
        'A[0].B': 'myPrivateData'
      })
    },
    _propertyChange: function(newVal, oldVal) {

    }
  }
})