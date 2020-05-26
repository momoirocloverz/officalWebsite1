import axios from 'axios';
require('es6-promise').polyfill();
import {
  Toast,
  MessageBox
} from 'mint-ui'
/* eslint-disable */

let url = 'http://test.api.10000rc.com';
if (process.env.NODE_ENV == 'production') {
  if (process.env.VUE_APP_TITLE == 'pre') {
    url = 'http://pre.api.10000rc.com/pre';
  } else if (process.env.VUE_APP_TITLE == 'test') {
    url = 'http://test.api.10000rc.com';
  } else {
    url = 'http://www.10000rc.com/2.0';
  }
}

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/json';        //配置请求头
axios.defaults.baseURL = url;   //配置接口地址
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  let h5Token = localStorage.getItem('h5Token');
  //在发送请求之前做某件事
  if( h5Token ){
    config.headers['Authorization'] = `Bearer ${h5Token}`;
  }
  return config;
},(error) =>{
  console.log('错误的传参');
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常');
  console.log(error);
  Dialog.alert({message:error});
  return Promise.reject(error);
});
//返回一个Promise(发送post请求)
export function httpPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
        .then(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
  })
}
////返回一个Promise(发送get请求)
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
        .then(response => {
          resolve(response)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
  })
}
export function AxiosGet(url,{params,headers}){
  return axios.get(url,{
    params,
    headers
  })
}
export default {
  httpPost,
  httpGet,
  
}