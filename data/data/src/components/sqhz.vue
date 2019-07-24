<template>
  <div class="container">
    <div class="header left">
        <div class="left nav">
            <ul>
              <li ><i class="nav_1"></i><router-link to="/">首页</router-link></li>
              <li><i class="nav_3"></i><router-link to="/fltj">分类统计</router-link></li>
              <li><i class="nav_2"></i><router-link to="/xzqyt">行政区域图</router-link></li>
              <li class="nav_active"><i class="nav_4"></i><router-link to="/sqhz">诉求汇总</router-link></li>
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
          <span>请选择排名方式:</span>
          <select class="" name="" value="请选择" v-on:change="rankingType($event)">
            <option v-for="item in rankings" v-bind:value="item.id">{{item.name}}</option>
          </select>
          <span>请选择排名方式:</span>
          <select class="" name="" value="请选择" v-on:change="orderType($event)">
            <option v-for="item in orderTypes" v-bind:value="item.type">{{item.type}}</option>
          </select>
          <button type="button" name="button" @click="search()">确定</button>
        </div>

      </div>
        <!--统计分析图-->
        <div class="div_any">
            <div class="left div_left_any01">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">8890海城各部门诉求办理情况汇总报表  &nbsp;&nbsp;总办结量：{{zbjl}} 平均报结件数：{{pjbjjs}}</div>
                    <div class="roate-container">
                  		<div class="screen-bg"></div>
                  		<div id="roate1">
                  			<div class="roate-item icon-roate-1"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item icon-roate-2"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item icon-roate-3"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item icon-roate-4"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  		</div>
                  		<div id="roate2">
                  			<div class="roate-item icon-sq-1"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item icon-sq-2"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  			<div class="roate-item"></div>
                  		</div>
                  	</div>
                    <button type="button" name="button" class="downexcel_01" @click="exportExcel">下载</button>
                    <div class="table">
                      <table id="tbs1" border="0" align="center" cellpadding="0" cellspacing="1">
                        <tr class="ttr" bgcolor="07296d" height="50" align="center" >
                          <td width="50">名次</td>
                          <td>受理单位</td>
                          <td>疑难件</td>
                          <td>交办总量</td>
                          <td>实际办结量</td>
                          <td>评星量</td>
                              <td width="40">0星</td>
                              <td width="40">2星</td>
                              <td width="40">3星</td>
                              <td width="40">4星</td>
                              <td width="40">5星</td>
                              <td width="40">10星</td>
                          <td>平均分</td>
                          <td>反馈率</td>
                          <td>按时反馈率</td>
                          <td>满意率</td>
                          <td>优秀率</td>
                          <td>办件天数</td>
                          <td>有效回访率</td>
                          <td>按时分转率</td>
                          <td>综评分</td>
                        </tr>
                        <!-- 数据表格开始 -->
                        <tr align="center" height="36" v-for="item in reportForm">
                          <td width="50">{{item.ranking}}</td>
                          <td><a  @click="two($event)"  :id="forId(item.id)" :data-pid="forPid(item.pid)" :data-name="item.acceptingUnit">{{item.acceptingUnit}}</a></td>
                          <td>{{item.ynj}}</td>
                          <td>{{item.jbzl}}</td>
                          <td>{{item.sjbjl}}</td>
                          <td>{{item.pxl}}</td>
                              <td width="40">{{item.zero}}</td>
                              <td width="40">{{item.two}}</td>
                              <td width="40">{{item.three}}</td>
                              <td width="40">{{item.four}}</td>
                              <td width="40">{{item.five}}</td>
                              <td width="40">{{item.ten}}</td>
                          <td>{{item.pjf}}</td>
                          <td>{{item.fkl}}%</td>
                          <td>{{item.asfkl}}%</td>
                          <td>{{item.myl}}%</td>
                          <td>{{item.yxl}}%</td>
                          <td>{{item.bjts}}</td>
                          <td>{{item.yxhfl}}%</td>
                          <td>{{item.asfzl}}%</td>
                          <td>{{item.zpf}}</td>
                        </tr>
                        <!-- 数据表格结束 -->
                      </table>
                    </div>

                </div>
            </div>
              <!-- 海城分类汇总 -->
            <div class="left div_right_any_fl">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">海城诉求最终部门分类汇总</div>
                    <div id="HistogramChart2" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {drawHistogramChart2,getNowFormatDate,getLastFormatDate} from "../utils/utils.js"
