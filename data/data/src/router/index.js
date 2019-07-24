import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import sqhz from '@/components/sqhz'
import xzqyt from '@/components/xzqyt'
import fltj from '@/components/fltj'
import xztj from '@/components/xztj'
import wygl from '@/components/wygl'
import csgn from '@/components/csgn'
import sbtj from '@/components/sbtj'
import tjzb from '@/components/tjzb'
import tjyb from '@/components/tjyb'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sqhz',
      name: 'sqhz',
      component: sqhz
    },
    {
      path: '/xzqyt',
      name: 'xzqyt',
      component: xzqyt
    },
    {
      path: '/fltj',
      name: 'fltj',
      component: fltj
    },
    {
      path: '/xztj',
      name: 'xztj',
      component: xztj
    },
    {
      path: '/wygl',
      name: 'wygl',
      component: wygl
    },
    {
      path: '/csgn',
      name: 'csgn',
      component: csgn
    },
    {
      path: '/sbtj',
      name: 'sbtj',
      component: sbtj
    },
    {
      path: '/tjzb',
      name: 'tjzb',
      component: tjzb
    },
    {
      path: '/tjyb',
      name: 'tjyb',
      component: tjyb
    }
  ]
})
