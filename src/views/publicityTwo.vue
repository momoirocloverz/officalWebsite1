<template>
    <div class="g-publicity">
        <img class="u-publicity-img" src="../assets/images/publicity2.png"/>
        <div class="u-publicity-form">
            <div class="mb40">
                <input class="u-input" type="text" v-model="companyName" placeholder="公司名称">
            </div>
            <div class="mb40">
                <input class="u-input" type="text" v-model="mobile" placeholder="预约手机号码">
            </div>
            <div class="mb40">
                <input class="u-input" type="text" v-model="name" placeholder="预约人姓名">
            </div>
            <div class="mb40" style="position: relative" @click="selectSub">
                <input class="u-input" type="text" placeholder="请选择行业" v-model="industry" readonly>
            </div>
            <div class="mb40">
                <textarea type="text" placeholder="请简单描述贵公司的需求(选填)" v-model="desc" maxlength="200"></textarea>
            </div>
            <div class="u-publicity-btn" @click="submit">

            </div>
        </div>
        <mt-popup v-model="systemVisible" position="bottom" class="mint-popup">
            <mt-picker :slots="sysList" :visible-item-count="5" :show-toolbar="true" ref="sysPicker" @touchmove.prevent>
                <div @click="sysConfirm()" class="sure">确认</div>
            </mt-picker>
        </mt-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import wx from 'weixin-js-sdk'

    export default {
        data() {
            return {
                system: '',
                demand: '1',
                name: '',
                companyName:'',
                industry:'',
                mobile: '',
                desc:'',
                sysList: [
                    {
                        flex: 1,
                        values: [],
                        className: "slot1",
                        textAlign: "center",
                    },
                ],
                systemVisible: false,
                showBac: false,
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
            this.shareWechat()
            this.getIndustry()
        },
        destroyed() {

        },
        methods: {
            getIndustry(){
                this.$api.getIndustry({
                    code:'industry',
                    level:'',
                    // value:1
                }).then(res => {
                    if(res.data.respCode === 0){
                        let list = Array.from(res.data.data)
                        this.sysList[0].values = list.map(i => i.dicName)
                        console.log(this.sysList)
                    }

                })
            },
            sysConfirm: function () {
                let _this = this;
                let value = _this.$refs.sysPicker.getValues()[0];
                _this.industry = value;
                _this.systemVisible = false;
            },
            selectSub: function () {
                this.systemVisible = true;
            },
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
                                "desc": "为国内新业态从业人员用工市场提供多类型解决方案，限时限量免费！",//摘要,如果分享到朋友圈的话，不显示摘要。
                                "title": '万才网，您身边的人力资源管理专家',//分享卡片标题
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
                if (!_this.companyName) {
                    this.$toast('公司名称不能为空!')
                    return;
                }
                if (!_this.name) {
                    this.$toast('姓名不能为空')
                    return;
                }
                if (!_this.mobile) {
                    this.$toast('手机号码不能为空')
                    return;
                }
                if (!mobileReg.test(_this.mobile)) {
                    this.$toast('手机号码格式不正确')
                    return;
                }
                if (!_this.industry) {
                    this.$toast('行业不能为空')
                    return;
                }
                if (_this.request) {
                    return
                }
                _this.request = true;

                let params = {
                    name: _this.name.trim(),
                    mobile: _this.mobile.trim(),
                    industry:_this.industry,
                    source:'微信H5',
                    company:_this.companyName,
                    description:_this.desc,
                };
                const html = `<div style="text-align:center;">
              <div  style="font-size:20px;color:#000">你的资料已成功提交</div>
               <div style="font-size:16px;">工作人员会尽快与您取得联系</div>
            </div>`
                this.$api.save(params).then((res) => {
                    if (res.data.respCode == 0) {
                        this.$messagebox(
                            {
                                message: html,
                                confirmButtonClass: 'pub-button'
                            }
                        );
                        _this.name = '';
                        _this.companyName = '';
                        _this.mobile = '';
                        _this.industry = '';
                        _this.desc = '';
                    } else {
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

    .u-publicity-form {
        position: absolute;
        top: 7.5rem;
        left: 1rem;

        .u-input {
            width: 5.5rem;
            line-height: .75rem;
            font-size:.32rem;
            background-color: transparent;
            border: none;
        }

        .u-publicity-btn {
            width: 5.5rem;
            height: 0.8rem;
            margin-top: 0.65rem;
        }
        textarea{
            display: block;
            background-color:transparent;
            height:1.8rem;
            box-sizing: border-box;
            overflow-y: hidden;
            padding-top:.1rem;
            padding-bottom:.1rem;
            line-height:1.5;
            font-size:.32rem;
            /*text-indent: .3rem;*/
            outline: none;
            border: none;
            width: calc(100% - 2px);
            /*border: 1px solid #D9D9D9;*/
        }
    }

    .u-first-btn {
        position: absolute;
        width: 6.5rem;
        height: 0.85rem;
        top: 11.98rem;
        left: 0.6rem;
    }
</style>
