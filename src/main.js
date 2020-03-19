//入口文件

import Vue from 'vue'
import app from './App.vue'

// 导入mui的样式
import './lib/mui/css/mui.css'
//按需导入mint-ui中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name , Header) 

var vm =new Vue({
  el:'#app',
  render:c => c(app)
})

//mui  不能使用 npm  下载   需要自己手动去git上下载现成的包  然后解压出来  然后手动拷贝到语法中