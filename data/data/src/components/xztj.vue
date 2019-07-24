<template>
  <div class="container">
    <div class="header left">
        <div class="left nav">
            <ul>
              <li><i class="nav_1"></i><router-link to="/">首页</router-link></li>
              <li><i class="nav_3"></i><router-link to="/fltj">分类统计</router-link></li>
              <li><i class="nav_2"></i><router-link to="/xzqyt">行政区域图</router-link></li>
              <li><i class="nav_4"></i><router-link to="/sqhz">诉求汇总</router-link></li>
              <li class="nav_active"><i class="nav_5"></i><router-link to="/xztj">行政统计</router-link></li>
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
        <!--海城行政区域地图-->
        <div class="div_any">
            <div class="div_01">
                <div class="div_01_child">
                    <div class="div_01_child_child" v-for="data in datas">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <div class="div_01_child_child_word">
                        {{data.title}}
                      </div>
                      <div class="div_01_child_child_num">
                        <b>{{data.num}}</b>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {get} from "../utils/request.js"
import {getLastFormatDate} from "../utils/utils.js"
import {getNowFormatDate} from "../utils/utils.js"
export default {
  name: 'xztj',
  data () {
    return {
      id:1,
      areas: [],
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      datas:[]
    }
  },

  mounted(){
    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
    //选择区域
    this.get(host.url+'/navigation').then(res=>{
      this.areas = res.data
    })
    //行政统计
    this.get(host.url+'/xztj').then((res)=>{
      //this.datas = res.data
      //console.log('res',res)
      for(var i =0;i<res.data.length;i++){
        if(res.data[i].title == '罚没'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '罚款'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '退款'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '赔偿'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '清欠'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '投入'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }
        if(res.data[i].title == '挽回'){
          res.data[i].num = res.data[i].num.toFixed(2);
        }

      }
        this.datas = res.data
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
  methods:{
    getLastFormatDate,
    getNowFormatDate,
    //get请求方法
    get,
    /*获取选择管理区域值*/
    areaSelect:function(a){
      this.id = event.target.value;
    },
    //点击确定查询
    search:function(){
      //行政统计

      this.get(host.url+'/xztj',{start:this.start,end:this.end,id:this.id}).then((res)=>{
        //console.log('res',res)
        for(var i =0;i<res.data.length;i++){
          if(res.data[i].title == '罚没'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '罚款'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '退款'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '赔偿'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '清欠'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '投入'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }
          if(res.data[i].title == '挽回'){
            res.data[i].num = res.data[i].num.toFixed(2);
          }

        }
        this.datas = res.data
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
</style>
