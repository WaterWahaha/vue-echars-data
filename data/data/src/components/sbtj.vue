<template>
  <div class="container">
    <div class="header left">
        <div class="left nav">
            <ul>
              <li ><i class="nav_1"></i><router-link to="/">首页</router-link></li>
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
            <li  class="nav_active"><i class="nav_7"></i><router-link to="/sbtj">省表统计</router-link></li>
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
          <button type="button" name="button" @click="search()">确定</button>
        </div>

      </div>
        <!--统计分析图-->
        <div class="div_any">
            <div class="left div_left_any02">
                <div class="div_any_child">
                    <div class="div_any_title"><img src="../../static/images/title_1.png">省各部门诉求办理情况汇总报表  &nbsp;&nbsp;总办结量：{{zbjl}} 平均报结件数：{{pjbjjs}}</div>
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
                    <button type="button" name="button" class="downexcel" @click="exportExcel">下载</button>
                    <div class="table">
                      <table id="tbs2" border="0" align="center" cellpadding="0" cellspacing="1">
                          <td width="50" rowspan="2" class="head_td">名次</td>
                          <td rowspan="2" class="head_td">受理单位</td>
                          <td colspan="3" class="head_td">一般件</td>
                          <td colspan="3" class="head_td">重点件</td>
                          <td  rowspan="2" class="head_td">选办件</td>
                          <td rowspan="2" class="head_td">疑难件</td>
                          <td rowspan="2" class="head_td">交办总量</td>
                          <td rowspan="2" class="head_td">其中（反馈量）</td>
                          <td rowspan="2" class="head_td">其中（按时反馈量）</td>
                          <td rowspan="2" class="head_td">实际办结量</td>
                          <td rowspan="2" class="head_td">评星量</td>
                          <td colspan="10" class="head_td">评星情况</td>

                          <td rowspan="2" class="head_td">总分</td>
                          <td rowspan="2" class="head_td">平均分</td>
                          <td rowspan="2" class="head_td">反馈率</td>
                          <td rowspan="2" class="head_td">按时反馈率</td>
                          <td rowspan="2" class="head_td">满意率</td>
                          <td rowspan="2" class="head_td">优秀率</td>
                          <td rowspan="2" class="head_td">办件天数</td>
                          <td rowspan="2" class="head_td">有效回访率</td>
                          <td rowspan="2" class="head_td">按时分转率</td>
                          <td rowspan="2" class="head_td">交办比</td>
                          <td rowspan="2" class="head_td">综评分</td>
                        </tr>
                        <!-- 数据表格开始 -->
                        <tr align="center" height="36">
                          <td class="head_td">交办量</td>
                          <td class="head_td">反馈量</td>
                          <td class="head_td">按时反馈量</td>
                          <td class="head_td">交办量</td>
                          <td class="head_td">反馈量</td>
                          <td class="head_td">按时反馈量</td>
                          <td width="40" class="head_td">0星</td>
                          <td width="40" class="head_td">1星</td>
                          <td width="40" class="head_td">2星</td>
                          <td width="40" class="head_td">3星</td>
                          <td width="40" class="head_td">4星</td>
                          <td width="40" class="head_td">5星</td>
                          <td width="40" class="head_td">10星</td>
                          <td width="40" class="head_td">15星</td>
                          <td width="40" class="head_td">20星</td>
                          <td width="40" class="head_td">25星</td>
                        </tr>
                        <!-- 数据表格开始 -->
                        <tr align="center" height="36" v-for="item in reportForm">
                          <td width="50">{{item.ranking}}</td>
                          <td><a>{{item.acceptingUnit}}</a></td>
                          <td>{{item.ybjjbl}}</td>
                          <td>{{item.ybjfkl}}</td>
                          <td>{{item.ybjasfkl}}</td>
                          <td>{{item.zdjjbl}}</td>
                          <td>{{item.zdjfkl}}</td>
                          <td>{{item.zdjasfkl}}</td>
                          <td>{{item.xbj}}</td>
                          <td>{{item.ynj}}</td>
                          <td>{{item.jbzl}}</td>
                          <td>{{item.qzfkl}}</td>
                          <td>{{item.qzasfkl}}</td>
                          <td>{{item.sjbjl}}</td>
                          <td>{{item.pxl}}</td>
                            <td width="40">{{item.jx0zs}}</td>
                            <td width="40">{{item.jx1zs}}</td>
                            <td width="40">{{item.jx2zs}}</td>
                            <td width="40">{{item.jx3zs}}</td>
                            <td width="40">{{item.jx4zs}}</td>
                            <td width="40">{{item.jx5zs}}</td>
                            <td width="40">{{item.js10xzs}}</td>
                            <td width="40">{{item.js15xzs}}</td>
                            <td width="40">{{item.js20xzs}}</td>
                            <td width="40">{{item.js25xzs}}</td>
                          <td width="50">{{item.zf}}</td>
                          <td width="50">{{item.pjf}}</td>
                          <td>{{item.fkl}}%</td>
                          <td>{{item.asfkl}}%</td>
                          <td>{{item.myl}}%</td>
                          <td>{{item.yxl}}%</td>
                          <td>{{item.bjts}}</td>
                          <td>{{item.yxhfl}}%</td>
                          <td>{{item.asfzl}}%</td>
                          <td>{{item.jbb}}</td>
                          <td>{{item.zpf}}</td>
                        </tr>
                        <!-- 数据表格结束 -->
                      </table>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {getNowFormatDate,getLastFormatDate} from "../utils/utils.js"
