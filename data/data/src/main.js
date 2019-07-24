// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'
import host from './utils/request.js'
import $ from 'jquery'
import Blob from './excel/Blob.js'
import Export2Excel from './excel/Export2Excel.js'
import "babel-polyfill"
import layer from 'vue-layer'
global.host= host;
Vue.prototype.$layer = layer(Vue);

Vue.prototype.$qs = qs;
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
