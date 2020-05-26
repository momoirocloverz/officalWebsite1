<template>
    <div class="pt-90">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="下载" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu"/>
        <div class="down-content tc">
            <div class="tab-down">
                <span :class="{'span-active':activeIndex === 0}" @click="tab(0)">万才企业版</span>
                <span :class="{'span-active':activeIndex === 1}" class="span-person" @click="tab(1)">万才个人版</span>
            </div>
            <div v-show="activeIndex === 0">
                <h2 class="fc-gray-2 fs32">万才企业版</h2>
                <p class="fc-gray-2 fs24 pt10 pl25 pr25">适用人群：劳动密集型企业、外包公司下属的班务经理、一线管理人员</p>
                <img class="img-big" src="../assets/images/company_ui.png" alt="">
            </div>
            <div v-show="activeIndex === 1">
                <h2 class="fc-gray-2 fs32">万才个人版</h2>
                <p class="fc-gray-2 fs24 pt10">适用人群：中国4亿新业态从业人员</p>
                <img class="img-big" src="../assets/images/person_ui.png" alt="">
            </div>

        </div>
        <section class="bottom-btn bg-white">
            <span class="dowm-btn" @click="goDown()">{{text}}</span>
        </section>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import Footer from '../components/my-footer'

  export default {
        components:{Header,Nav,Footer},
        data() {
          return {
              showMenu:false,
              androidLink:'',
              iosCusUrl:'https://itunes.apple.com/cn/app/id1510508452?mt=8',  //企业地址
              iosPersonUrl:'https://itunes.apple.com/cn/app/id1510565962?mt=8',//个人地址
              text:'下载万才个人版',
              type:'2', //1.企业app  2.零工app
              activeIndex:1, // 0 企业版 1 个人版
          }
        },
        computed:{

        },
        watch:{

        },
        created(){
        },
        mounted(){
            if(Number(this.$route.query.type) >= 0){
                this.activeIndex = Number(this.$route.query.type)
                this.tab(this.activeIndex)
            }
//            this.getAndriodLink()
        },
        destroyed(){

        },
        methods:{
            tab(index){
                this.activeIndex = index;
                if(index === 1){
                    this.text = '下载万才个人版';
                    this.type = '2'
                }else if(index === 0){
                    this.text = '下载万才企业版';
                    this.type = '1'
                }
//                this.getAndriodLink()
            },
            isShowMenu: function (params) {
                console.log(params);
                this.showMenu = !this.showMenu;
            },
            getAndriodLink(){
                this.$api.appDown(this.type).then(res=>{
                    let { data:layer1 } = res;
                    let { respCode,data } = layer1;
                    console.log(res)
                    if( respCode === 0 ){
//                        this.androidLink = data.downloadUrl;
                    }
                }).catch(err=>{
                    console.log('err',err);
                })
            },
            goDown: function () {
                const str = navigator.userAgent.toLowerCase();
                const ver = str.match(/cpu iphone os (.*?) like mac os/);
                let url;
                if(ver){ //ios跳转下载地址
                    if(this.activeIndex === 1){
                        url = this.iosPersonUrl
                    }else if(this.activeIndex === 0){
                        url = this.iosCusUrl
                    }
                }else{ //安卓
                    if( this.type  == '2' ){
                        this.androidLink = 'http://www.10000rc.com/2.0/apk/person-home-release_100_jiagu_sign.apk';
                    }
                    if(  this.type  == '1'  ){
                        this.androidLink = 'http://www.10000rc.com/2.0/apk/customer-home-release_100_jiagu_sign.apk';
                    }
                    url = this.androidLink;
                }
                window.open(url);
            }
        }
  }
</script>

<style lang="scss" scoped>
    .down-content{
        padding:.8rem .45rem 1.2rem;

        h2{
        }
        p{
        }
        img{
            display: block;
            margin: auto;
        }
        .img-small{
            height: 2.14rem;
            width: 2.14rem;
        }
        .img-big{
            margin-top: .8rem;
            width:4rem;
        }
    }
    .bottom-btn{
        .dowm-btn{
            background-color:#3377FF;
            color: #fff;
            width:100%;
            height:1.2rem;
            /*border-radius:.06rem;*/
        }
    }
</style>