import {get} from "../utils/request.js"
import {loading} from "../../static/js/index.js"
import {loading_01} from "../../static/js/jquery.min.js"
export default {
  name: 'sqhz',
  data () {
    return {
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      tsfl:[],
      reportForm:[],
      laydate_month:window.laydate,
      zbjl:0,
      pjbjjs:0,
    }
  },

  mounted(){
      this.loading();
      this.loading_01();
      $('.roate-container').show();
      $('.table').hide();
      $('.downexcel').hide();

    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
    //选择区域
    this.get(host.url+'/navigation').then(res=>{
      this.areas = res.data
    })
    //8890海城各部门诉求办理情况汇总报表
    this.get(host.url+'/gbmsqhz2').then((res)=>{
      this.zbjl = res.title['总办结量'];
      this.pjbjjs = res.title['平均办结件数'];
      $('.roate-container').hide();
      $('.table').show();
      $('.downexcel').show();
    for(var i =0;i<res.data.length;i++){
      res.data[i] = {
        ranking:res.data[i].ranking,
        acceptingUnit:res.data[i].acceptingUnit,
        ybjjbl:res.data[i]['一般件交办量'],
        ybjfkl:res.data[i]['一般件反馈量'],
        ybjasfkl:res.data[i]['一般件按时反馈量'],
        jbzl:res.data[i]['交办总量'],
        yxl:res.data[i]['优秀率'].toFixed(2),
        qzfkl:res.data[i]['其中反馈量'],
        qzasfkl:res.data[i]['其中按时反馈量'],
        bjts:res.data[i]['办件天数'],
        fkl:res.data[i]['反馈率'].toFixed(2),
        sjbjl:res.data[i]['实际办结量'],
        pjf:res.data[i]['平均分'].toFixed(4),
        zf:res.data[i]['总分'],
        asfkl:res.data[i]['按时反馈率'].toFixed(2),
        yxhfl:res.data[i]['有效回访率'].toFixed(2),
        myl:res.data[i]['满意率'].toFixed(2),
        ynj:res.data[i]['疑难件'],
        jx0zs:res.data[i]['计星0总数'],
        jx1zs:res.data[i]['计星1总数'],
        jx2zs:res.data[i]['计星2总数'],
        jx3zs:res.data[i]['计星3总数'],
        jx4zs:res.data[i]['计星4总数'],
        jx5zs:res.data[i]['计星5总数'],
        js10xzs:res.data[i]['计算10星总数'],
        js15xzs:res.data[i]['计算15星总数'],
        js20xzs:res.data[i]['计算20星总数'],
        js25xzs:res.data[i]['计算25星总数'],
        pxl:res.data[i]['评星总数'],
        xbj:res.data[i]['选办件'],
        zdjjbl:res.data[i]['重点件交办量'],
        zdjfkl:res.data[i]['重点件反馈量'],
        zdjasfkl:res.data[i]['重点件按时反馈量'],
        asfzl:res.data[i]['按时分转率'].toFixed(2),
        jbb:res.data[i]['交办比'],
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
    getLastFormatDate,
    getNowFormatDate,
    loading,
    loading_01,
    //表格颜色
    rows:function(){
      var tbs = document.getElementById("tbs2");
      var rows = tbs.getElementsByTagName("tr");
      for(let i=1;i<rows.length;i++){
        if(i%2==0) {
          rows[i].style.backgroundColor="#18468e";
        } else  {
          rows[i].style.backgroundColor="#265ca5";
        }
      }
    },
      //点击确定查询
      search:function(){
        $('.roate-container').show();
        $('.table').hide();
        $('.downexcel').hide();
        //8890海城各部门诉求办理情况汇总报表
        this.get(host.url+'/gbmsqhz2',{start:this.start,end:this.end,id:1}).then((res)=>{
          //console.log('restwo',res)
          $('.roate-container').hide();
          $('.table').show();
          $('.downexcel').show();
          this.zbjl = res.title['总办结量'];
          this.pjbjjs = res.title['平均办结件数'];
          for(var i =0;i<res.data.length;i++){
            res.data[i] = {
              ranking:res.data[i].ranking,
              acceptingUnit:res.data[i].acceptingUnit,
              ybjjbl:res.data[i]['一般件交办量'],
              ybjfkl:res.data[i]['一般件反馈量'],
              ybjasfkl:res.data[i]['一般件按时反馈量'],
              jbzl:res.data[i]['交办总量'],
              yxl:res.data[i]['优秀率'].toFixed(2),
              qzfkl:res.data[i]['其中反馈量'],
              qzasfkl:res.data[i]['其中按时反馈量'],
              bjts:res.data[i]['办件天数'],
              fkl:res.data[i]['反馈率'].toFixed(2),
              sjbjl:res.data[i]['实际办结量'],
              pjf:res.data[i]['平均分'].toFixed(4),
              zf:res.data[i]['总分'],
              asfkl:res.data[i]['按时反馈率'].toFixed(2),
              yxhfl:res.data[i]['有效回访率'].toFixed(2),
              myl:res.data[i]['满意率'].toFixed(2),
              ynj:res.data[i]['疑难件'],
              jx0zs:res.data[i]['计星0总数'],
              jx1zs:res.data[i]['计星1总数'],
              jx2zs:res.data[i]['计星2总数'],
              jx3zs:res.data[i]['计星3总数'],
              jx4zs:res.data[i]['计星4总数'],
              jx5zs:res.data[i]['计星5总数'],
              js10xzs:res.data[i]['计算10星总数'],
              js15xzs:res.data[i]['计算15星总数'],
              js20xzs:res.data[i]['计算20星总数'],
              js25xzs:res.data[i]['计算25星总数'],
              jsdydy26xzs:res.data[i]['计算大于等于26星总数'],
              pxl:res.data[i]['评星总数'],
              xbj:res.data[i]['选办件'],
              zdjjbl:res.data[i]['重点件交办量'],
              zdjfkl:res.data[i]['重点件反馈量'],
              zdjasfkl:res.data[i]['重点件按时反馈量'],
              asfzl:res.data[i]['按时分转率'].toFixed(2),
              jbb:res.data[i]['交办比'],
              zpf:res.data[i]['综评分'].toFixed(2),
            };
          }

          this.reportForm = res.data

        })
        this.rows();

      },
      //导出cxcel
      exportExcel(){
        require.ensure([], () => {
          const { export_json_to_excel } = require('../excel/Export2Excel'); //这里必须使用绝对路径
          const tHeader = ['名次', '受理单位', '一般件交办量',  '一般件反馈量','一般件按时反馈量', '重点件交办量',  '重点件反馈量','重点件按时反馈量',
                            '选办件', '疑难件', '交办总量',  '其中（反馈量）','其中（按时反馈量）', '实际办结量',  '评星量','0星',
                              '1星', '2星', '3星',  '4星','5星',  '10星',  '15星','20星',
                              '25星', '总分', '平均分',  '按时反馈率','满意率', '优秀率',  '有效回访率','按时分转率',
                              , '交办比','综评分',,
                          ]//表头信息
          const filterVal = ['ranking', 'acceptingUnit', 'ybjjbl',  'ybjfkl','ybjasfkl', 'zdjjbl',  'zdjfkl','zdjasfkl',
                            'xbj', 'ynj', 'jbzl',  'qzfkl','qzasfkl', 'zjbjl',  'pxl','jx0zs',
                              'jx1zs', 'jx2zs', 'jx3zs',  'jx4zs','jx5zs','js10xzs', 'js15xzs','js20xzs',
                              'js25xzs', 'zf', 'pjf',  'asfkl','myl', 'yxl',  'yxhfl','asfzl',
                              , 'jbb','zpf']//对应表头的字段名
          const list = this.reportForm;
          const data = this.formatJson(filterVal, list);
          export_json_to_excel(tHeader, data, '省各单位诉求汇总表');// 导出的表格名称，根据需要自己命名
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
