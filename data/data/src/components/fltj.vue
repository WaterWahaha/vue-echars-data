<template>
  <div class="container">
    <div class="header left">
        <div class="left nav">
            <ul>
              <li><i class="nav_1"></i><router-link to="/">首页</router-link></li>
              <li class="nav_active"><i class="nav_3"></i><router-link to="/fltj">分类统计</router-link></li>
              <li><i class="nav_2"></i><router-link to="/xzqyt">行政区域图</router-link></li>
              <li><i class="nav_4"></i><router-link to="/sqhz">诉求汇总</router-link></li>
              <li><i class="nav_5"></i><router-link to="/xztj">行政统计</router-link></li>
            </ul>
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
        </div>
      </div>
        <!--统计分析图-->
        <button type="button" name="button" class="downexcel_10" @click="returnTo_table">返回</button>
        <div class="div_any">
            <div class="left div_left_any10">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">海城分类统计图</div>
                    <div class="wsj">
                      暂无数据
                    </div>
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
                    <div id="HistogramChart2" class="p_chart" style="width:97.5%;height:95%;padding-left: 1.25%;padding-top:2.2%"></div>
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
                        <tr align="center" height="36" v-for="item in table1">
                          <td width="50">{{item.ranking}}</td>
                          <td><a  @click="table10($event)" :data-name="item.acceptingUnit">{{item.acceptingUnit}}</a></td>
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
                      <table  id="tbs20" border="0" align="center" cellpadding="0" cellspacing="1">
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
                      <table  id="tbs30" border="0" align="center" cellpadding="0" cellspacing="1">
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

                </div>
            </div>
            <div class="left div_right_any">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">投诉分类查询({{floor}})</div>
                    <div class="div_right_word">
                      <span v-for="(item,index) in tsfl" @click="two($event)" :id="forId(item.id)" :data-pid="forPid(item.pid)" :data-name="item.content">{{item.content}}</span>

                    </div>
                    <div class="return" style="color:#fff;font-size:18px;position:absolute;margin-left:455px;margin-top:320px">
                      <span @click="returnTO($event)"><<返回</span>
                    </div>
                </div>
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">{{f}}级分类案件比率</div>
                    <div id="Chart03" class="p_chart" style="width:97.5%;height:95%;display: inline-block;padding-left: 1.25%;padding-top:2.2%"></div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {drawHistogramChart3,drawHistogramChart2} from "../utils/utils.js"
