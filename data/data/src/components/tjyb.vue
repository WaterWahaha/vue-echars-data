<template>
  <div class="container_01">
    <div id="cover" style="background: #000; position: absolute; left: 0px; top: 0px; width: 100%; height:2850px; filter: alpha(opacity=30); opacity: 0.5; display: none; z-index: 9988 "></div>
    <div class="header left">
        <div class="left nav">
            <ul>
              <li><i class="nav_1"></i><router-link to="/">首页</router-link></li>
              <li><i class="nav_3"></i><router-link to="/fltj">分类统计</router-link></li>
              <li><i class="nav_2"></i><router-link to="/xzqyt">行政区域图</router-link></li>
              <li><i class="nav_4"></i><router-link to="/sqhz">诉求汇总</router-link></li>
              <li><i class="nav_5"></i><router-link to="/xztj">行政统计</router-link></li>
            </ul>
        </div>
        <div class="header_center left" style="position:relative">
            <h2><strong>海城8890民生大数据展示</strong></h2>
        </div>
        <div class="right nav text_right">
          <ul>
            <li><i class="nav_5"></i><router-link to="/wygl">物业管理</router-link></li>
            <li><i class="nav_6"></i><router-link to="/csgn">城市供暖</router-link></li>
            <li><i class="nav_7"></i><router-link to="/sbtj">省表统计</router-link></li>
            <li  class="nav_active"><i class="nav_9"></i><router-link to="/tjyb">诉求统计</router-link></li>
          </ul>
        </div>
    </div>
    <!--内容部分-->
    <div class="con left">
        <!--数据总概-->
        <div class="con_div">
          <div class="con_div_text">
            <span>请选择开始时间:</span><input type="text" id="year" v-model="start"  readonly><span>-</span>
            <span>请选择结束时间:</span><input type="text" id="month" v-model="end"  readonly>
            <button type="button" name="button" @click="search()">确定</button>
          </div>

        </div>
        <div class="load_img">
          <img src="../../static/images/loading.gif">
        </div>

        <!--统计分析图-->
        <button type="button" name="button" class="downexcel_02" @click="exportWord">下载</button>
        <div class="div_any">
            <div class="div_any002" style="width:1860px">
                <div class="div_any_child div_height">
                  <div class="div_any_title"><img src="../../static/images/title_1.png">8890诉求统计&nbsp;&nbsp;&nbsp;&nbsp;日期：{{start}}  -  {{end}}</div>
                  <div class="div_01_child_child_01" v-for="data in datas" style="width:136px">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="div_01_child_child_word_01">
                      {{data.title}}
                    </div>
                    <div class="div_01_child_child_num_01">
                      <b>{{data.num}}</b>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div class="div_any">
            <div class="left div_any001" style = "width:1225px">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">诉求前十类热点问题</div>
                    <div class="zb_div_01" style="margin-left:50px;width:1100px">
                      <div id="Chart01" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                    </div>
                </div>
                </div>
            </div>
            <div class="right div_any001" style="width:592px">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">紧急诉求类型分布</div>
                    <p id="Chart03" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></p>
                </div>
            </div>
            <!--<div class="" v-for="(val,k) in bTitle">
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{val}}</div>
                      <div :id='getId(k)' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
            </div>-->
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[0]}}类</div>
                      <div id='echart_0' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[1]}}类</div>
                      <div id='echart_1' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[2]}}类</div>
                      <div id='echart_2' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[3]}}类</div>
                      <div id='echart_3' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[4]}}类</div>
                      <div id='echart_4' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[5]}}类</div>
                      <div id='echart_5' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[6]}}类</div>
                      <div id='echart_6' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[7]}}类</div>
                      <div id='echart_7' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[8]}}类</div>
                      <div id='echart_8' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
              <div class="right div_any001" style="width:590px">
                  <div class="div_any_child">
                      <div class="div_any_title"><img src="../../static/images/title_1.png">{{this.bTitle[9]}}类</div>
                      <div id='echart_9' style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
              </div>
        </div>
    </div>
  </div>
