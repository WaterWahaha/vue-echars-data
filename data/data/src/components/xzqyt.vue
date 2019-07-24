<template>
  <div class="container">
    <div class="header left">
        <div class="left nav">
            <ul>
              <li><i class="nav_1"></i><router-link to="/">首页</router-link></li>
              <li><i class="nav_3"></i><router-link to="/fltj">分类统计</router-link></li>
              <li class="nav_active"><i class="nav_2"></i><router-link to="/xzqyt">行政区域图</router-link></li>
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
        </div>
      </div>
        <!--海城行政区域地图-->
        <div class="div_any">
            <div class="left div_left_any01">
                <div class="div_any_child" >
                    <div class="div_any_title"><img src="../../static/images/title_1.png">海城行政区域地图</div>

                    <div id="hcmap" class="p_chart" style="width:95.5%;height:90%;display: inline-block;padding-left: 1.25%;padding-top:2.2%;margin-top:30px"></div>
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
                  	</div>
                </div>

            </div>
            <!--投诉分类查询-->
            <div class="left div_right_any01">
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
<!--<script src="../../static/js/jquery.min.js"></script>
<script src="../../static/js/index.js"></script>-->

<script>
import {drawRose,getLastFormatDate,getNowFormatDate} from "../utils/utils.js"
import {get} from "../utils/request.js"
import {loading} from "../../static/js/index.js"
import {loading_01} from "../../static/js/jquery.min.js"

