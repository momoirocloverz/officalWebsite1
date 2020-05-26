import Vue from 'vue'
import App from './App.vue'
import './common/rem'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/my-mint.scss' //全局修改mint-UI样式
import 'vant/lib/index.css';
import api from './api/api'
import FastClick from 'fastclick'

import '@/assets/css/quill.core.css';
import '@/assets/css/quill.snow.css';
import '@/assets/css/quill.bubble.css';


import './registerServiceWorker'


Vue.use(Mint)

const str = navigator.userAgent.toLowerCase()
const ver = str.match(/cpu iphone os (.*?) like mac os/)

if (!ver || parseInt(ver[1]) < 11) {
  // 非IOS系统 或 IOS小于11的

  // 引入fastclick 做相关处理
  FastClick.attach(document.body);
}

Vue.config.productionTip = false
Vue.prototype.$api = api;

new Vue({
  api,
  router,
  store,
  render: h => h(App)
}).$mount('#app')