import {get} from "../utils/request.js"
import {loading} from "../../static/js/index.js"
import {loading_01} from "../../static/js/jquery.min.js"
export default {
  name: 'sqhz',
  data () {
    return {
      id:0,
      rankings:[{id:0,name:'全部'},{id:1,name:'按部门排名'},{id:2,name:'按镇区排名'},{id:3,name:'按供暖部门排名'},],
      Otype:'实际办结量',
      orderTypes:[{type:'全部'},{type:'实际办结量'},{type:'疑难件'},{type:'交办总量'},{type:'评星量'},{type:'平均分'},
                  {type:'反馈率'},{type:'按时反馈率'},{type:'满意率'},{type:'优秀率'},{type:'办件天数'},{type:'有效回访率'},
                  {type:'按时分转率'},{type:'综评分'}],
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      tsfl:[],
      reportForm:[],
      HistogramChart2Series:[],
      HistogramChart2Legend:[],
      laydate_month:window.laydate,
      rosename:'办件结案统计',
      rosedata:[],
      name:'',
      type:2,
      loads:201,
      zbjl:0,
      pjbjjs:0,
    }
  },

  mounted(){
      this.loading();
      this.loading_01();
      $('.roate-container').show();
      $('.table').hide();
      $('.downexcel_01').hide();

    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
    //选择区域
    this.get(host.url+'/navigation').then(res=>{
      this.areas = res.data
    })
    //海城分类汇总
    this.get(host.url+'/flhz',{start:this.start,end:this.end}).then((res)=>{
      //从组数组便于绘制图标
      this.HistogramChart2Series = {name:'海城分类汇总',type:'bar',data:res.data[0].data,itemStyle: {
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
      this.drawHistogramChart2('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series);
    })
    //8890海城各部门诉求办理情况汇总报表
    this.get(host.url+'/gbmsqhz3',{start:this.start,end:this.end}).then((res)=>{
      //console.log('111',res)
      this.zbjl = res.title['总办结量'];
      this.pjbjjs = res.title['平均办结件数'];
      $('.roate-container').hide();
      $('.table').show();
      $('.downexcel_01').show();
    for(var i =0;i<res.data.length;i++){
      res.data[i] = {
        ranking:res.data[i].ranking,
        acceptingUnit:res.data[i].acceptingUnit,
        ynj:res.data[i]['疑难件'],
        jbzl:res.data[i]['交办总量'],
        sjbjl:res.data[i]['实际办结量'],
        pxl:res.data[i]['评星总数'],

        zero:res.data[i]['计星0总数'],
        two:res.data[i]['计星2总数'],
        three:res.data[i]['计星3总数'],
        four:res.data[i]['计星4总数'],
        five:res.data[i]['计星5总数'],
        ten:res.data[i]['计算10星总数'],
        pjf:res.data[i]['平均分'].toFixed(2),

        fkl:res.data[i]['反馈率'].toFixed(2),
        asfkl:res.data[i]['按时反馈率'].toFixed(2),
        myl:res.data[i]['满意率'].toFixed(2),
        yxl:res.data[i]['优秀率'].toFixed(2),
        bjts:res.data[i]['办件天数'],
        yxhfl:res.data[i]['有效回访率'].toFixed(2),
        asfzl:res.data[i]['按时分转率'].toFixed(2),
        zpf:res.data[i]['综评分'].toFixed(2),
      };
    }
      this.reportForm = res.data
  })

    this.laydate_month.render({
        elem: '#year',
        type: 'date',
        theme: '#034c6a',
        done: (value) => {
          this.start = value
        }
    })
    this.laydate_month.render({
        elem: '#month',
        type: 'date',
        theme: '#034c6a',
        done: (value) => {
          this.end = value
        }
    })
  },
  updated(){
    this.rows();
  },
  //updated:{},
  methods:{
    get,
    drawHistogramChart2,
    getLastFormatDate,
    getNowFormatDate,
    loading,
    loading_01,
    //表格颜色
    rows:function(){
      var tbs = document.getElementById("tbs1");
      var rows = tbs.getElementsByTagName("tr");
      for(let i=1;i<rows.length;i++){
        if(i%2==0) {
          rows[i].style.backgroundColor="#18468e";
        } else  {
          rows[i].style.backgroundColor="#265ca5";
        }
      }
    },
    //点击进入下一级
    two(e){
      $('.roate-container').show();
      $('.table').hide();
      $('.downexcel_01').hide();
      this.pid = e.target.dataset.pid;
      //console.log(e.target.dataset.name)
      this.name = e.target.dataset.name;
      this.rows();

      //海城分类汇总
      this.get(host.url+'/flhz',{start:this.start,end:this.end,rankings:this.id,name:this.name}).then((res)=>{
        $('.roate-container').hide();
        $('.table').show();
        $('.downexcel_01').show();
        //从组数组便于绘制图标
        this.HistogramChart2Series = {name:'海城分类汇总',type:'bar',data:res.data[0].data,itemStyle: {
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
        this.drawHistogramChart2('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series);
      })
    },
    //获取span 标签中id
    forId:function(index){
      return index
     },
     //获取span 标签中pid
     forPid:function(index){
        return index
      },
      //点击确定查询
      search:function(){
        $('.roate-container').show();
        $('.table').hide();
        $('.downexcel_01').hide();
        //海城分类汇总
        this.get(host.url+'/flhz',{start:this.start,end:this.end,rankings:this.id,order:this.Otype}).then((res)=>{
          //从组数组便于绘制图标
          this.HistogramChart2Series = {name:'海城分类汇总',type:'bar',data:res.data[0].data,itemStyle: {
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
          this.drawHistogramChart2('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series);
        })
        //8890海城各部门诉求办理情况汇总报表
        this.get(host.url+'/gbmsqhz3',{start:this.start,end:this.end,rankings:this.id,order:this.Otype}).then((res)=>{
          //console.log('restwo',res)
          $('.roate-container').hide();
          $('.table').show();
          $('.downexcel_01').show();
          this.zbjl = res.title['总办结量'];
          this.pjbjjs = res.title['平均办结件数'];
          for(var i =0;i<res.data.length;i++){

            res.data[i] = {
              ranking:res.data[i].ranking,
              acceptingUnit:res.data[i].acceptingUnit,
              ynj:res.data[i]['疑难件'],
              jbzl:res.data[i]['交办总量'],
              sjbjl:res.data[i]['实际办结量'],
              pxl:res.data[i]['评星总数'],

              zero:res.data[i]['计星0总数'],
              two:res.data[i]['计星2总数'],
              three:res.data[i]['计星3总数'],
              four:res.data[i]['计星4总数'],
              five:res.data[i]['计星5总数'],
              ten:res.data[i]['计算10星总数'],
              pjf:res.data[i]['平均分'].toFixed(2),

              fkl:res.data[i]['反馈率'].toFixed(2),
              asfkl:res.data[i]['按时反馈率'].toFixed(2),
              myl:res.data[i]['满意率'].toFixed(2),
              yxl:res.data[i]['优秀率'].toFixed(2),
              bjts:res.data[i]['办件天数'],
              yxhfl:res.data[i]['有效回访率'].toFixed(2),
              asfzl:res.data[i]['按时分转率'].toFixed(2),
              zpf:res.data[i]['综评分'].toFixed(2),
            };
          }

          this.reportForm = res.data

        })
        this.rows();

      },
      rankingType(e){
        this.id = event.target.value
      },
      orderType(e){
        this.Otype = event.target.value
      },
      //导出cxcel
      exportExcel(){
        //console.log( this.reportForm)
        require.ensure([], () => {
          const { export_json_to_excel } = require('../excel/Export2Excel'); //这里必须使用绝对路径
          const tHeader = ['名次', '受理单位', '疑难件', '交办总量', '实际办结量', '评星量', '0星',
                            '2星', '3星', '4星', '5星', '10星', '平均分', '反馈率',
                            '按时反馈率', '满意率', '优秀率', '办件天数', '有效回访率', '按时分转率', '综评分']//表头信息
          const filterVal = ['ranking', 'acceptingUnit', 'ynj', 'jbzl', 'sjbjl', 'pxl', 'zero',
                            'two', 'three', 'four', 'five', 'ten', 'pjf', 'fkl',
                            'asfkl', 'myl', 'yxl', 'bjts', 'yxhfl', 'asfzl', 'zpf']//对应表头的字段名
          const list = this.reportForm;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '海城市各单位汇总表');// 导出的表格名称，根据需要自己命名
      })
     },
     formatJson(filterVal, jsonData){
     	return jsonData.map(v =>{
    	  return filterVal.map(j => v[j])
        })
     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
  @import '../../static/css/index.css';
</style>
