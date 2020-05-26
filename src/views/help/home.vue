<template>
    <div class="infor-home">
        <van-nav-bar
                title="帮助中心"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <div class="help-content">
            <div class="help-title flex flex-align flex-item">
                <h4 class="fs36">问题分类</h4>
                <span class="fs24 co-999 flex-inline flex-center flex-item" @click="go('/help/question')">全部分类<van-icon name="arrow" /></span>
            </div>
            <ul class="flex flex-left align-item-center flex-row flex-wrap pt10">
                <li class="range-li" v-for="(item,index) in rangeList" :key="index">
                    <div class="range-item" @click="goItem(item,1)">
                        {{item.rangeName}}
                    </div>
                </li>
            </ul>
            <div class="help-title flex flex-align flex-item pt40">
                <h4 class="fs36">热点问题</h4>
            </div>
            <van-list ref="vList"
                      v-model="loading"
                      :finished="finished"
                      :immediate-check="false"
                      :offset="offsetNum"
                      :finished-text="finishedText"
                      @load="onLoad">
                <van-cell-group class="help-cell-list">
                    <van-cell v-for="(item,index) in list" :key="index" class="co-999" :title="item.title" icon="location-huo"  is-link/>
                </van-cell-group>
            </van-list>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar,Toast, Search, Icon, List, Cell, CellGroup} from 'vant';
    Vue.use(NavBar,Toast).use(Search).use(Icon).use(List).use(Cell).use(CellGroup);

    export default {
        data() {
            return {
                value:'',
                pageNum:1,
                loading: false,
                request: false,
                finished: false,
                rangeStyle:false,
                offsetNum: 1,
                finishedText: '没有更多了',
                rangeList:[],
                list:[],
            }
        },
        mounted() {
            localStorage.setItem('h5Token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpblNpZGUiOjIsInVzZXJUeXBlIjoxLCJleHAiOjE1ODk1OTQxNDUsImlhdCI6MTU4ODk4OTM0NSwidmVyc2lvbiI6IjAiLCJ1c2VySWQiOjF9.Q4iw-gono6uvSFyGYjf6T5swpQ1ahMx7IOOGhrJfvNo');
            this.getRange()
            this.getList()
            this.nativeEvent()
        },
        methods: {
            nativeEvent(){
                window.WebViewJavascriptBridge.callHandler(
                    'h5Token'
                    , function(responseData) {
                        alert(responseData)
                    }
                );
            },
            onClickLeft() {
                window.WebViewJavascriptBridge.callHandler(
                    'h5Close'
                    , function(responseData) {
                        alert(responseData)
                    }
                );
            },
            go(url){
                this.$router.push({
                    path:url,
                    query:{}
                })
            },
            getRange(){
                this.$api.helpRangeList({
                    pageNum:this.pageNum,
                    pageSize:20,
                }).then(res => {
                    if(res.data.respCode === 0){
                        if(res.data.data.list && res.data.data.list.length > 0){
                            let len = Array.from(res.data.data.list).length;
                            if(len > 6){
                                res.data.data.list.length = 6
                            }
                            this.rangeList = res.data.data.list
                        }
                    }
                }).catch(err=>{
                    console.log(err)
                })
            },
            getList(){
                this.$api.helpQuestionList({
                    position:1
                }).then(res =>{
                    if(res.data.respCode === 0){
                        if(res.data.data.list && res.data.data.list.length > 0){
                            let len = Array.from(res.data.data.list).length;
                            this.list = res.data.data.list
                        }
                    }
                }).catch(err=>{

                }).finally(() =>{

                })
            },
            goItem(item){

            },
            onLoad() {
                let _this = this;
                if (_this.request) {
                    return
                }
                _this.request = true;
                // 异步更新数据
                _this.finishedText = '加载中...';
                setTimeout(async () => {
                    await _this.getList();
                    _this.request = false;
                    // 加载状态结束
                    // 数据全部加载完成
                }, 1000);
            },
        }
    }
</script>

<style lang="scss">
    .infor-home {
        .van-icon-location-huo{
            background: url("../../assets/images/fire.svg") no-repeat center center;
            background-size:100% 100%;
        }
        .range-li{
            height: 1.28rem;
            width: 2.13rem;
            background-color:rgba(65,131,255,0.05);
            display: flex;
            padding: .2rem .36rem;
            box-sizing: border-box;
            justify-content: center;
            align-items: center;
            text-align: center;
            margin-top: .24rem;
            border-radius:0.08rem;
            margin-right:.22rem;
            .range-item{
                font-size: .28rem;
                color: #4183FF;
            }
        }
        .range-li:nth-child(3n){
            margin-right:0;
        }
        .van-nav-bar{
            height:.88rem;
            line-height:.88rem;
        }
        .van-search{
            padding:.14rem .24rem;
            .van-search__content{
                border-radius: .36rem;
                padding-left:.32rem;
                background-color:#F5F5F5;
            }
           .van-cell{
                padding:0;
               height: .72rem;
               line-height:.72rem;
            }
        }
        .van-nav-bar__left{
            font-size:20px;
        }
        .van-nav-bar .van-icon{
            color:#333333;
        }
        .help-content{
            position: fixed;
            left:0;
            right:0;
            top:1.88rem;
            bottom:0;
            z-index: 10;
            padding:.6rem .32rem .32rem;
        }
    }
</style>