export default {
  name: '',
  data () {
    return {
      floor:'一级定性',
      f:'一',
      id:1,
      areas: [],
      current:0,
      start: '2019-05-13',
      end: '2019-06-13',
      laydate_month:window.laydate,
      tsfl:[],
      rosename:'面积模式',
      rosedata:[],
      type:2,
      name:'',
      markerArr:[],
      areaclass:12,
      loads:201
    }
  },
  mounted(){

    this.loading();
    this.loading_01();
    $('.roate-container').show();
    $('#hcmap').hide();

    this.start = this.getLastFormatDate();
    this.end = this.getNowFormatDate();
      //选择区域
      this.get(host.url+'/navigation').then(res=>{
        this.areas = res.data
      })

      //投诉分类(一(二三)级定性)
      this.get(host.url+'/tsfly').then(res=>{
        //console.log('投诉分类(一(二三)级定性)',res)
        this.tsfl = res.data

      })
      //案件比率
      this.get(host.url+'/yjflaj').then((res)=>{
        //console.log('案件比率',res)
        this.rosedata = res.data[0].data;
        //画玫瑰图
        this.drawRose('Chart03',this.rosename,this.rosedata);

      })

      //行政区域地图
      this.get(host.url+'/regionmaps').then((res)=>{
              //开启动画
                $('.roate-container').hide();
                $('#hcmap').show();
                var result = res.data.reduce((function () {
                var map = {};
                return function (result, next) {
                  var key = next.point;
                  if (!map[key]) {
                    map[key] = true;
                    result.push(next);
                  }
                  return result;
                };
              })(), []);
              //console.log(result);
              this.markerArr = result

              var map = new BMap.Map("hcmap");          // 创建地图实例
              //var point = new BMap.Point(122.747854, 40.869403);  // 创建点坐标
              var point = new BMap.Point(122.767626,40.865090);  // 创建点坐标
              map.centerAndZoom(point, 10);                 // 初始化地图，设置中心点坐标和地图级别
              map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
              //海城行政区地图
              var bdary = new BMap.Boundary();
              bdary.get("鞍山市海城市", function(rs){       //获取行政区域
                //map.clearOverlays();        //清除地图覆盖物
                var count = rs.boundaries.length; //行政区域的点有多少个
                if (count === 0) {
                  alert('未能获取当前输入行政区域');
                  return ;
                }
                var pointArray = [];
                //var pointArrays = [];
                var strs= new Array();

                strs = rs.boundaries[0].split(";"); //字符分割
                //console.log('strs',strs);
                for (var i=0;i< strs.length;i++ )
                {
                    pointArray.push(eval('new BMap.Point('+strs[i]+')'))
                }
                var polygon = new BMap.Polyline(pointArray, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5}); //建立多边形覆盖物
                map.addOverlay(polygon);   //增加多边形
                //pointArray = pointArray.concat(ply.getPath());
                //map.setViewport(pointArray);    //调整视野
              });

              for(var i=0;i<this.markerArr.length;i++){
                //alert(1111111)
                var marker = new BMap.Marker(new BMap.Point(this.markerArr[i].point.split(",")[0],this.markerArr[i].point.split(",")[1]));  // 创建标注
                //console.log(marker)
                //var content = "<p style=’font-size:12px;lineheight:1.8em;’>投诉数量："+this.markerArr[i].num + "</br>投诉来源：" +this.markerArr[i].title + "</br></p>";
                var label = new BMap.Label(this.markerArr[i].num,{offset:new BMap.Size(0,-20)});
                 marker.setLabel(label);
                map.addOverlay(marker);               // 将标注添加到地图中
                //addClickHandler(content,marker);
              }
              //结束动画



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
  beforeUpdate(){

  },
  methods:{
    get,
    drawRose,
    getLastFormatDate,
    getNowFormatDate,
    loading,
    loading_01,
    two(e){
      if(this.type == 4){
        return
      }
       this.pid = e.target.dataset.pid;
       if(this.name){
         this.name = this.name + e.target.dataset.name+ ',';
       }else{
         this.name = e.target.dataset.name+ ',';
       }
       if(e.target.dataset.pid == 0){
         this.floor = '二级定性';
         this.f = '二'
         this.type = parseFloat(e.target.dataset.pid) + 2;
         //投诉分类(一(二三)级定性)
         this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then(res=>{
           //console.log('res',res)
           this.tsfl = res.data
         })
         //案件比率
         this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
           this.rosedata = res.data[0].data;
           //画玫瑰图
           this.drawRose('Chart03',this.rosename,this.rosedata);

         })

       }else  if(e.target.dataset.pid == 1){
         this.floor = '三级定性'
         this.f = '三'
         this.type = parseFloat(e.target.dataset.pid) + 2;
         //投诉分类(一(二三)级定性)
         this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then(res=>{
           //console.log('res',res)
           this.tsfl = res.data
         })
         //案件比率
         this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
           this.rosedata = res.data[0].data;
           //画玫瑰图
           this.drawRose('Chart03',this.rosename,this.rosedata);
         })
       }
        this.type = parseFloat(e.target.dataset.pid) + 2;

        //regionmap
        //行政区域地图
        //console.log('this.type',this.type)
        this.get(host.url+'/regionmaps',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
          var result = res.data.reduce((function () {
          var map = {};
          return function (result, next) {
            var key = next.point;
            if (!map[key]) {
              map[key] = true;
              result.push(next);
            }
            return result;
          };
        })(), []);
        //console.log(result);
            this.markerArr = result
            this.areamap();
        })


    },
    //返回
    returnTO:function(e){
      if(this.type == 4){
        this.type = 3
        this.name = this.name.split(",")[0]+','+this.name.split(",")[1]+',';
        //行政区域地图
        this.get(host.url+'/regionmaps',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
          //console.log('res',res);
          if(res.data){
            this.markerArr = res.data;
            this.areamap();
          }
        })
      }else if(this.type == 3){
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
        //行政区域地图
        this.get(host.url+'/regionmaps',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
          //console.log('res',res);
          if(res.data){
            this.markerArr = res.data;
            this.areamap();
          }
        })
      }else if(this.type == 2){
        this.floor = '一级定性'
        this.f = '一'
        this.type = '';
        this.name = '';
        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id}).then(res=>{
          this.tsfl = res.data
        })

        //行政区域地图
        this.get(host.url+'/regionmaps').then((res)=>{
          //console.log('行政区域地图',res)
          var result = res.data.reduce((function () {
          var map = {};
          return function (result, next) {
            var key = next.point;
            if (!map[key]) {
              map[key] = true;
              result.push(next);
            }
            return result;
          };
        })(), []);
        //console.log(result);
        this.markerArr = result
        var map = new BMap.Map("hcmap");          // 创建地图实例
        var point = new BMap.Point(122.747854, 40.869403);  // 创建点坐标
        map.centerAndZoom(point, 12);                 // 初始化地图，设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        //海城行政区地图
        var bdary = new BMap.Boundary();
        bdary.get("鞍山市海城市", function(rs){       //获取行政区域
          //map.clearOverlays();        //清除地图覆盖物
          var count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
          }
          var pointArray = [];
          //var pointArrays = [];
          var strs= new Array();

          strs = rs.boundaries[0].split(";"); //字符分割
          //console.log('strs',strs);
          for (var i=0;i< strs.length;i++ )
          {
              pointArray.push(eval('new BMap.Point('+strs[i]+')'))
          }
          var polygon = new BMap.Polyline(pointArray, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5}); //建立多边形覆盖物
          map.addOverlay(polygon);   //增加多边形
          //pointArray = pointArray.concat(ply.getPath());
          map.setViewport(pointArray);    //调整视野
        });
      //}

      for(var i=0;i<this.markerArr.length;i++){
        //alert(1111111)
        var marker = new BMap.Marker(new BMap.Point(this.markerArr[i].point.split(",")[0],this.markerArr[i].point.split(",")[1]));  // 创建标注
        //console.log(marker)
        //var content = "<p style=’font-size:12px;lineheight:1.8em;’>投诉数量："+this.markerArr[i].num + "</br>投诉来源：" +this.markerArr[i].title + "</br>处理单位：" + this.markerArr[i].address  + "</br></p>";
        var label = new BMap.Label(this.markerArr[i].num,{offset:new BMap.Size(0,-20)});
	       marker.setLabel(label);
        map.addOverlay(marker);               // 将标注添加到地图中
        //addClickHandler(content,marker);
      }

      })
      }else if(this.type = ''){
        this.get(host.url+'/regionmaps').then((res)=>{
          var result = res.data.reduce((function () {
          var map = {};
          return function (result, next) {
            var key = next.point;
            if (!map[key]) {
              map[key] = true;
              result.push(next);
            }
            return result;
          };
        })(), []);
        //console.log(result);
        this.markerArr = result
          return
        })
      }
      //console.log('this.type',this.type)
      //案件比率
      this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id,type:this.type,name:this.name}).then((res)=>{
        this.rosedata = res.data[0].data;
        //画玫瑰图
        this.drawRose('Chart03',this.rosename,this.rosedata);
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
      /*获取选择管理区域值*/
      areaSelect:function(a){
        this.id = event.target.value;
      },
      //点击确定查询
      search:function(){
        this.name = '';
        this.floor = '一级定性'
        //投诉分类(一(二三)级定性)
        this.get(host.url+'/tsfly',{start:this.start,end:this.end,id:this.id}).then(res=>{
          this.tsfl = res.data
        })
        //案件比率
        this.get(host.url+'/yjflaj',{start:this.start,end:this.end,id:this.id}).then((res)=>{
          this.rosedata = res.data[0].data;
          //画玫瑰图
          this.drawRose('Chart03',this.rosename,this.rosedata);
        })
        this.get(host.url+'/regionmaps',{start:this.start,end:this.end,id:this.id}).then((res)=>{
          var result = res.data.reduce((function () {
          var map = {};
          return function (result, next) {
            var key = next.point;
            if (!map[key]) {
              map[key] = true;
              result.push(next);
            }
            return result;
          };
        })(), []);
        //console.log(result);

          if(res.data){
            this.markerArr = result
            this.areamap();

          }

        })

      },
      areamap:function(){
        // 百度地图API功能
        var map = new BMap.Map("hcmap");
        var point = new BMap.Point(122.747854, 40.869403);
        map.centerAndZoom(point, 12);
        map.enableScrollWheelZoom(true);
        //海城行政区地图
        var bdary = new BMap.Boundary();
        bdary.get("鞍山市海城市", function(rs){       //获取行政区域
          //map.clearOverlays();        //清除地图覆盖物
          var count = rs.boundaries.length; //行政区域的点有多少个
          if (count === 0) {
            alert('未能获取当前输入行政区域');
            return ;
          }
          var pointArray = [];
          //var pointArrays = [];
          var strs= new Array();

          strs = rs.boundaries[0].split(";"); //字符分割
          //console.log('strs',strs);
          for (var i=0;i< strs.length;i++ )
          {
              pointArray.push(eval('new BMap.Point('+strs[i]+')'))
          }
          //var polygon = new BMap.Polyline(pointArray, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5}); //建立多边形覆盖物
          //map.addOverlay(polygon);   //增加多边形
          //pointArray = pointArray.concat(ply.getPath());
          map.setViewport(pointArray);    //调整视野
        });
        for(var i=0;i<this.markerArr.length;i++){
          //alert(1111111)
      		var marker = new BMap.Marker(new BMap.Point(this.markerArr[i].point.split(",")[0],this.markerArr[i].point.split(",")[1]));  // 创建标注
          //console.log(marker)
      		//var content = "<p style=’font-size:12px;lineheight:1.8em;’>投诉数量："+this.markerArr[i].num + "</br>投诉来源：" +this.markerArr[i].title + "</br>处理单位：" + this.markerArr[i].address  + "</br></p>";
          var label = new BMap.Label(this.markerArr[i].num,{offset:new BMap.Size(0,-20)});
  	       marker.setLabel(label);
          map.addOverlay(marker);               // 将标注添加到地图中
      		//addClickHandler(content,marker);
      	}

      },
      loadings:function(){
        this.loading();
        this.loading_01();
        $('.roate-container').hide();
        $('#hcmap').show();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="" scoped>
  @import "../../static/css/style.css";
  @import '../../static/css/index.css';
</style>
