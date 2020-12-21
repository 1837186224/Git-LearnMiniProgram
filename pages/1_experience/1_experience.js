// pages/1_experience/1_experience.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'ww',
    age:18,
    students:[
      {id:100,name:'kako1',age:18},
      {id:101,name:'kako2',age:19},
      {id:102,name:'kako3',age:20},
      {id:103,name:'kako4',age:21}
    ],
    counter:0
  },
  // 增加
  addNum(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  // 减少
  lessNum(){
    this.setData({
      counter:this.data.counter - 1
    })
  }

 
})