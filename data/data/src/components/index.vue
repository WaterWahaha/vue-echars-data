<template>
  <div class="container">
    <!-- 遮罩层 -->
    <div id="cover" style="background: #000; position: absolute; left: 0px; top: 0px; width: 100%; height:1080px; filter: alpha(opacity=30); opacity: 0.3; display: none; z-index: 998 "></div>
    <div class="header left">
        <div class="left nav">
            <ul>
              <li class="nav_active"><i class="nav_1"></i><router-link to="/">首页</router-link></li>
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
            <div class="updateTime">
              数据更新时间：{{updateTime}}
            </div>
          </div>
        </div>
            <div class="table" style="z-index:999;background-color:#030829;position:absolute;margin-left:200px;margin-top;-80px;width:1500px;display:none">
              <span style="color:#fff">请选择排名方式:</span><select v-on:change="orderType($event)" value="请选择排名方式" style="background-color: #030829;
              color: #fff;width: 150px;border: 1px solid #999;line-height: 25px;height: 25px;border: 1px solid #33a3dc;border-radius: 3px;margin-top: 20px;">
              <option v-for="item in orderTypes" v-bind:value="item.type">{{item.type}}</option>
              </select>
              <button type="button" name="button" class="downexcel_sure" @click="search2()">确定</button>
              <button type="button" name="button" class="downexcel_01" @click="exportExcel" style="margin-top:15px;margin-left: 400px;">下载</button>
              <button type="button" name="button" class="downexcel_10" @click="returnTo_table" >返回</button>
              <div id = "close" style="float:right;font-size:24px;color:#fff;margin-right:20px;margin-top:10px;cursor: pointer;" @click="close()">X</div>
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
              <table id="tbs1" border="0" align="center" cellpadding="0" cellspacing="1" style="width:1450px">
                <tr class="ttr" bgcolor="07296d" height="50" align="center" >
                  <td width="50">名次</td>
                  <td>受理单位</td>
                  <td>疑难件</td>
                  <td>高星件</td>
                  <td>低星件</td>
                      <td width="40">0星</td>
                      <td width="40">1星</td>
                      <td width="40">2星</td>
                      <td width="40">3星</td>
                      <td width="40">4星</td>
                      <td width="40">5星</td>
                      <td width="40">10星</td>
                      <td width="40">15星</td>
                      <td width="40">20星</td>
                      <td width="40">25星</td>
                </tr>
                <!-- 数据表格开始 -->
                <tr align="center" height="36" v-for="item in table1">
                  <td width="50">{{item.ranking}}</td>
                  <td><a  @click="table10($event)" :data-name="item.acceptingUnit">{{item.acceptingUnit}}</a></td>
                  <td>{{item.ynj}}</td>
                  <td>{{item.gxj}}</td>
                  <td>{{item.dxj}}</td>
                      <td width="40">{{item.zero}}</td>
                      <td width="40">{{item.one}}</td>
                      <td width="40">{{item.two}}</td>
                      <td width="40">{{item.three}}</td>
                      <td width="40">{{item.four}}</td>
                      <td width="40">{{item.five}}</td>
                      <td width="40">{{item.ten}}</td>
                      <td width="40">{{item.fifteen}}</td>
                      <td width="40">{{item.twenty}}</td>
                      <td width="40">{{item.twentyFive}}</td>
                </tr>
                <!-- 数据表格结束 -->
              </table>
              <!--二级-->
              <table  id="tbs20" border="0" align="center" cellpadding="0" cellspacing="1" style="width:1450px">
                <tr  bgcolor="07296d" height="50" align="center">
                  <td  bgcolor="#07296d" >名次</td>
                  <td  bgcolor="#07296d" >受理单位</td>
                  <td bgcolor="#07296d" >诉求来源</td>
                  <td  bgcolor="#07296d" >诉求日期</td>
                  <td bgcolor="#07296d" >诉求人所在地址</td>
                  <td  bgcolor="#07296d">被诉求单位名称</td>
                  <td  bgcolor="#07296d" >诉求标题</td>
                  <td  bgcolor="#07296d" >诉求定性</td>
                  <td  bgcolor="#07296d" >结案日期</td>
                  <td  bgcolor="#07296d" >群众满意度</td>
                  <td  bgcolor="#07296d" >是否回访</td>
                  <td  bgcolor="#07296d" >最终评星情况</td>
                </tr>
                <tr  align="center" height="36" v-for="item in table2">
                  <td >{{item.ranking}}</td>
                  <td><a @click="table20($event)" :data-id="item.id">{{item.sldw}}</a></td>
                  <td >{{item.sqly}}</td>
                  <td >{{item.sqrq}}</td>
                  <td >{{item.sqrszdz}}</td>
                  <td>{{item.bsqdwmc}}</td>
                  <td >{{item.sqbt}}</td>
                  <td >{{item.sqdx}}</td>
                  <td>{{item.jarq}}</td>
                  <td>{{item.qzmyd}}</td>
                  <td>{{item.sfhf}}</td>
                  <td>{{item.zzpxqk}}</td>
                </tr>
              </table>
              <!--三级-->
              <table  id="tbs30" border="0" align="center" cellpadding="0" cellspacing="1" style="width:1450px">
                <tr  bgcolor="07296d" height="50" align="center">
                  <td height="70" colspan="2" bgcolor="#07296d" >诉求详细内容</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >诉求来源：</td>
                  <td width="1078" align="left" >{{table3['诉求来源']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >诉求日期：</td>
                  <td align="left" >{{table3['诉求日期']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >诉求人姓名：</td>
                  <td align="left" >{{table3['诉求人姓名']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >诉求人电话：</td>
                  <td align="left" >{{table3['诉求人电话']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >诉求人电邮：</td>
                  <td align="left" >{{table3['诉求人电邮']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >诉求人所在地址：</td>
                  <td align="left" >{{table3['诉求人所在地址']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >被诉求单位名称：</td>
                  <td align="left" >{{table3['被诉求单位名称']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >被诉求单位地址：</td>
                  <td align="left" >{{table3['被诉求单位地址']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >诉求标题：</td>
                  <td align="left" >{{table3['诉求标题']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >诉求内容：</td>
                  <td align="left" class="sqnr">{{table3['诉求内容']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >承办人：</td>
                  <td align="left" >{{table3['承办人']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >诉求性质：</td>
                  <td align="left" >{{table3['诉求性质']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >办理方式：</td>
                  <td align="left" >{{table3['办理方式']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >办理部门：</td>
                  <td align="left" >{{table3['办理部门']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >办理分类：</td>
                  <td align="left" >{{table3['办理分类']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >被诉求单位的行业主管部门：</td>
                  <td align="left" >{{table3['被诉求单位的行业主管部门']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >一级定性：</td>
                  <td align="left" >{{table3['一级定性']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >二级定性：</td>
                  <td align="left" >{{table3['二级定性']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >三级定性：</td>
                  <td align="left" >{{table3['三级定性']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >是否重复反应问题：</td>
                  <td align="left" >{{table3['是否重复反应问题']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >是否为无效件：</td>
                  <td align="left" >{{table3['是否为无效件']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >分派时间：</td>
                  <td align="left" >{{table3['分派时间']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >报结案时间：</td>
                  <td align="left" >{{table3['报结案时间']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >解决情况详情：</td>
                  <td align="left" class="jjqkxq">{{table3['解决情况详情']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >公示内容：</td>
                  <td align="left" class="gsnr">{{gsnr}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >群众满意度：</td>
                  <td align="left" >{{table3['群众满意度']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >回访内容：</td>
                  <td align="left" class="hfnr">{{hfnr}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >审核状态：</td>
                  <td align="left" >{{table3['审核状态']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >评星：</td>
                  <td align="left" >{{table3['评星']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >加星：</td>
                  <td align="left" >{{table3['加星']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >减星：</td>
                  <td align="left" >{{table3['减星']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >推荐选项：</td>
                  <td align="left" >{{table3['推荐选项']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >延期申请日期：</td>
                  <td align="left" >{{table3['延期申请日期']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >延期结束日期：</td>
                  <td align="left" >{{table3['延期结束日期']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >延期理由：</td>
                  <td align="left" >{{table3['延期理由']}}</td>
                </tr>
                <tr  align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right" >退件标志：</td>
                  <td align="left" >{{table3['退件标志']}}</td>
                </tr>
                <tr align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right">退件理由：</td>
                  <td align="left" >{{table3['退件理由']}}</td>
                </tr>
                <tr align="center" height="36" bgcolor="18468e">
                  <td width="289" align="right">退件日期：</td>
                  <td align="left">{{table3['退件日期']}}</td>
                </tr>
                <tr align="center" height="36" bgcolor="265ca5">
                  <td width="289" align="right" >最终办理部门：</td>
                  <td align="left">{{table3['最终办理部门']}}</td>
                </tr>
              </table>
            </div>
        <!--统计分析图-->
        <div class="div_any">
            <div class="left div_any01">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">诉求性质分析</div>
                    <div id="pieChart1" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
            <div class="div_any02 left ">
                <div class="div_any_child div_height">
                    <div class="div_any_title any_title_width"><img src="../../static/images/title_1.png">投诉来源 </div>
                    <div id="Chart02" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
            <div class="right div_any01">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">海城地图</div>
                    <p id="mapChart" class="p_chart"style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></p>
                </div>
            </div>
        </div>
        <div class="div_any">
            <div class="left div_any01">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">年投诉群众满意度</div>
                    <div id="Chart04" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%">

                    </div>
                </div>
            </div>
            <div class="div_any02 left ">
                <div class="div_any_child div_height">
                    <div class="div_any_title any_title_width"><img src="../../static/images/title_1.png">年投诉变化分析 </div>
                    <div id="Chart05" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
            <div class="right div_any01">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">案件办理状态分析</div>
                    <p id="Chart06" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></p>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>
<script>
import {drawLine,drawPie,drawBar,drawRose,drawHistogram,getDownMap,getLastFormatDate,getNowFormatDate} from "../utils/utils.js"
import {get} from "../utils/request.js"
import {loading} from "../../static/js/index.js"
import {loading_01} from "../../static/js/jquery.min.js"
import {export_table_to_excel} from "../excel/Export2Excel.js"
export default {
  name: 'hello',
  data () {
    return {
      id:1,
      areas: [],
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      xdata:[],
      data:[],
      legend:[],
      piename:'诉求性质分析',
      piedata:[],
      rosename:'案件办理状态分析',
      rosedata:[],
      linexdata:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      lineseries:[],
      mylegend:["不满意", "电话不通", "理解", "满意", "无内容"],
      mytotal:[4000, 3000, 2000, 1000,2500],
      mydata:[40, 30, 20, 10, 25],
      updateTime:2019,
      ajType:'高星件',
      orderTypes:[{type:'高星件'},{type:'疑难件'},{type:'低星件'}],
      table1:[],
      table2:[],
      table3:[],
      one:'',
      er:'',
      three:'',
      type_table:1,
      cid:121312,
      sldw:'',
      gsnr:'',
      hfnr:'',
    }
  },
  mounted(){
    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
    var that = this;

    //更新时间
    that.get(host.url+'/newtime').then((res)=>{
      this.updateTime = res.data
    })
    //诉求性质分析
    that.get(host.url+'/sqxz').then((res)=>{
      //console.log('1111',res);
      that.legend = res.data[0].legend
      that.piedata = res.data[0].data
      //画饼状图
      that.drawPie('pieChart1',that.legend,this.piename,that.piedata);
    })
    //诉求来源
    that.get(host.url+'/sqly').then((res)=>{
      //console.log(res.data)
      that.xdata = res.data[0].legend
      that.data = res.data[0].data
      //画柱形图
      that.drawBar('Chart02',that.xdata,'诉求来源',that.data);
    })
    //案件办理状态
    that.get(host.url+'/sjblzt').then((res)=>{
      //console.log('案件办理状态',res)
      that.rosedata = res.data[0].data;
      // 基于准备好的dom，初始化echarts实例
       let myChart = this.$echarts.init(document.getElementById('Chart06'))
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
                 name:that.rosename,
                 type:'pie',
                 radius : [30, 110],
                 center : ['50%', '50%'],
                 roseType : 'area',
                 data:that.rosedata
             }
         ]
     };

     myChart.setOption(option);
     myChart.on('click', function (params) {
       if(params.name == '高星件' || params.name == '低星件' || params.name == '疑难件'){
         that.loading();
         that.loading_01();
         $('.roate-container').show();
         $(".table").show();
         $("#cover").show();
         $("#tbs1").hide();
         $("#tbs20").hide();
         $("#tbs30").hide();
         $(".downexcel_10").hide();
         $(".downexcel_01").hide();
         that.ajType = params.name;

         for(var i = 0;i<that.orderTypes.length;i++){
           if(that.orderTypes[i].type == params.name){
             that.orderTypes.splice(i,1);
             that.orderTypes.unshift({'type':params.name})
           }
         }
         //that.orderTypes.unshift()
         //shift
         that.get(host.url+'/ajpxtableone',{start:that.start,end:that.end,flag:that.ajType}).then((res)=>{
           $('.roate-container').hide();
           $(".downexcel_10").show();
           $(".downexcel_01").show();
           $("#tbs1").show();
           for(var i =0;i<res.data.length;i++){
             res.data[i] = {
               ranking:res.data[i]['名次'],
               acceptingUnit:res.data[i]['受理单位'],
               ynj:res.data[i]['疑难件'],
               gxj:res.data[i]['高星件'],
               dxj:res.data[i]['低星件'],

               zero:res.data[i]['零星'],
               one:res.data[i]['一星'],
               two:res.data[i]['二星'],
               three:res.data[i]['三星'],
               four:res.data[i]['四星'],
               five:res.data[i]['五星'],
               ten:res.data[i]['十星'],
               fifteen:res.data[i]['十五星'],
               twenty:res.data[i]['二十星'],
               twentyFive:res.data[i]['二十五星'],
             };
           }
           that.table1 = res.data

         })
       }

});
      //画玫瑰图
      //that.drawRose('Chart06',,);

    })
    //年投诉群众满意度http://8890.com/ntsmyd
    that.get(host.url+'/ntsmyd').then((res)=>{
      //console.log('年投诉群众满意度',res.data)
      that.mylegend =res.data[0].legend;
      that.myltotal =res.data[0].total;
      that.myldata = res.data[0].data;
      that.drawHistogram('Chart04',that.mylegend,that.myltotal,that.myldata);

    })
    //年投诉变化分析
    that.get(host.url+'/ntsbh').then((res)=>{
      //console.log('年投诉变化分析',res)
      //var color = ['#CCCC00','#009966','#FF0033']
      for(let i=0;i < res.data.length;i++){
        let cc = {
            name:res.data[i].name,
            type:'line',
            data:res.data[i].data,
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            },
        }
        that.lineseries.push(cc);
      }
      //画线型图
      this.drawLine('Chart05',this.linexdata,that.lineseries);

    })

    //选择区域
    this.get(host.url+'/navigation').then(res=>{
      this.areas = res.data
    })
    //画海城地图
    this.getDownMap('mapChart');
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
    this.tablecolor();
  },
  //updated
  methods:{
    drawBar,
    drawPie,
    drawLine,
    drawRose,
    drawHistogram,
    get,
    getDownMap,
    getLastFormatDate,
    getNowFormatDate,
    loading,
    loading_01,
    export_table_to_excel,
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
      var that = this;
      //诉求性质分析
      that.get(host.url+'/sqxz',{start:that.start,end:that.end,id:that.id}).then((res)=>{
        that.legend = res.data[0].legend
        that.piedata = res.data[0].data
        //画饼状图
        that.drawPie('pieChart1',that.legend,this.piename,that.piedata);
      })
      //诉求来源
      that.get(host.url+'/sqly',{start:that.start,end:that.end,id:that.id}).then((res)=>{
        //console.log(res.data)
        that.xdata = res.data[0].legend
        that.data = res.data[0].data
        //画柱形图
        that.drawBar('Chart02',that.xdata,'诉求来源',that.data);
      })
      //案件办理状态
      that.get(host.url+'/sjblzt',{start:that.start,end:that.end}).then((res)=>{
        //console.log('案件办理状态',res.data)
        that.rosedata = res.data[0].data;
        //画玫瑰图
        that.drawRose('Chart06',that.rosename,that.rosedata);
      })
      //年投诉群众满意度http://8890.com/ntsmyd
      that.get(host.url+'/ntsmyd',{start:that.start,end:that.end,id:that.id}).then((res)=>{
        //console.log('年投诉群众满意度',res.data)
        that.mylegend =res.data[0].legend;
        that.myltotal =res.data[0].total;
        that.myldata = res.data[0].data;
        that.drawHistogram('Chart04',that.mylegend,that.myltotal,that.myldata);

      })

    },
    //二级分类
    table10(e){
      this.loading();
      this.loading_01();
      $('.roate-container').show();
      $('.table').show();
      this.type_table = 2;
      this.tablecolor();
      this.sldw = e.target.dataset.name;
      $("#tbs1").hide();
      $("#tbs30").hide();

      this.get(host.url+'/ajpxtabletwo',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three,sldw:e.target.dataset.name}).then((res)=>{
        $(".downexcel_10").show();
        $(".downexcel_01").show();
        //console.log('yta',res)
        this.loading();
        this.loading_01();
        $('.roate-container').hide();
        $('.table').show();
        if(res.data[1] == '暂无数据'){
          $(".wsj").show();
          $("#tbs20").hide();
        }else{
          $(".wsj").hide();
          $("#tbs20").show();
          for(var i =0;i<res.data.length;i++){
            res.data[i] = {
              id:res.data[i].id,
              ranking:res.data[i]['名次'],
              sldw:res.data[i]['受理单位'],
              sqly:res.data[i]['投诉来源'],
              sqrq:res.data[i]['诉求日期'],
              sjrszdz:res.data[i]['诉求人所在地址'],
              bsqdwmc:res.data[i]['被诉求单位名称'],

              sqbt:res.data[i]['诉求标题'],
              sqdx:res.data[i]['三级定性'],
              jarq:res.data[i]['结案日期'],
              qzmyd:res.data[i]['群众满意度'],
              sfhf:res.data[i]['是否回访'],
              zzpxqk:res.data[i]['最终评星情况'],
            };
          }
          this.table2 = res.data
          //console.log('112131',res)
        }

      })
    },
    //三级分类
    table20(e){
      this.loading();
      this.loading_01();
      $('.roate-container').show();
      $('.table').show();
      this.type_table = 3;
      this.cid = e.target.dataset.id;
      $("#tbs1").hide();
      $("#tbs20").hide();
      $("#tbs30").hide();

      //console.log('id',e);
      this.get(host.url+'/ajpxtablethree',{id:e.target.dataset.id}).then((res)=>{
        $(".downexcel_10").show();
        $(".downexcel_01").show();
        this.loading();
        this.loading_01();
        $('.roate-container').hide();
        $("#tbs30").show();
          //console.log('yta',res)
          $('.gsnr').html(res.data['公示内容'])
          $('.hfnr').html(res.data['回访内容'])
          $('.jjqkxq').html(res.data['解决情况详情'])
          $('.sqnr').html(res.data['诉求内容'])
          this.table3 = res.data
      })
    },
    orderType(e){
      this.ajType = event.target.value
    },
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
    tablecolor:function (){
      var tbs20 = document.getElementById("tbs20");
      var rows20 = tbs20.getElementsByTagName("tr");
      for(let i=1;i<rows20.length;i++){
        if(i%2==0) {
          rows20[i].style.backgroundColor="#18468e";
        } else  {
          rows20[i].style.backgroundColor="#265ca5";
        }
      }
    },
    returnTo_table(e){
      if(this.type_table == 1){
        return
      }else if(this.type_table == 2){
        $(".wsj").hide();

        $('.table').show();
        $('.roate-container').show();
        this.rows();
        this.type_table = 1
        $("#tbs1").hide();
        $("#tbs20").hide();
        $("#tbs30").hide();

        this.get(host.url+'/ajpxtableone',{start:this.start,end:this.end,flag:this.ajType}).then(res=>{
          $(".downexcel_10").show();
          $(".downexcel_01").show();
          this.loading();
          this.loading_01();
          $('.roate-container').hide();
          if(res.data[1] == '暂无数据'){
            $(".wsj").show();
            $("#tbs1").hide();
          }else{
            $(".wsj").hide();
            $("#tbs1").show();
            for(var i =0;i<res.data.length;i++){
              res.data[i] = {
                ranking:res.data[i]['名次'],
                acceptingUnit:res.data[i]['受理单位'],
                ynj:res.data[i]['疑难件'],
                gxj:res.data[i]['高星件'],
                dxj:res.data[i]['低星件'],

                zero:res.data[i]['零星'],
                one:res.data[i]['一星'],
                two:res.data[i]['二星'],
                three:res.data[i]['三星'],
                four:res.data[i]['四星'],
                five:res.data[i]['五星'],
                ten:res.data[i]['十星'],
                fifteen:res.data[i]['十五星'],
                twenty:res.data[i]['二十星'],
                twentyFive:res.data[i]['二十五星'],
              };
            }
            this.table1 = res.data
            //console.log('112131',res)
          }

        })

      }else if(this.type_table == 3){
        $(".wsj").hide();
        this.loading();
        this.loading_01();
        $('.table').show();
        $('.roate-container').show();

        this.tablecolor();
        this.type_table = 2
        $("#tbs1").hide();
        $("#tbs20").hide();
        $("#tbs30").hide();

        this.get(host.url+'/ajpxtabletwo',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three,sldw:this.sldw}).then((res)=>{
          $(".downexcel_10").show();
          $(".downexcel_01").show();
          //console.log('yta',res)
          this.loading();
          this.loading_01();
          $('.roate-container').hide();
          if(res.data[1] == '暂无数据'){
            $(".wsj").show();
            $("#tbs20").hide();
          }else{
            for(var i =0;i<res.data.length;i++){
              $("#tbs20").show();
              res.data[i] = {
                id:res.data[i].id,
                ranking:res.data[i]['名次'],
                sldw:res.data[i]['受理单位'],
                sqly:res.data[i]['投诉来源'],
                sqrq:res.data[i]['诉求日期'],
                sjrszdz:res.data[i]['诉求人所在地址'],
                bsqdwmc:res.data[i]['被诉求单位名称'],

                sqbt:res.data[i]['诉求标题'],
                sqdx:res.data[i]['三级定性'],
                jarq:res.data[i]['结案日期'],
                qzmyd:res.data[i]['群众满意度'],
                sfhf:res.data[i]['是否回访'],
                zzpxqk:res.data[i]['最终评星情况'],
              };
            }
            this.table2 = res.data
            //console.log('112131',res)
          }

        })
      }
    },
    //导出cxcel
    exportExcel(){
      //console.log( this.reportForm)
      if(this.type_table == 1){
        require.ensure([], () => {
          const { export_json_to_excel } = require('../excel/Export2Excel'); //这里必须使用绝对路径
          const tHeader = ['名次','受理单位','疑难件', '高星件', '低星件', '0星','1星',
                            '2星', '3星', '4星', '5星', '10星','15星', '20星', '25星'
                            ]//表头信息
          const filterVal = ['ranking','acceptingUnit','ynj', 'gxj', 'dxj', 'zero','one',
                            'two', 'three', 'four', 'five', 'ten', 'fifteen', 'twenty', 'twentyFive'
                            ]//对应表头的字段名
          const list = this.table1;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '海城市各单位分类表（一级定性）');// 导出的表格名称，根据需要自己命名
        })
      }else if(this.type_table == 2){
        require.ensure([], () => {
          const { export_json_to_excel } = require('../excel/Export2Excel'); //这里必须使用绝对路径
          const tHeader = ['名次','受理单位','诉求来源', '诉求日期', '诉求人所在地址', '被诉求单位名称','诉求标题',
                            '诉求定性', '结案日期', '群众满意度', '是否回访', '最终评星情况'
                            ]//表头信息
          const filterVal = ['ranking','sldw','sqly', 'sqrq', 'sqrszdz', 'bsqdwmc','sqbt',
                            'sqdx', 'jarq', 'qzmyd', 'sfhf', 'zzpxqk'
                            ]//对应表头的字段名
          const list = this.table2;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '海城市各单位分类表');// 导出的表格名称，根据需要自己命名
        })
      }else if(this.type_table == 3){
        require.ensure([], () => {
          //const { export_json_to_excel } = require('../excel/Export2Excel'); //这里必须使用绝对路径
          //const tHeader = ['诉求详细内容']//表头信息
          /*const tHeader = ['诉求来源','诉求日期','诉求人姓名','诉求人电话','诉求人电邮','诉求人所在地址','被诉求单位名称','被诉求单位地址',
                            '诉求内容','承办人','诉求性质','办理方式','办理部门','办理分类','被诉求单位的行业主管部门','一级定性',
                            '二级定性','三级定性','是否重复反应问题','是否为无效件','分派时间','报结案时间','解决情况详情','公示内容',
                            '群众满意度','回访内容','审核状态','评星','加星','减星','推荐选项',
                            '延期申请日期','延期结束日期','延期理由','退件标志','退件理由','退件日期','最终办理部门',
                          ]//表头信息*/
          //const filterVal = ['诉求来源','诉求日期','诉求人姓名']
          //const list = [['诉求来源','诉求日期','诉求人姓名'],[this.table3['诉求来源'],this.table3['诉求日期'],this.table3['诉求人姓名']]];
          //const list = [this.table3['诉求来源'],this.table3['诉求日期'],this.table3['诉求人姓名']];
                      /*const list = [
                                          {'诉求来源':this.table3['诉求来源']},{'诉求日期':this.table3['诉求日期']},{'诉求人姓名':this.table3['诉求人姓名']},
                                          {'诉求人电话':this.table3['诉求人电话']},
                                          {'诉求人电邮':this.table3['诉求人电邮']},
                                          {'诉求人所在地址':this.table3['诉求人所在地址']},{'被诉求单位名称':this.table3['被诉求单位名称']},
                                          {'被诉求单位地址':this.table3['被诉求单位地址']},
                                          {'诉求内容':this.table3['诉求内容']},{'承办人':this.table3['承办人']},{'诉求性质':this.table3['诉求性质']},
                                          {'办理方式':this.table3['办理方式']},
                                          {'办理部门':this.table3['办理部门']},{'办理分类':this.table3['办理分类']},
                                          {'被诉求单位的行业主管部门':this.table3['被诉求单位的行业主管部门']},{'一级定性':this.table3['一级定性']},
                                          {'二级定性':this.table3['二级定性']},{'三级定性':this.table3['三级定性']},{'是否重复反应问题':this.table3['是否重复反应问题']},
                                          {'是否为无效件':this.table3['是否为无效件']},{'分派时间':this.table3['分派时间']},
                                          {'报结案时间':this.table3['报结案时间']},{'解决情况详情':this.table3['解决情况详情']},{'公示内容':this.table3['公示内容']},
                                          {'群众满意度':this.table3['群众满意度']},{'回访内容':this.table3['回访内容']},{'审核状态':this.table3['审核状态']},
                                          {'评星':this.table3['评星']},{'加星':this.table3['加星']},{'减星':this.table3['减星']},
                                          {'推荐选项':this.table3['推荐选项']},
                                          {'延期申请日期':this.table3['延期申请日期']},{'延期结束日期':this.table3['延期结束日期']},{'延期理由':this.table3['延期理由']},
                                          {'退件标志':this.table3['退件标志']},{'退件理由':this.table3['退件理由']},
                                          {'退件日期':this.table3['退件日期']},{'最终办理部门':this.table3['最终办理部门']},
                                      ];*/
          //const data = this.formatJson3(filterVal, list);
          this.export_table_to_excel('tbs30');// 导出的表格名称，根据需要自己命名
        })

      }

   },

   formatJson(filterVal, jsonData){
    return jsonData.map(v => {
      return filterVal.map(j=>v[j])
    })
   },
   search2(){
     this.loading();
     this.loading_01();
     $('.roate-container').show();
     $(".table").show();
     $("#cover").show();
     $("#tbs1").hide();
     $("#tbs20").hide();
     $("#tbs30").hide();
     this.get(host.url+'/ajpxtableone',{start:this.start,end:this.end,flag:this.ajType}).then((res)=>{
       $('.roate-container').hide();
       $("#tbs1").show();
       for(var i =0;i<res.data.length;i++){
         res.data[i] = {
           ranking:res.data[i]['名次'],
           acceptingUnit:res.data[i]['受理单位'],
           ynj:res.data[i]['疑难件'],
           gxj:res.data[i]['高星件'],
           dxj:res.data[i]['低星件'],

           zero:res.data[i]['零星'],
           one:res.data[i]['一星'],
           two:res.data[i]['二星'],
           three:res.data[i]['三星'],
           four:res.data[i]['四星'],
           five:res.data[i]['五星'],
           ten:res.data[i]['十星'],
           fifteen:res.data[i]['十五星'],
           twenty:res.data[i]['二十星'],
           twentyFive:res.data[i]['二十五星'],
         };
       }
       this.table1 = res.data

     })
   },
    close:function (){
      $('#cover').hide();
      $('.table').hide();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
  @import "../../static/css/index.css";
</style>
