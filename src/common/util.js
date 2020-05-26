export default {
  formatDate(time) {
    var date = new Date(time)
    const dateNumFun = (num) => num < 10 ? `0${num}` : num
    const [Y, M, D, h, m, s] = [
      date.getFullYear(),
      dateNumFun(date.getMonth() + 1),
      dateNumFun(date.getDate()),
      dateNumFun(date.getHours()),
      dateNumFun(date.getMinutes()),
      dateNumFun(date.getSeconds())
    ]
    return `${Y}-${M}-${D}`
  },
  fullDate(time) {
    if (!time) { // 当时间是null或者无效格式时我们返回空
      return ' '
    } else {
      var time = time.replace(/\-/g, "\/");
      const date = new Date(Number.parseInt(time)) // 时间戳为10位需*1000，时间戳为13位的话不需乘100
      const dateNumFun = (num) => num < 10 ? `0${num}` : num // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
      // 这是es6的解构赋值。
      const [Y, M, D, h, m, s] = [
        date.getFullYear(),
        dateNumFun(date.getMonth() + 1),
        dateNumFun(date.getDate()),
        dateNumFun(date.getHours()),
        dateNumFun(date.getMinutes()),
        dateNumFun(date.getSeconds())
      ]
      return `${Y}-${M}-${D} ${h}:${m}:${s}` // 一定要注意是反引号，否则无效。
    }
  },
  onlyDate(time) {
    if (!time) { // 当时间是null或者无效格式时我们返回空
      return ' '
    } else {
      var time = time.replace(/\-/g, "\/");
      const date = new Date(time) // 时间戳为10位需*1000，时间戳为13位的话不需乘100
      const dateNumFun = (num) => num < 10 ? `0${num}` : num // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
      // 这是es6的解构赋值。
      const [Y, M, D, h, m, s] = [
        date.getFullYear(),
        dateNumFun(date.getMonth() + 1),
        dateNumFun(date.getDate()),
        dateNumFun(date.getHours()),
        dateNumFun(date.getMinutes()),
        dateNumFun(date.getSeconds())
      ]
      return `${Y}-${M}-${D}` // 一定要注意是反引号，否则无效。
    }
  },
  minDate(time) {
    if (!time) { // 当时间是null或者无效格式时我们返回空
      return ' '
    } else {
      var time = time.replace(/\-/g, "\/");
      const date = new Date(time) // 时间戳为10位需*1000，时间戳为13位的话不需乘100
      const dateNumFun = (num) => num < 10 ? `0${num}` : num // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
      // 这是es6的解构赋值。
      const [Y, M, D, h, m, s] = [
        date.getFullYear(),
        dateNumFun(date.getMonth() + 1),
        dateNumFun(date.getDate()),
        dateNumFun(date.getHours()),
        dateNumFun(date.getMinutes()),
        dateNumFun(date.getSeconds())
      ]
      return `${Y}-${M}-${D} ${h}:${m}` // 一定要注意是反引号，否则无效。
    }
  },
  onlyTime(time) {
    if (!time) { // 当时间是null或者无效格式时我们返回空
      return ' '
    } else {
      var time = time.replace(/\-/g, "\/");
      const date = new Date(time) // 时间戳为10位需*1000，时间戳为13位的话不需乘100
      const dateNumFun = (num) => num < 10 ? `0${num}` : num // 使用箭头函数和三目运算以及es6字符串的简单操作。因为只有一个操作不需要{} ，目的就是数字小于10，例如9那么就加上一个0，变成09，否则就返回本身。
      // 这是es6的解构赋值。
      const [Y, M, D, h, m, s] = [
        date.getFullYear(),
        dateNumFun(date.getMonth() + 1),
        dateNumFun(date.getDate()),
        dateNumFun(date.getHours()),
        dateNumFun(date.getMinutes()),
        dateNumFun(date.getSeconds())
      ]
      return `${h}:${m}` // 一定要注意是反引号，否则无效。
    }
  },
  getTime() {
    //获取当前时间
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return year + "-" + month + "-" + day;
  },
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
      " " + date.getHours() + seperator2 + date.getMinutes() +
      seperator2 + date.getSeconds();
    return currentdate;
  },
  getNow() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getHours() + seperator2 + date.getMinutes() +
      seperator2 + date.getSeconds();
    return currentdate;
  },
  formatPieceSize(data) {
    let datas = JSON.parse(data)
    let content = (datas.jian == '' || datas.jian == '0' ? '' : datas.jian + '件 ') +
      (datas.dai == '' || datas.dai == '0' ? '' : datas.dai + '袋 ') +
      (datas.che == '' || datas.che == '0' ? '' : datas.che + '车 ') +
      (datas.dun == '' || datas.dun == '0' ? '' : datas.dun + '吨')

    return content
  },
  checkTime(type, schedulingDate, time) {
    console.log(type)
    console.log(schedulingDate)
    // let currentdate = this.getNow()
    let currentdate = time
    let mins = currentdate.split(':')[1]
    let hour = currentdate.split(':')[0]
    if (type == 1) {
      if (mins <= 30) {
        mins = '30'
        // if (hour < 10) {
        //   hour = `0${hour}`
        // }
        return schedulingDate + ' ' + hour + ':' + mins
      } else {
        if (hour < 23) {
          mins = '00'
          hour = Number(hour) + 1
          if (hour < 10) {
            hour = `0${hour}`
          }
          return schedulingDate + ' ' + hour + ':' + mins
        } else {
          mins = '00'
          hour = '00'
          let date = this.addDate(schedulingDate)
          return date + ' ' + hour + ':' + mins
        }
      }
    } else {
      if (mins >= 30) {
        mins = '30'
      } else {
        mins = '00'
      }
      // if (hour < 10) {
      //   hour = `0${hour}`
      // }
      return schedulingDate + ' ' + hour + ':' + mins
    }

  },
  checkTime1(type) {
    let currentdate = this.getNow()
    let mins = currentdate.split(':')[1]
    let hour = currentdate.split(':')[0]
    console.log(hour)
    if (type == 1) {
      if (mins <= 30) {
        if (hour < 10) {
          hour = `0${hour}`
        }
        mins = '30'
      } else {
        if (hour < 23) {
          mins = '00'
          hour = Number(hour) + 1
          if (hour < 10) {
            hour = `0${hour}`
          }

        } else {
          mins = '00'
          hour = '00'
        }

      }
    } else {
      if (mins >= 30) {
        mins = '30'
      } else {
        mins = '00'
      }
      if (hour < 10) {
        hour = `0${hour}`
      }
    }

    console.log(hour)
    return hour + ':' + mins

  },
  addDate(date, days) {
    if (days == undefined || days == '') {
      days = 1;
    }
    date = date.replace(new RegExp(/-/gm), "/");
    var date = new Date(date);
    date.setDate(date.getDate() + days);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return date.getFullYear() + '-' + this.getFormatDate(month) + '-' + this.getFormatDate(day);
  },
  getFormatDate(arg) {
    if (arg == undefined || arg == '') {
      return '';
    }

    var re = arg + '';
    if (re.length < 2) {
      re = '0' + re;
    }

    return re;
  }
}