<template>
    <div class="shareAppCon">
        <div class="hintInfoCon" v-show="showHead">点击右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装。</div>
        <div>
            <div class="AppInfoCon">
                <img :src="imgSrc">
                <div class="appName">蓝灵王</div>
                <div class="appDescribe">让招人、排班、人员管理不再烦琐！</div>
                <div class="appDownloadBtn" @click="downloadApp">APP下载</div>
            </div>
        </div>
      <!--<div class="share-tip" v-if="shareShow">
          <div class="share-img"></div>
          <div class="share-text">
              <p>请点击右上角</p>
              <p>选择”发送给朋友“，将佳薪宝</p>
              <p>分享给朋友</p>
            </div>
          <div class="page-bottom">
            <div class="bottom-btn"  @click="handleHideShare">关闭</div>
          </div>
    </div>-->
        </div>
</template>
<script>
    //import wx from 'weixin-js-sdk';
    export default {
        data(){
            return {
                shareShow:false,
                showHead:false,
                imgSrc:require('@/assets/images/llw.png'),
                androidLink:'',
            }
        },
        mounted(){
            // this.getEnvironment();
             this.getAndriodLink();
            // this.initWeixin();
            // this.getSource();
        },
        methods:{  
            // getSource(){
            //     if( this.$route.query.showMask ){
            //         this.shareShow = true;
            //     }else{
            //         this.shareShow = false;
            //     }
            // },
            // handleHideShare(){
            //       this.shareShow = false;
            //   },
//             initWeixin(){    
//                 let shareUrl = this.$baseURL+ `wechat/index.html#/shareApp`;                  
//                 let realName = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')).realName : '';
//                 let url = location.href.split('#')[0];
//                 let shareImg = 'http://test.api.10000rc.com/jxb-icon.png';
//                 let data = {
//                     url: url
//                 };
//                 this.$api.shareSDK(data).then(res => {
//                     let {data:layer1} = res;
//                     let { data,respCode } = layer1;
//                     if (respCode == 0) {
//                         wx.config({
//                             debug: false, 
//                             appId: data.appId,
//                             timestamp: data.timestamp, 
//                             nonceStr: data.nonceStr, 
//                             signature: data.signature, 
//                             jsApiList: ['onMenuShareTimeline',
//                                 'onMenuShareAppMessage',
//                                 'onMenuShareQQ',
//                                 'onMenuShareWeibo',
//                                 'updateAppMessageShareData',
//                                 'updateTimelineShareData']
//                         });
//                         wx.error(function (res) {
//                             console.log('微信初始化失败')
//                         });
//                         wx.ready(function () {
//                             let cfg = {
//                                 "imgUrl": shareImg,
//                                 "desc": "能赚钱的APP，让你薪上加薪！",
//                                 "title": realName+'向你推荐一个能赚钱的APP，一起加入吧',
// //                                "link": location.href,
//                                 "link": shareUrl,
//                                 "success": function () {
//                                     console.log('分享成功')
//                                 },
//                                 'cancel': function () {
//                                     console.log('用户取消了分享')
//                                 }
//                             }
//                             wx.onMenuShareAppMessage(cfg);
//                             wx.onMenuShareTimeline(cfg);
//                             wx.onMenuShareQQ(cfg);
//                             wx.updateAppMessageShareData(cfg);
//                             wx.updateTimelineShareData(cfg);
//                         });
//                     }else {
//                         console.log('获取加密失败');
//                     }
//                 }).catch(err => {
//                     console.log(err)
//                 })
//             },
            getAndriodLink(){
                this.$api.appStore().then(res=>{
                    let { data:layer1 } = res;
                    let { respCode,data } = layer1;
                    if( respCode === 0 ){
                        this.androidLink = data.downloadUrl; 
                    }
                }).catch(err=>{
                   console.log('err',err); 
                })
            },
            // getEnvironment(){
            //     var ua = window.navigator.userAgent.toLowerCase();
            //     if (String(ua.match(/MicroMessenger/i)) === 'micromessenger') {
            //         this.showHead = true;  
            //         return 2;
            //     } else {
            //         this.showHead = false;
            //         return 1;
            //     }
            // },
            downloadApp(){
                const str = navigator.userAgent.toLowerCase();
                const ver = str.match(/cpu iphone os (.*?) like mac os/);
                let url;
                if(ver){ //ios跳转下载地址
                    url = 'https://itunes.apple.com/cn/app/id1453514888?mt=8';
                }else{ //安卓
                    url = this.androidLink;
                }
                window.open(url);
            },
        }
    }
</script>
<style lang="scss" scoped>
    $design_width: 375;
    @function convertToVw($size: 0) {
      @return (($size * 100 / $design_width) + vw);
    }
    
        .share-tip {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.75);
        z-index: 20;
}
// .share-img {
//   position: absolute;
//   width: convertToVw(100);
//   height: convertToVw(100);
//   top: convertToVw(15);
//   right: convertToVw(18);
//   background-image: url(../../assets/img/share.png);
//   background-size: cover;
// }
.share-text {
  position: relative;
  padding-top: convertToVw(100);
  font-size: convertToVw(18);
  line-height: convertToVw(30);
  color: #b9babd;
  text-align: center;
}
.page-bottom {
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  height: convertToVw(68);
  bottom: 0;
  left: 0;
  padding: convertToVw(10) convertToVw(18);
  background-color: #fff;
}
.bottom-btn {
  height: convertToVw(48);
  font-size: convertToVw(17);
  line-height: convertToVw(48);
  border-radius: convertToVw(5);
  color: #fff;
  background-color: #ea441a;
  text-align: center;
}
    
    .shareAppCon {
        box-sizing: border-box;
        background-color: #fff;
        .hintInfoCon {
            position: fixed;
            top: 0;
            left: 0;
            padding-left: convertToVw(15);
            padding-right: convertToVw(15);
            padding-top: convertToVw(14);
            background-color: #3296FA;
            box-sizing: border-box;
            height:convertToVw(72);
            color: #fff;
            font-size: convertToVw(14);
        }
    }
    .AppInfoCon {   
        height: 100vh;
        box-sizing: border-box;
        padding-top: convertToVw(100);
        img {
            display: block;
            margin: 0 auto;
            width: convertToVw(180);
            height: convertToVw(180);
        }
        .appName {
            margin-top: convertToVw(8);
            font-size: convertToVw(24);
            height: convertToVw(24);
            line-height: convertToVw(24);
            text-align: center;
            margin-bottom: convertToVw(20);
            color: #4E4E51;
            font-weight: 400;
        }
        .appDescribe {
            color: #4B4D52;
            font-size: convertToVw(16);
            height: convertToVw(16);
            line-height: convertToVw(16);
            text-align: center;
            margin-bottom: convertToVw(47);
        }
        .appDownloadBtn {
            width: convertToVw(140);
            margin: 0 auto;
            color: #fff;
            border-radius: 3px;
            margin-top: convertToVw(8);
            font-size: convertToVw(16);
            height: convertToVw(48);
            line-height: convertToVw(48);
            text-align: center;
            background-color: #E95A34;
        }
    }
</style>