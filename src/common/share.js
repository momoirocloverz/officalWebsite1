import api from "../api/api"; //分享api
import wx from 'weixin-js-sdk'

export const shareTitle = '测试';
export const shareUrl = '测试连接';
export const shareImg = '测试图片';
export const shareDesc = '测试详情';

/**
 *分享
 * @param _this
 * @param shareTitle 标题
 * @param shareUrl 链接
 * @param shareImg 图片
 * @param shareDesc 描述
 */
export const commonShare = (_this, shareTitle, shareUrl, shareImg, shareDesc) => {
  console.log('dfsfrdgstg')
  // let url = window.location.href;
  // let url = window.location.href.split('#')[0]
  // alert(window.location.href.split('#')[0])
  let url = 'http://test.api.10000rc.com/wechat/index.html/customerReport/401/1'
  let url2 = 'http://test.api.10000rc.com/wechat/index.html#/userregister'
  let data = {
    url: url
  };
  api.shareSDK(data).then(res => {
    console.log(res)
    if (res.data.respCode == 0) {
      let data = res.data.data;
      console.log(data)
      wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature, // 必填，签名，见附录1
        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });
      wx.ready(function () {
        wx.updateAppMessageShareData({
          title: shareTitle, // 分享标题
          desc: 'shareDesc', // 分享描述
          link: url2, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareImg, // 分享图标
          success: function () {
            // 用户确认分享后执行的回调函数
            _this.$toast.text('分享成功！！！');
          },
        });
        wx.updateTimelineShareData({
          title: shareTitle, // 分享标题
          link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: shareImg, // 分享图标
          type: "", // 分享类型,music、video或link，不填默认为link
          success: function () {
            // 用户确认分享后执行的回调函数
            _this.$toast.text('分享成功！！！');
          },
        });
      });
    }
  }).catch(err => {
    console.log(err)
  })
};