import {drawRose} from "../utils/utils.js"
import {get} from "../utils/request.js"
import {getLastFormatDate} from "../utils/utils.js"
import {getNowFormatDate} from "../utils/utils.js"
import {loading} from "../../static/js/index.js"
import {loading_01} from "../../static/js/jquery.min.js"
export default {
  name: '',
  data () {
    return {
      id:1,
      areas: [],
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      type:2,
      name:'',
      laydate_month:window.laydate,
      HistogramChart2Series:[
          {
              name:'海城分类汇总',
              type:'bar',
              barWidth : 20,
              data:[40, 30, 20, 10, 25, 50, 15, 25, 50, 15],
          },
      ],
      HistogramChart2Legend:[],
      rosename:'案件比率',
      rosedata:[],
      floor:'一级定性',
      f:'一',
      tsfl: [],
      fontSize:13,
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
      $('.roate-container').hide();
      this.start = this.getLastFormatDate();
      this.end = this.getNowFormatDate();
      //选择区域
      this.get(host.url+'/navigation').then(res=>{
        this.areas = res.data
      })
      //投诉分类(一(二三)级定性)
      this.get(host.url+'/tsfly').then(res=>{
        this.tsfl = res.data
      })
      //海城分类汇总
      this.get(host.url+'/hcfltjz').then((res)=>{
        //从组数组便于绘制图标
        this.HistogramChart2Series = {name:'海城分类统计',type:'bar',data:res.data[0].data,itemStyle: {
              normal: {
                  label: {
                      show: true,		//开启显示
                      position: 'right',	//在上方显示
                      textStyle: {	    //数值样式
                          color: '#fff',
                          fontSize: this.fontSize
                      }
                  }
              }
          }}
        this.HistogramChart2Legend = res.data[0].legend;
        $("#HistogramChart2").show();
        $("#tbs1").hide();
        $("#tbs20").hide();
        $("#tbs30").hide();
        $(".downexcel_10").hide();
        //画横向柱形图
        this.drawHistogramChart3('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series,this.fontSize);
      })

      //案件比率
      this.get(host.url+'/yjflaj').then((res)=>{
        this.rosedata = res.data[0].data;
        //画玫瑰图
        this.drawRose('Chart03',this.rosename,this.rosedata);

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
    this.tablecolor();
  },
  methods:{
    get,
    drawHistogramChart3,
    drawRose,
    getLastFormatDate,
    getNowFormatDate,
    loading,
    loading_01,
    two(e){
      if(e.target.dataset.pid == 2){
        this.loading();
        this.loading_01();
        $('.roate-container').show();
        $('.table').hide();
        $(".wsj").hide();
        this.rows();
        this.fontSize  = this.fontSize
        this.three = e.target.dataset.name
        $("#HistogramChart2").hide();
        $("#tbs1").show();
        $("#tbs20").hide();
        $("#tbs30").hide();

        this.get(host.url+'/fltjtableone',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three}).then(res=>{
          $(".downexcel_10").show();
          this.loading();
          this.loading_01();
          $('.roate-container').hide();
          $('.table').show();
          if(res.data[1] == '暂无数据'){
            $(".wsj").show();
            $("#tbs1").hide();
          }else{
            $(".wsj").hide();
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
            this.table1 = res.data
            //console.log('112131',res)
          }

        })

        return
      }else{
        this.fontSize  = this.fontSize + 2
      }

        this.pid = e.target.dataset.pid;
        if(this.name){
          this.name = this.name + e.target.dataset.name;
        }else{
          this.name = e.target.dataset.name+ ',';
        }
        if(e.target.dataset.pid == 0){
          this.floor = '二级定性';
          this.f = '二'
          this.one = e.target.dataset.name
        }
        if(e.target.dataset.pid == 1){
          this.floor = '三级定性'
          this.f = '三'
          this.er = e.target.dataset.name
        }


        this.type = parseFloat(e.target.dataset.pid) + 2;

        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then(res=>{
          this.tsfl = res.data
        })

        //海城分类汇总
        this.get(host.url+'/hcfltjz',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
          //从组数组便于绘制图标
          this.HistogramChart2Series = {name:'海城分类统计',type:'bar',data:res.data[0].data,itemStyle: {
                normal: {
                    label: {
                        show: true,		//开启显示
                        position: 'right',	//在上方显示
                        textStyle: {	    //数值样式
                            color: '#fff',
                            fontSize: this.fontSize
                        }
                    }
                }
            }}
          this.HistogramChart2Legend = res.data[0].legend;
          $("#HistogramChart2").show();
          $("#tbs1").hide();
          $("#tbs20").hide();
          $("#tbs30").hide();
          $(".downexcel_10").hide();
          //画横向柱形图
          this.drawHistogramChart3('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series,this.fontSize);
        })

        //案件比率
        this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
          this.rosedata = res.data[0].data;
          //画玫瑰图
          this.drawRose('Chart03',this.rosename,this.rosedata);

        })
    },
    //返回
    returnTO:function(e){
      $(".wsj").hide();
      if(this.f == '一'){
        this.type = '';
        this.name = '';
        this.fontSize  = this.fontSize
        return
      }else{
        this.fontSize  = this.fontSize - 2
      }

      if(this.f == '三'){
        this.floor = '二级定性'
        this.f = '二'
        var names = [];
        names = this.name.split(",")
        //console.log('tis.ame',names[0])
        this.name = names[0] + ',';
        this.type = 2
        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then(res=>{
          this.tsfl = res.data
        })
      }else if(this.f == '二'){
        this.floor = '一级定性'
        this.f = '一'
        this.type = '';
        this.name = '';
        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id}).then(res=>{
          this.tsfl = res.data
        })
      }
      //海城分类汇总
      this.get(host.url+'/hcfltjz',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
        //从组数组便于绘制图标
        this.HistogramChart2Series = {name:'海城分类统计',type:'bar',data:res.data[0].data,itemStyle: {
              normal: {
                  label: {
                      show: true,		//开启显示
                      position: 'right',	//在上方显示
                      textStyle: {	    //数值样式
                          color: '#fff',
                          fontSize: this.fontSize
                      }
                  }
              }
          }}
        this.HistogramChart2Legend = res.data[0].legend;
        $("#HistogramChart2").show();
        $("#tbs1").hide();
        $("#tbs20").hide();
        $("#tbs30").hide();
        $(".downexcel_10").hide();
        //画横向柱形图
        this.drawHistogramChart3('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series,this.fontSize);
      })

      //案件比率
      this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
        this.rosedata = res.data[0].data;
        //画玫瑰图
        this.drawRose('Chart03',this.rosename,this.rosedata);

      })
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
    //获取span 标签中id
    forId:function(index){
       return index
     },
     //获取span 标签中pid
     forPid:function(index){
        return index
      },
      /*获取选择管理区域值*/
      areaSelect:function(a){
        this.id = event.target.value;
      },
      //点击确定查询
      search:function(){
        this.fontSize = 13
        this.name = '';
        this.type = '';
        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id}).then(res=>{
          this.tsfl = res.data
        })
        //海城分类汇总
        this.get(host.url+'/hcfltjz',{start:this.start,end:this.end,id:this.id}).then((res)=>{
          //从组数组便于绘制图标
          this.HistogramChart2Series = {name:'海城分类统计',type:'bar',data:res.data[0].data,itemStyle: {
                normal: {
                    label: {
                        show: true,		//开启显示
                        position: 'right',	//在上方显示
                        textStyle: {	    //数值样式
                            color: '#fff',
                            fontSize: this.fontSize
                        }
                    }
                }
            }}
          this.HistogramChart2Legend = res.data[0].legend;
          $("#HistogramChart2").show();
          $("#tbs1").hide();
          $("#tbs20").hide();
          $("#tbs30").hide();
          $(".downexcel_10").hide();
          //画横向柱形图
          this.drawHistogramChart3('HistogramChart2',this.HistogramChart2Legend,this.HistogramChart2Series,this.fontSize);
        })

        //案件比率
        this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id}).then((res)=>{
          this.rosedata = res.data[0].data;
          //画玫瑰图
          this.drawRose('Chart03',this.rosename,this.rosedata);

        })

      },
      returnTo_table(e){
        if(this.type_table == 1){
          return
        }else if(this.type_table == 2){
          $(".wsj").hide();
          this.loading();
          this.loading_01();
          $('.roate-container').show();
          $('.table').hide();
          this.rows();
          this.type_table = 1
          $("#HistogramChart2").hide();
          $("#tbs1").show();
          $("#tbs20").hide();
          $("#tbs30").hide();

          this.get(host.url+'/fltjtableone',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three}).then(res=>{
            $(".downexcel_10").show();
            this.loading();
            this.loading_01();
            $('.roate-container').hide();
            $('.table').show();
            if(res.data[1] == '暂无数据'){
              $(".wsj").show();
              $("#tbs1").hide();
            }else{
              $(".wsj").hide();
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
              this.table1 = res.data
              //console.log('112131',res)
            }

          })

        }else if(this.type_table == 3){
          $(".wsj").hide();
          this.loading();
          this.loading_01();
          $('.roate-container').show();
          $('.table').hide();
          this.tablecolor();
          this.type_table = 2
          $("#HistogramChart2").hide();
          $("#tbs1").hide();
          $("#tbs20").show();
          $("#tbs30").hide();

          this.get(host.url+'/fltjtabletwo',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three,sldw:this.sldw}).then((res)=>{
            $(".downexcel_10").show();
            //console.log('yta',res)
            this.loading();
            this.loading_01();
            $('.roate-container').hide();
            $('.table').show();
            if(res.data[1] == '暂无数据'){
              $(".wsj").show();
              $("#tbs20").hide();
            }else{
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
        }
      },
      //二级分类
      table10(e){
        this.loading();
        this.loading_01();
        $('.roate-container').show();
        $('.table').hide();
        this.type_table = 2;
        this.tablecolor();
        this.sldw = e.target.dataset.name;
        $("#HistogramChart2").hide();
        $("#tbs1").hide();
        $("#tbs20").show();
        $("#tbs30").hide();

        this.get(host.url+'/fltjtabletwo',{start:this.start,end:this.end,one:this.one,two:this.er,three:this.three,sldw:e.target.dataset.name}).then((res)=>{
          $(".downexcel_10").show();
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
        $('.table').hide();
        this.type_table = 3;
        this.cid = e.target.dataset.id;
        $("#HistogramChart2").hide();
        $("#tbs1").hide();
        $("#tbs20").hide();
        $("#tbs30").show();

        //console.log('id',e);
        this.get(host.url+'/fltjtablethree',{id:e.target.dataset.id}).then((res)=>{
          $(".downexcel_10").show();
          this.loading();
          this.loading_01();
          $('.roate-container').hide();
          $('.table').show();
            //console.log('yta',res)
            $('.gsnr').html(res.data['公示内容'])
            $('.hfnr').html(res.data['回访内容'])
            $('.jjqkxq').html(res.data['解决情况详情'])
            $('.sqnr').html(res.data['诉求内容'])
            this.table3 = res.data
        })
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
  @import '../../static/css/index.css';
</style>