</template>
<script>
import {drawPie03,drawBar_color,showMonthFirstDay,getNowFormatDate,getNowFormatDate_last,getNowLastMonth} from "../utils/utils.js"
import {get,post} from "../utils/request.js"
export default {
  name: 'tjyb',
  data () {
    return {
      id:1,
      areas: [],
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      btsdwLegend:[] ,
      btsdwData :[],
      btsLegend:[] ,
      btsData :[],
      clbmLegend:[] ,
      clbmData :[],
      HistogramChart2Series:[],
      HistogramChart2Legend:[],
      legend:[],
      data:[],
      datas:[],
      color:'#fff',
      big_data:[{'data':['建设','劳动保障'],'num':[12,22],
        'leveltwo':[{'建设':[{'data':['城市供暖','物业'],'num':[3,20]}]},{'劳动保障':[{'data':['养老','劳动'],'num':[3,20]}]}]
      },
    ],
    bData:[],
    bTitle:[]
    }
  },
  mounted(){
    this.start = this.showMonthFirstDay();
    this.end = this.getNowFormatDate();
    this.get(host.url+'/thismonth').then(res=>{
      this.datas = res.data
    })
    //诉求前10类热点问题
    //柱形图
    /*    this.get(host.url+'/thismonthten').then(res=>{
          var newdata = [];
          for(var i = 0;i<res.data[0].legend.length;i++){
            if(res.data[0].legend == '暂无'){
              newdata = [{value:0,name:'暂无数据'}];
              this.clbmLegend = '暂无数据'
              this.clbmData = 0
            }else{
              newdata.push({value:res.data[0].data[i],name:res.data[0].legend[i]});
              this.clbmLegend = res.data[0].legend
              this.clbmData = res.data[0].data
            }

          }
          //画柱形图
          //this.drawBar_02('Chart01',this.clbmLegend,'诉求热点',this.clbmData);
          //画饼形图
          //this.drawPie03('Chart02',res.data[0].legend,'诉求热点',newdata);
          //画柱形图  隐藏  导出word
          this.drawBar_color('Chart01',this.clbmLegend,'诉求热点',this.clbmData);


        })*/

    //热点诉求一堆图表
    this.get(host.url+'/onetwo').then(res=>{

      this.drawBar_color('Chart01',res.data.data,'诉求热点',res.data.num);
      this.big_data = res.data
      //console.log('1111',this.big_data.leveltwo)
      var arr = []
          for(var key in this.big_data.leveltwo){
            arr.push(key)

          }
      this.bTitle = arr
      //this.bData =
      //console.log('000',this.bTitle)
      for(var i = 0;i<this.bTitle.length;i++){
          this.bData.push(this.getId(i))
      }
      for(var i = 0;i<this.bTitle.length;i++){
          var a = this.bTitle[i]
      }
      this.drawBar_color('echart_0',this.big_data.leveltwo[this.bTitle[0]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[0]].num);
      this.drawBar_color('echart_1',this.big_data.leveltwo[this.bTitle[1]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[1]].num);
      this.drawBar_color('echart_2',this.big_data.leveltwo[this.bTitle[2]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[2]].num);
      this.drawBar_color('echart_3',this.big_data.leveltwo[this.bTitle[3]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[3]].num);
      this.drawBar_color('echart_4',this.big_data.leveltwo[this.bTitle[4]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[4]].num);
      this.drawBar_color('echart_5',this.big_data.leveltwo[this.bTitle[5]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[5]].num);
      this.drawBar_color('echart_6',this.big_data.leveltwo[this.bTitle[6]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[6]].num);
      this.drawBar_color('echart_7',this.big_data.leveltwo[this.bTitle[7]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[7]].num);
      this.drawBar_color('echart_8',this.big_data.leveltwo[this.bTitle[8]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[8]].num);
      this.drawBar_color('echart_9',this.big_data.leveltwo[this.bTitle[9]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[9]].num);
    })

    //紧急诉求分布
    this.get(host.url+'/monthurgent').then(res=>{
      this.clbmLegend = res.data[0].legend
      this.clbmData = res.data[0].data
      //画柱形图
      //this.drawBar_01('Chart03',this.clbmLegend,'诉求热点',this.clbmData);
      this.drawBar_color('Chart03',this.clbmLegend,'紧急诉求',this.clbmData);
    })
    //搜索开始时间
    this.laydate_month.render({
        elem: '#year',
        type: 'date',
        theme: '#034c6a',
        done: (value) => {
          this.start = value
        }
      })
      //搜索结束时间
      this.laydate_month.render({
          elem: '#month',
          type: 'date',
          theme: '#034c6a',
          done: (value) => {
            this.end = value
          }
      })

  },
  //updated
  methods:{
    showMonthFirstDay,
    getNowFormatDate,
    getNowFormatDate_last,
    getNowLastMonth,
    drawPie03,
    drawBar_color,
    get,
    post,
    getId:function(index){
      return "echart_" + index;
    },

    //点击确定查询
    search:function(){
      this.get(host.url+'/thismonth',{start:this.start,end:this.end}).then(res=>{
        this.datas = res.data
      })
      //诉求前10类热点问题
      //柱形图
      /*this.get(host.url+'/thismonthten',{start:this.start,end:this.end}).then(res=>{
        var newdata = [];
        for(var i = 0;i<res.data[0].legend.length;i++){
          if(res.data[0].legend == '暂无'){
            newdata = [{value:0,name:'暂无数据'}];
            this.clbmLegend = '暂无数据'
            this.clbmData = 0
          }else{
            newdata.push({value:res.data[0].data[i],name:res.data[0].legend[i]});
            this.clbmLegend = res.data[0].legend
            this.clbmData = res.data[0].data
          }

        }
        //画柱形图
        //this.drawBar_02('Chart01',this.clbmLegend,'诉求热点',this.clbmData);
        //画饼形图
        //this.drawPie03('Chart02',res.data[0].legend,'诉求热点',newdata);
        //画柱形图  隐藏  导出word
        //this.drawBar_color('Chart01',this.clbmLegend,'诉求热点',this.clbmData);

      })*/

      //紧急诉求分布
      this.get(host.url+'/monthurgent',{start:this.start,end:this.end}).then(res=>{
        this.clbmLegend = res.data[0].legend
        this.clbmData = res.data[0].data
        //画柱形图
        //this.drawBar_01('Chart03',this.clbmLegend,'诉求热点',this.clbmData);
        this.drawBar_color('Chart03',this.clbmLegend,'紧急诉求',this.clbmData);
      })
      //热点诉求一堆图表
      this.get(host.url+'/onetwo',{start:this.start,end:this.end}).then(res=>{

        this.drawBar_color('Chart01',res.data.data,'诉求热点',res.data.num);
        this.big_data = res.data
        //console.log('1111',this.big_data.leveltwo)
        var arr = []
            for(var key in this.big_data.leveltwo){
              arr.push(key)

            }
        this.bTitle = arr
        //this.bData =
        //console.log('000',this.bTitle)
        for(var i = 0;i<this.bTitle.length;i++){
            this.bData.push(this.getId(i))
        }
        for(var i = 0;i<this.bTitle.length;i++){
            var a = this.bTitle[i]
        }
        this.drawBar_color('echart_0',this.big_data.leveltwo[this.bTitle[0]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[0]].num);
        this.drawBar_color('echart_1',this.big_data.leveltwo[this.bTitle[1]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[1]].num);
        this.drawBar_color('echart_2',this.big_data.leveltwo[this.bTitle[2]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[2]].num);
        this.drawBar_color('echart_3',this.big_data.leveltwo[this.bTitle[3]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[3]].num);
        this.drawBar_color('echart_4',this.big_data.leveltwo[this.bTitle[4]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[4]].num);
        this.drawBar_color('echart_5',this.big_data.leveltwo[this.bTitle[5]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[5]].num);
        this.drawBar_color('echart_6',this.big_data.leveltwo[this.bTitle[6]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[6]].num);
        this.drawBar_color('echart_7',this.big_data.leveltwo[this.bTitle[7]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[7]].num);
        this.drawBar_color('echart_8',this.big_data.leveltwo[this.bTitle[8]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[8]].num);
        this.drawBar_color('echart_9',this.big_data.leveltwo[this.bTitle[9]].data,'诉求热点',this.big_data.leveltwo[this.bTitle[9]].num);
      })

    },
    //导出word
    exportWord(){
      /*let myChart01 = this.$echarts.init(document.getElementById('Chart01'))
      var Chart01 = myChart01.getDataURL({
            pixelRatio: 2,
            backgroundColor: this.color
       })
      let myChart03 = this.$echarts.init(document.getElementById('Chart03'))
      var Chart03 = myChart03.getDataURL({
            pixelRatio: 2,
            backgroundColor: this.color
       })

        let echart_0 = this.$echarts.init(document.getElementById('echart_0'))
        var Chart0 = echart_0.getDataURL({
              pixelRatio: 2,
              backgroundColor: this.color
       })
       let echart_1 = this.$echarts.init(document.getElementById('echart_1'))
       var Chart1 = echart_1.getDataURL({
             pixelRatio: 2,
             backgroundColor: this.color
        })
        let echart_2 = this.$echarts.init(document.getElementById('echart_2'))
        var Chart2 = echart_2.getDataURL({
              pixelRatio: 2,
              backgroundColor: this.color
       })
        let echart_3 = this.$echarts.init(document.getElementById('echart_3'))
        var Chart3 = echart_3.getDataURL({
              pixelRatio: 2,
              backgroundColor: this.color
       })
       let echart_4 = this.$echarts.init(document.getElementById('echart_4'))
       var Chart4 = echart_4.getDataURL({
             pixelRatio: 2,
             backgroundColor: this.color
      })
      let echart_5 = this.$echarts.init(document.getElementById('echart_5'))
      var Chart5 = echart_5.getDataURL({
            pixelRatio: 2,
            backgroundColor: this.color
       })
       let echart_6 = this.$echarts.init(document.getElementById('echart_6'))
       var Chart6 = echart_6.getDataURL({
             pixelRatio: 2,
             backgroundColor: this.color
      })
      let echart_7 = this.$echarts.init(document.getElementById('echart_7'))
      var Chart7 = echart_7.getDataURL({
            pixelRatio: 2,
            backgroundColor: this.color
       })
     let echart_8 = this.$echarts.init(document.getElementById('echart_8'))
     var Chart8 = echart_8.getDataURL({
           pixelRatio: 2,
           backgroundColor: this.color
    })
    let echart_9 = this.$echarts.init(document.getElementById('echart_9'))
    var Chart9 = echart_9.getDataURL({
          pixelRatio: 2,
          backgroundColor: this.color
     })
*/
          $('.load_img').show();
          $('#cover').show();
          $('.container_01').css("position","fixed");

         this.post(host.url+'/ReportWord',{rtime:this.start+','+this.end}).then(res=>{
           window.open(res.url);
           $('.load_img').hide();
           $('#cover').hide();
           $('.container_01').css("position","absolute");

         })
   },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
</style>
