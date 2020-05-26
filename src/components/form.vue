<template>
    <section>
        <div class="home-form">
            <span class="fs12">公司名称</span>
            <div class="mb40 pt10">
                <input type="text" v-model="companyName" maxlength="20">
            </div>
            <span class="fs12">预约手机号码</span>
            <div class="mb40 pt10">
                <input type="text" v-model="mobile" maxlength="11">
            </div>
            <span class="fs12">预约人姓名</span>
            <div class="mb40 pt10">
                <input type="text" v-model="name" maxlength="10">
            </div>
            <span class="fs12">行业</span>
            <div class="mb40 pt10" style="position: relative" @click="selectSub">
                <input type="text" v-model="industry" readonly> <img class="img-xia" src="../assets/images/xia.png" alt="">
            </div>
            <span class="fs12">请简单描述贵公司的需求(选填)</span>
            <div class="mb40 pt10">
                <textarea type="text" v-model="desc" maxlength="200"></textarea>
            </div>
            <!--<span class="fs12">预约需求</span>-->
            <!--<div class="pos-r pt10" @click="selectSub">-->
                <!--<input class="fs12" type="text" v-model="system" readonly>-->
                <!--<i class="icon-jt jt-r"></i>-->
            <!--</div>-->
            <div class="btn fc-white mt50" @click="submit">
                立即申请
            </div>
        </div>
        <mt-popup v-model="systemVisible" position="bottom" class="mint-popup">
            <mt-picker :slots="sysList" :visible-item-count="5" :show-toolbar="true" ref="sysPicker" @touchmove.prevent>
                <div @click="sysConfirm()" class="sure">确认</div>
            </mt-picker>
        </mt-popup>
    </section>
</template>

<script>
    import Vue from 'vue'
    // <li data-value="1">灵活用工</li>
    //             <li data-value="2">财务统筹</li>
    //             <li data-value="3">商保服务</li>
    //             <li data-value="4">社保合规用工</li>
    //             <li data-value="5">新业态从业人员管理优化</li>
    export default {
        props: {},
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
            }
        },
        created() {
        },
        mounted() {
            this.getIndustry()
        },
        destroyed() {

        },
        methods: {//查看对应规模分析价格
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
            changeBottom: function (type) {
                console.log(type)
                this.$emit('changeBottom', type)
            },
            changeBottomBlur: function (type) {
                console.log(type)
                this.$emit('changeBottomBlur', type)
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
                this.$api.save(params).then((res) => {
                    if (res.data.respCode == 0) {
                        this.$messagebox('提交成功！');
                        console.log('12');
                        _this.name = '';
                        _this.mobile = '';
                        _this.industry = '';
                        _this.companyName = '';
                        _this.desc = '';
                        _this.$router.push({name:'home'})
                    } else {
                        this.$toast(res.data.errorMsg);
                    }
                }).catch(error => {
                    // this.$messagebox(error)
                }).finally(function () {
                    _this.request = false;
                })
            }
        }
    }
</script>

<style lang="scss">
    .home-form {
        padding: 1rem .65rem;

        input {
            display: block;
            background-color: #F5F6F8;
            height: .6rem;
            width: calc(100% - 2px);
            line-height: .6rem;
            text-indent: .3rem;
            border: 1px solid #D9D9D9;
        }
        textarea{
            display: block;
            background-color: #F5F6F8;
            height:3rem;
            line-height: .6rem;
            text-indent: .3rem;
            width: calc(100% - 2px);
            border: 1px solid #D9D9D9;
        }
        .jt-r {
            position: absolute;
            right: .15rem;
            top: calc(50% + .05rem);
            transform: translateY(-50%);
        }
        .img-xia{
            position: absolute;
            right:.2rem;
            top:.2rem;
            width: .45rem;
            height: .45rem;
        }
    }
</style>
