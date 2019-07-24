/**
 *  drawbar方法，画柱形图
 * @param {string} id [div的id]
 * @param {sring} text [请求时携带的参数]
 * @param {sring} xdata [请求时携带的参数]
 * @param {sring} name [请求时携带的参数]
 * @param {sring} type [请求时携带的参数]
 * @param {sring} data [请求时携带的参数]
 */

export function drawBar(id,legend,name,data){
     // 基于准备好的dom，初始化echarts实例
     let myChart = this.$echarts.init(document.getElementById(id))
     // 绘制图表
     myChart.setOption({
         tooltip: {},
         xAxis: {
             data: legend,
             axisLabel :{
                interval:0,
                rotate:-15,//-15度角倾斜显示
                textStyle:{
                color:"#fff", //刻度颜色

            }
            },

         },
         yAxis: {
           axisLabel :{
              textStyle:{
               color:"#fff", //刻度颜色
          }
          },
         },
         series: [{
             name: name,
             type: 'bar',
             data: data,
             itemStyle: {
                   normal: {
                       label: {
                           show: true,		//开启显示
                           position: 'top',	//在上方显示
                           textStyle: {	    //数值样式
                               color: '#fff',
                               fontSize: 14
                           }
                       }
                   }
               },

         }]
     });
 }
 export function drawBar_color(id,legend,name,data){
   // 基于准备好的dom，初始化echarts实例
   let myChart = this.$echarts.init(document.getElementById(id))
   // 绘制图表
   myChart.setOption({

       tooltip: {},
       xAxis: {
           data: legend,
           axisLabel :{
              interval:0,
              rotate:-45,//-15度角倾斜显示
              textStyle:{
              color:"#c33531", //刻度颜色
              padding:[10,0,0,-5]
          }
          },

       },
       yAxis: {
         axisLabel :{
            textStyle:{
             color:"#c33531", //刻度颜色
        }
        },
       },
       grid: { // 控制图的大小，调整下面这些值就可以，
           x: 40,
           x2: 70,
           y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
           bottom:'40%'
       },
       series: [{
           name: name,
           type: 'bar',
           data: data,
           barWidth : 25,//柱图宽度
           itemStyle: {
                 normal: {
                     label: {
                         show: true,		//开启显示
                         position: 'top',	//在上方显示
                         textStyle: {	    //数值样式
                             color: "#c33531",
                             fontSize: 14
                         }
                     }
                 }
             },

       }]
   });
  }
 /**
  *  drawbar方法，画柱形图
  * @param {string} id [div的id]
  * @param {sring} text [请求时携带的参数]
  * @param {sring} xdata [请求时携带的参数]
  * @param {sring} name [请求时携带的参数]
  * @param {sring} data [请求时携带的参数]
  */

 export function drawBar_01(id,legend,name,data){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(id))
      // 绘制图表
      myChart.setOption({
          tooltip: {},
          xAxis: {
              data: legend,
              axisLabel :{
                 interval:0,
                 rotate:-15,//-15度角倾斜显示
                 textStyle:{
                 color:"#fff", //刻度颜色
                 padding:[10,0,10,-15]
             }
             },

          },
          yAxis: {
            axisLabel :{
               textStyle:{
                color:"#fff", //刻度颜色
           }
           },
          },
          grid: { // 控制图的大小，调整下面这些值就可以，
              x: 40,
              x2: 70,
              y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
          },
          series: [{
              name: name,
              type: 'bar',
              data: data,
              itemStyle: {
                    normal: {
                        label: {
                            show: true,		//开启显示
                            position: 'top',	//在上方显示
                            textStyle: {	    //数值样式
                                color: '#fff',
                                fontSize: 14
                            }
                        }
                    }
                },

          }]
      });
  }
  export function drawBar_02(id,legend,name,data){
       // 基于准备好的dom，初始化echarts实例
       let myChart = this.$echarts.init(document.getElementById(id))
       // 绘制图表
       myChart.setOption({
           tooltip: {},
           xAxis: {
               data: legend,
               axisLabel :{
                  interval:0,
                  rotate:-25,//-15度角倾斜显示
                  textStyle:{
                  color:'#fff', //刻度颜色
                  padding:[10,0,0,-5]
              }
              },

           },
           yAxis: {
             axisLabel :{
                textStyle:{
                 color:'#fff', //刻度颜色
            }
            },
           },
           grid: { // 控制图的大小，调整下面这些值就可以，
               x: 40,
               x2: 70,
               y2: 50,// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
               bottom:'26%'
           },
           series: [{
               name: name,
               type: 'bar',
               data: data,
               itemStyle: {
                     normal: {
                         label: {
                             show: true,		//开启显示
                             position: 'top',	//在上方显示
                             textStyle: {	    //数值样式
                                 color: '#fff',
                                 fontSize: 14
                             }
                         }
                     }
                 },

           }]
       });
   }
 /**
  *  drawPie方法，画饼状图
  * @param {string} id [div的id]
  * @param {sring} legend [请求时携带的参数]
  * @param {sring} name [请求时携带的参数]
  * @param {sring} data [请求时携带的参数]
  */
 export function drawPie(id,legend,name,data){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(id))
      // 绘制图表
      var option = {
        tooltip: {
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:legend,
            textStyle:{
            color:"#fff", //刻度颜色
        }
        },
        series: [
            {
                name:name,
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                color:['#CCCC00','#333399','#CC6600','#009966','#FF0033',],
                data:data
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
       myChart.setOption(option);
  }
  export function drawPie01(id,legend,name,data){
       // 基于准备好的dom，初始化echarts实例
       let myChart = this.$echarts.init(document.getElementById(id))
       // 绘制图表
       var option = {
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          series : [
              {
                  name: name,
                  type: 'pie',
                  radius : '40%',
                  center: ['50%', '50%'],
                  data:data,
                  itemStyle: {
                      emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },
                  label:{
                    normal:{
                      formatter: "{b}:{c} ({d}%)",
                    }
                  },
              }
          ]
      };

     // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
   }
   export function drawPie02(id,legend,name,data){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById(id))
        // 绘制图表
        var option = {
           tooltip : {
               trigger: 'item',
               formatter: "{a} <br/>{b}: {c} ({d}%)"
           },
           series : [
               {
                   name: name,
                   type: 'pie',
                   radius : '20%',
                   center: ['50%', '55%'],
                   data:data,
                   itemStyle: {
                       emphasis: {
                           shadowBlur: 10,
                           shadowOffsetX: 0,
                           shadowColor: 'rgba(0, 0, 0, 0.5)'
                       }
                   },
                   label:{
                     normal:{
                       formatter: "{b}:{c} ({d}%)",
                     }
                   },
               }
           ]
       };

      // 使用刚指定的配置项和数据显示图表。
         myChart.setOption(option);
    }
    export function drawPie03(id,legend,name,data){
         // 基于准备好的dom，初始化echarts实例
         let myChart = this.$echarts.init(document.getElementById(id))

         // 绘制图表
         var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series : [
                {
                    name: name,
                    type: 'pie',
                    radius : '45%',
                    center: ['60%', '55%'],
                    data:data,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label:{
                      normal:{
                        formatter: "{b}:{c} ({d}%)",
                      }
                    },
                }
            ]
        };

       // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
     }
  /**
   *  drawRose方法，玫瑰图
   * @param {string} id [div的id]
   * @param {string} text [div的id]
   * @param {sring} legend [请求时携带的参数]
   * @param {sring} name [请求时携带的参数]
   * @param {sring} data [请求时携带的参数]
   */
  export function drawRose(id,name,data){
       // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById(id))
      //var ecConfig = require('echarts/config');
		   //myChart.on(ecConfig.EVENT.CLICK, eConsole); 
       // 绘制图表
      var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        calculable : true,
        series : [

            {
                name:name,
                type:'pie',
                radius : [30, 110],
                center : ['50%', '50%'],
                roseType : 'area',
                data:data
            }
        ]
    };

      myChart.setOption(option);
   }
   /**
    *  drawLine方法，线型图
    * @param {string} id [div的id]
    * @param {string} text [div的id]
    * @param {sring} legend [请求时携带的参数]
    * @param {sring} name [请求时携带的参数]
    * @param {sring} data [请求时携带的参数]
    */
   export function drawLine(id,xdata,series){
        // 基于准备好的dom，初始化echarts实例
       let myChart = this.$echarts.init(document.getElementById(id))
        // 绘制图表
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:xdata,
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                axisLabel: {
                    textStyle:{
                     color:"#fff", //刻度颜色
                   }
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} ',
                    textStyle:{
                     color:"#fff", //刻度颜色
                   }
                },
            },
            series: series
        };
       myChart.setOption(option);
    }
    /**
     *  drawHistogram方法，满意度
     * @param {string} id [div的id]
     * @param {string} text [div的id]
     * @param {sring} legend [请求时携带的参数]
     * @param {sring} name [请求时携带的参数]
     * @param {sring} data [请求时携带的参数]
     */
    export function drawHistogram(id,legend,total,data){
      var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];
      var histogramChart1 = this.$echarts.init(document.getElementById(id));
      var newdata = [];
      for(var i=0;i<data.length;i++){
          var aa = (data[i]/total[0] * 100 ).toFixed(2);
          newdata.push(aa);
      }
      histogramChart1.setOption({

         grid: {
             top: '20%',
             left: '25%',
         },
         tooltip: {
           trigger: newdata
        },
         xAxis: {
             show: false
         },
         yAxis: [{
             show: true,
             data:  legend,
             inverse: true,
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },
             axisLabel: {
                 color: '#fff',
                 formatter: (value, index) => {
                     return [

                         `{lg|${index+1}}  ` + '{title|' + value + '} '
                     ].join('\n')
                 },
                 rich: {
                     lg: {
                         backgroundColor: '#339911',
                         color: '#fff',
                         borderRadius: 15,
                          //padding: 5,
                         align: 'center',
                         width: 15,
                         height: 15
                     },
                 }
             },


         }, {
             show: true,
             inverse: true,
             data: total,
             axisLabel: {
                 textStyle: {
                     fontSize: 12,
                     color: '#fff',
                 },
             },
             axisLine: {
                 show: false
             },
             splitLine: {
                 show: false
             },
             axisTick: {
                 show: false
             },

         }],
         series: [{
             name: '条',
             type: 'bar',
             yAxisIndex: 0,
             data: newdata,
             barWidth: 10,
             itemStyle: {
                 normal: {
                     barBorderRadius: 20,
                     color: function(params) {
                         var num = myColor.length;
                         return myColor[params.dataIndex % num]
                     },


                 }
             },
             label: {
                 normal: {
                     show: true,
                     position: 'insideLeft',
                     formatter: '{c}%'
                 }
             },
         }, {
             name: '框',
             type: 'bar',
             yAxisIndex: 1,
             barGap: '-100%',
             data: [100, 100, 100, 100, 100, 100],
             barWidth: 15,
             itemStyle: {
                 normal: {
                     color: 'none',
                     borderColor: '#00c1de',
                     borderWidth: 3,
                     barBorderRadius: 15,

                 }
             }
         }, ]
      })

     }


    /**
     *  getDownMap方法，地图
     * @param {string} id [div的id]
     */
    import haicheng from '../../static/json/haicheng.json'
    export function   getDownMap(id){
      	let that = this;
      	let chart = that.$echarts.init(document.getElementById(id));
      	let name = "海城";
            let option = {
              geo: {
                map: name,
                label: {
                  normal: {
                      show: true,
                      textStyle: {
                          color: '#fff',
                          fontSize: 20
                      }
                  },
                  emphasis: {
                      textStyle: {
                          color: '#fff'
                      }
                  }
                },
                itemStyle: {
                  normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 1,
                    areaColor: {//背景色
                      type: 'radial',
                      x: 0.5,
                      y: 0.5,
                      r: 0.8,
                      colorStops: [{
                          offset: 0,
                          color: 'rgba(4, 129, 181, 0.2)' // 0% 处的颜色
                      }, {
                          offset: 1,
                          color: 'rgba(4, 129, 181, 0.4)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                  },
                  emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                  }
                },
              },
              series: [
                {
                  type: 'effectScatter',
                  coordinateSystem: 'geo',
                }
              ]
            }
            that.$echarts.registerMap(name,haicheng);
            chart.setOption(option);
      }

      export function drawHistogramChart2(id,legend,series){
           // 基于准备好的dom，初始化echarts实例
           var histogramChart2 = this.$echarts.init(document.getElementById(id));
           histogramChart2.setOption({
             color:['#7bbfea'],
             grid:{
                 right: '10%',
                 bottom: '10%',
                 containLabel: true
             },
             tooltip : {
                trigger: 'item',
                formatter: "{a}<br/>{b}<br/>{c}"
            },
             calculable : true,
             yAxis : [
                 {
                     type : 'category',
                     data : legend,
                     axisLine:{
                          lineStyle:{
                              color: '#7bbfea'
                          },
                      },
                      axisLabel : {
                          textStyle: {
                              color: '#fff'
                          },
                      }
                 }
             ],
             xAxis : [
                 {
                     type : 'value',
                     axisLine:{
                         lineStyle:{
                             color: '#7bbfea'
                         },
                     },
                     splitLine: {
                         "show": false
                     },
                     axisLabel: {
                         textStyle: {
                             color: '#fff'
                         },
                         formatter: function (value) {
                             return value + ""
                         },
                     },
                 }
             ],
             series : series
           })
     }
     export function drawHistogramChart3(id,legend,series,fontSize){
          // 基于准备好的dom，初始化echarts实例
          var histogramChart2 = this.$echarts.init(document.getElementById(id));
          histogramChart2.setOption({
            color:['#7bbfea'],
            grid:{
                left: '5%',
                right: '5%',
                bottom: '10%',
                containLabel: true
            },
            tooltip : {
               trigger: 'item',
               formatter: "{a}<br/>{b}<br/>{c}"
           },
            calculable : true,
            yAxis : [
                {
                    type : 'category',
                    data : legend,
                    axisLine:{
                         lineStyle:{
                             color: '#7bbfea'
                         },
                     },
                     axisLabel : {
                         textStyle: {
                             color: '#fff',

                         },
                            interval:0,
                            //rotate:-20,//-15度角倾斜显示
                            textStyle:{
                             color:"#fff", //刻度颜色
                             fontSize:fontSize
                        }

                     }
                }
            ],
            xAxis : [
                {
                    type : 'value',
                    axisLine:{
                        lineStyle:{
                            color: '#7bbfea'
                        },
                    },
                    splitLine: {
                        "show": false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        },
                        formatter: function (value) {
                            return value + ""
                        },
                    },
                }
            ],
            series : series
          })
    }

    //获取当前时间，格式YYYY-MM-DD
     export function getNowFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
    //获取去年今日时间
    export function getLastFormatDate() {
        var date = new Date();
        var seperator1 = "-";
        var year = parseFloat(date.getFullYear());
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + '-01' + '-01';
        return currentdate;
    }
    //获取本周第一天
    export function showWeekFirstDay()
      {
          var Nowdate=new Date();
          var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
          var M=Number(WeekFirstDay.getMonth())+1
          var d = WeekFirstDay.getDate()

          return WeekFirstDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
      }
    //获取本周最后一天
    export function showWeekLastDay()
      {
          var Nowdate=new Date();
          var year = parseFloat(Nowdate.getFullYear());
          var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);
          var WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);
          var M=Number(WeekLastDay.getMonth())+1
          var d = WeekLastDay.getDate();
          return WeekLastDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
      }
      //获取本月第一天
      export function showMonthFirstDay()
        {
            var Nowdate=new Date();
            var MonthFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth(),1);
            var M=Number(MonthFirstDay.getMonth())+1
            var d = MonthFirstDay.getDate();
            return MonthFirstDay.getFullYear()+ "-" + (M < 10 ? ('0' + M) : M) + "-" + (d < 10 ? ('0' + d) : d);
        }
      //获取本月最后一天
      export function showMonthLastDay()
        {
            var Nowdate=new Date();
            var MonthNextFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth()+1,1);
            var MonthLastDay=new Date(MonthNextFirstDay-86400000);
            var M=Number(MonthLastDay.getMonth())+1
            return MonthLastDay.getFullYear()+"-"+M+"-"+MonthLastDay.getDate();
        }
        //获取当前时间前7天，格式YYYY-MM-DD
        export function getNowFormatDate_last(n){
           var n = n;
           var d = new Date();
           var year = d.getFullYear();
           var mon = d.getMonth() + 1;
           var day = d.getDate();
           if(day <= n) {
               if(mon > 1) {
                   mon = mon - 1;
               } else {
                   year = year - 1;
                   mon = 12;
               }
           }
           d.setDate(d.getDate() - n);
           year = d.getFullYear();
           mon = d.getMonth() + 1;
           day = d.getDate();
           var s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
           return s;

         }
         //获取上个月的时间
         export function getNowLastMonth(){
            var Nowdate=new Date();
            Nowdate.setMonth(Nowdate.getMonth()-1);
            var y = Nowdate.getFullYear();
            var m = Nowdate.getMonth()+1;
            var d = Nowdate.getDate();
            var formatwdate = y+'-'+(m < 10 ? ('0' + m) : m) + "-" + (d < 10 ? ('0' + d) : d);
            return formatwdate
         }

 export default {

}
