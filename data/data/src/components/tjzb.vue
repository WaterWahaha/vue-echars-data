<template>
  <div class="container">
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
            <li   class="nav_active"><i class="nav_8"></i><router-link to="/tjzb">统计周报</router-link></li>
            <li><i class="nav_9"></i><router-link to="/tjyb">统计月报</router-link></li>
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
        <!--统计分析图-->
        <button type="button" name="button" class="downexcel_02" @click="exportWord">下载周报</button>
        <div class="div_any">
            <div class="div_any002">
                <div class="div_any_child div_height">
                  <div class="div_any_title"><img src="../../static/images/title_1.png">8890数据周报&nbsp;&nbsp;&nbsp;&nbsp;日期：{{start}}  -  {{end}}</div>
                  <div class="div_01_child_child_01" v-for="data in datas">
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
                    <div class="zb_div_01" style="margin-left:50px">

                      <div id="Chart01" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>

                    </div>
                    <div class="zb_div_02" style="margin-left:0px">
                      <div id="Chart02" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                    </div>

                    </div>
                </div>
            </div>
            <div class="right div_any001">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">紧急诉求类型分布</div>

                    <p id="Chart03" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></p>

                </div>
            </div>
            <div id="Chart_01" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%;display:hidden" ></div>
            <P id="Chart_03" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%;display:hidden"></P>
        </div>
    </div>
  </div>
</template>
<script>
import {drawPie03,drawBar_color,showWeekFirstDay,getNowFormatDate,getLastFormatDate,getNowFormatDate_last} from "../utils/utils.js"
import {get,post} from "../utils/request.js"
export default {
  name: 'tjzb',
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
      color:'#fff'
    }
  },
  mounted(){
    this.start = this.showWeekFirstDay();
    this.end = this.getNowFormatDate();

    this.get(host.url+'/thisweek').then(res=>{
      this.datas = res.data
    })
    //诉求前10类热点问题
    //柱形图
    this.get(host.url+'/thisweekten').then(res=>{
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
      this.drawPie03('Chart02',res.data[0].legend,'诉求热点',newdata);
      //画柱形图  隐藏  导出word
      this.drawBar_color('Chart01',this.clbmLegend,'诉求热点',this.clbmData);


    })
    //紧急诉求分布
    this.get(host.url+'/weekurgent').then(res=>{
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
    showWeekFirstDay,
    getNowFormatDate,
    getLastFormatDate,
    getNowFormatDate_last,
    drawPie03,
    drawBar_color,
    get,
    post,
    //点击确定查询
    search:function(){
      this.get(host.url+'/thisweek',{start:this.start,end:this.end}).then(res=>{
        this.datas = res.data
      })
      //诉求前10类热点问题
      //柱形图
      this.get(host.url+'/thisweekten',{start:this.start,end:this.end}).then(res=>{
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
        this.drawPie03('Chart02',res.data[0].legend,'诉求热点',newdata);
        //画柱形图  隐藏  导出word
        this.drawBar_color('Chart01',this.clbmLegend,'诉求热点',this.clbmData);

      })
      //紧急诉求分布
      this.get(host.url+'/weekurgent',{start:this.start,end:this.end}).then(res=>{
        this.clbmLegend = res.data[0].legend
        this.clbmData = res.data[0].data
        //画柱形图
        //this.drawBar_01('Chart03',this.clbmLegend,'诉求热点',this.clbmData);
        this.drawBar_color('Chart03',this.clbmLegend,'紧急诉求',this.clbmData);
      })
    },
    //导出word
    exportWord(){
      let myChart01 = this.$echarts.init(document.getElementById('Chart01'))

      var Chart01 = myChart01.getDataURL({
            pixelRatio: 2,
            backgroundColor: this.color,
       })
       let myChart02 = this.$echarts.init(document.getElementById('Chart02'))
       var Chart02 = myChart02.getDataURL({
             pixelRatio: 2,
             backgroundColor: this.color,
        })
        let myChart03 = this.$echarts.init(document.getElementById('Chart03'))
        var Chart03 = myChart03.getDataURL({
              pixelRatio: 2,
              backgroundColor: this.color,
         })

         var testTata = []
         for(var i =0;i<this.datas.length;i++){
            testTata.push(this.datas[i].num)
         }
         var rdata = testTata.slice(0,7).join(',');
         var xxx = getLastFormatDate();
        // return
        //var postData =
         this.post(host.url+'/ReportWord',{type:1,rtime:this.start+','+this.end,img1:Chart01,img2:Chart02,img3:Chart03}).then(res=>{
           window.open(res.url);
         })
   },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
</style>
