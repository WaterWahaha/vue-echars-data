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
            <li class="nav_active"><i class="nav_5"></i><router-link to="/wygl">物业管理</router-link></li>
            <li><i class="nav_6"></i><router-link to="/csgn">城市供暖</router-link></li>
            <li><i class="nav_7"></i><router-link to="/sbtj">省表统计</router-link></li>
            <li><i class="nav_9"></i><router-link to="/tjyb">诉求统计</router-link></li>
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
            <span>请选择区域:</span><select class="" name="" value="海城各管理区" v-on:change="areaSelect($event)">
            <option v-for="item in areas" v-bind:value="item.indexId">{{item.name}}</option>
            </select>
            <button type="button" name="button" @click="search()">确定</button>
          </div>

        </div>
        <!--统计分析图-->
        <div class="div_any">
            <div class="div_any002">
                <div class="div_any_child div_height">
                  <div class="div_any_title any_title_width_wy"><img src="../../static/images/title_1.png">物业管理情况统计</div>
                  <div class="wygl_div_01">
                    <div id="Chart01" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>
                  <div class="wygl_div_02">
                    <div id="Chart02" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                  </div>

                </div>
            </div>
        </div>
        <div class="div_any">
            <div class="left div_any001">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">各区物业问题统计</div>
                    <div id="Chart04" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%">

                    </div>
                </div>
            </div>
            <div class="div_any001 left ">
                <div class="div_any_child div_height">
                    <div class="div_any_title any_title"><img src="../../static/images/title_1.png">各区物业排名统计</div>
                    <div id="Chart05" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
            <div class="right div_any001">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">最终处理部门排名统计</div>
                    <p id="Chart06" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {drawPie01,drawBar_01,drawHistogramChart3,getLastFormatDate,getNowFormatDate} from "../utils/utils.js"
import {get} from "../utils/request.js"
export default {
  name: 'wygl',
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
    }
  },
  mounted(){
    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
    //选择区域
    this.get(host.url+'/navigation').then(res=>{
      this.areas = res.data
    })
    //各镇区排名
    this.get(host.url+'/dqzb').then(res=>{
       var newdata = res.data
       //console.log(res.data)
      //画饼形图
      this.drawPie01('Chart04',res.data[0].legend,'物业管理',newdata);
    })
    //最终处理单位排名
    this.get(host.url+'/zzcldwphb').then(res=>{
      this.clbmLegend = res.data[0].legend
      this.clbmData = res.data[0].data
      //画柱形图
      this.drawBar_01('Chart06',this.clbmLegend,'物业管理',this.clbmData);
    })
    //建设 - 物业管理 三级定性排行榜前三
    this.get(host.url+'/sjflphb').then(res=>{
      res.data[0].legend = this.fzarr(res.data[0].legend);
      res.data[0].data =this.fzarr(res.data[0].data);
      //从组数组便于绘制图标
      this.HistogramChart2Series = {name:'物业管理',type:'bar',data:res.data[0].data,itemStyle: {
            normal: {
                label: {
                    show: true,		//开启显示
                    position: 'right',	//在上方显示
                    textStyle: {	    //数值样式
                        color: '#fff',
                        fontSize: 12
                    }
                }
            }
        }}
      this.HistogramChart2Legend = res.data[0].legend;
      //画横向柱形图
      this.drawHistogramChart3('Chart01',this.HistogramChart2Legend,this.HistogramChart2Series,14);
      var newdata = [];
      for(var i = 0;i<res.data[0].legend.length;i++){
        newdata.push({value:res.data[0].data[i],name:res.data[0].legend[i]});
      }

      //画饼状图
      this.drawPie01('Chart02',res.data[0].legend,'物业管理',newdata);
    })
    //各区物业排行榜前5
    this.get(host.url+'/dqzbpm').then(res=>{
      this.btsLegend = res.data[0].legend
      this.btsData = res.data[0].data
      //画柱形图
      this.drawBar_01('Chart05',this.btsLegend,'物业管理',this.btsData);
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
    getLastFormatDate,
    getNowFormatDate,
    drawHistogramChart3,
    drawBar_01,
    drawPie01,
    get,
    //切换导航样式方法
    addClass: function(index) {
      this.current = index;
    },
    /*获取选择管理区域值*/
    areaSelect:function(event){
      //console.log(event.target.value);
      this.id = event.target.value;
    },
    //点击确定查询
    search:function(){
      //各区物业排名统计
      this.get(host.url+'/dqzbpm',{start:this.start,end:this.end,id:this.id}).then(res=>{
        this.btsdwLegend = res.data[0].legend
        this.btsdwData = res.data[0].data
        //画柱形图
        this.drawBar_01('Chart05',this.btsdwLegend,'物业管理',this.btsdwData);
      })
      //最终处理单位排名
      this.get(host.url+'/zzcldwphb',{start:this.start,end:this.end,id:this.id}).then(res=>{
        this.clbmLegend = res.data[0].legend
        this.clbmData = res.data[0].data
        //画柱形图
        this.drawBar_01('Chart06',this.clbmLegend,'物业管理',this.clbmData);
      })
      //建设 - 物业管理 三级定性排行榜前三
      this.get(host.url+'/sjflphb',{start:this.start,end:this.end,id:this.id}).then(res=>{
        res.data[0].legend = this.fzarr(res.data[0].legend);
        res.data[0].data =this.fzarr(res.data[0].data);
        //从组数组便于绘制图标
        this.HistogramChart2Series = {name:'物业管理',type:'bar',data:res.data[0].data,itemStyle: {
              normal: {
                  label: {
                      show: true,		//开启显示
                      position: 'right',	//在上方显示
                      textStyle: {	    //数值样式
                          color: '#fff',
                          fontSize: 12
                      }
                  }
              }
          }}
        this.HistogramChart2Legend = res.data[0].legend;
        //画横向柱形图
        this.drawHistogramChart3('Chart01',this.HistogramChart2Legend,this.HistogramChart2Series,14);
        var newdata = [];
        for(var i = 0;i<res.data[0].legend.length;i++){
          newdata.push({value:res.data[0].data[i],name:res.data[0].legend[i]});
        }

        //画饼状图
        this.drawPie01('Chart02',res.data[0].legend,'物业管理',newdata);
      })
      //各镇区排名
      this.get(host.url+'/dqzb',{start:this.start,end:this.end,id:this.id}).then(res=>{
         var newdata = res.data
         //console.log(res.data)
        //画饼形图
        this.drawPie01('Chart04',res.data[0].legend,'物业管理',newdata);
    })

    },
    //反转数组
    fzarr:function(a) {
      var arr = a;
        var res = new Array();
        for (var i = arr.length-1; i >= 0; i--) {
            res.push(arr[i]);
        }
        arr = res;
        return arr;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
</style>
