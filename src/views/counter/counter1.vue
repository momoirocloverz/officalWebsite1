<template>
    <div class="g-publicity">
        <img class="u-publicity-img" src="../../assets/images/counter1.jpg"/>
        <CounterForm class="u-counter-form"/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import CounterForm from './counterForm.vue';
  import wx from 'weixin-js-sdk'

  export default {
        components:{ CounterForm },
        data() {
          return {
            name:'',
            mobile:'',
            demand: 4,
            showBac: false,
          }
        },
        computed:{

        },
        watch:{

        },
        created(){
          const {isBoss}=this.$route.query
          if(isBoss=='1'){
              this.showBac = true;
          }else {
             this.showBac = false;
          }
        },
        mounted(){
          this.shareWechat();
        },
        destroyed(){

        },
        methods:{
          shareWechat: function () {
                let url = location.href.split('#')[0];
                let shareImg = 'http://test.api.10000rc.com/share_logo.png';
                let data = {
                    url: url
                };
                this.$api.shareSDK(data).then(res => {
                    console.log(res)
                    if (res.data.respCode == 0) {
                        let data = res.data.data;
                        wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: data.appId, // 必填，公众号的唯一标识
                            timestamp: data.timestamp, // 必填，生成签名的时间戳
                            nonceStr: data.nonceStr, // 必填，生成签名的随机串
                            signature: data.signature, // 必填，签名，见附录1
                            jsApiList: ['onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareWeibo']
                        });
                        wx.error(function (res) {
                            console.log('微信初始化失败')
                        });
                        wx.ready(function () {
                            let cfg = {
                                "imgUrl": shareImg,//分享图，默认当相对路径处理，所以使用绝对路径的的话，“http://”协议前缀必须在。
                                "desc": "社保入税后，企业成本剧增，您的企业需要多缴纳多少费用呢？",//摘要,如果分享到朋友圈的话，不显示摘要。
                                "title": '万才网社保计算机',//分享卡片标题
                                "link": location.href,//分享出去后的链接，这里可以将链接设置为另一个页面。
                                "success": function () {
                                    console.log('分享成功')
                                },
                                'cancel': function () {
                                    console.log('用户取消了分享')
                                }
                            }

                            wx.onMenuShareAppMessage(cfg);
                            wx.onMenuShareTimeline(cfg);
                            wx.onMenuShareQQ(cfg);
                        });
                    }else {
                        console.log('分享失败')
                    }
                }).catch(err => {
                    console.log(err)
                })
            },
          submit: function () {
            let _this = this;
            let mobileReg = /^1\d{10}$/;
            if(!_this.name){
                this.$toast('请填写姓名')
                return;
            }
            if(!_this.mobile || !mobileReg.test(_this.mobile)){
                this.$toast('请输入有效的电话号')
                return;
            }
            if(_this.request){return}
            _this.request = true;

            let params = {
                name:_this.name.trim(),
                mobile:_this.mobile.trim(),
                demand: _this.demand
            };
            const html = `<div style="text-align:center;">
              <div  style="font-size:20px;color:#000">你的资料已成功提交</div>
               <div style="font-size:16px;">工作人员会尽快与您取得联系</div>
            </div>`
            this.$api.saveOld(params).then((res) => {
                if(res.data.respCode == 0){
                    this.$messagebox(
                      {
                        message: html,
                        confirmButtonClass:'pub-button'
                      }
                      );
                    _this.name = '';
                    _this.mobile = '';
                    _this.demand = '4';
                }else{
                    this.$messagebox(res.data.errorMsg);
                }
            }).catch(error => {
                this.$messagebox(error)
            }).finally(function () {
                _this.request = false;
            })
        }
        }
  }
</script>

<style scoped lang="scss">
.g-publicity {
  .u-publicity-img {
    width: 100%;
  }
  
}

.u-counter-form {
  position: absolute;
  width:100%;
  top:4.2rem;
  left: 0.6rem;
}

</style>
