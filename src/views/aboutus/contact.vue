<template>
    <div class="">
        <!--<Header @showEvent = 'isShowMenu()' ref="mychild" title="联系我们" />-->
        <!--<Nav @showList ="isShowMenu()" v-show = "showMenu"/>-->
        <!--<div class="home-top fc-white tc">-->
            <!--<h3 class="">-联系方式-</h3>-->
            <!--<p class="pt20 fs14 lh18">万才科技（杭州）有限公司</p>-->
        <!--</div>-->
        <div class="cont-content">
            <!--<h4 class="lh18 tc">如果您有业务咨询、产品售后、渠道合作方面的 需求可以通过以下方式联系我们。</h4>-->
            <div class="cont-box">
                <h5 class="tc">联系我们</h5>
            </div>
            <div class="cont-icon">
                <div class="icon-bg"></div>
                <div class="c-icon-r">
                    <a href="tel:15158135511">151 5813 5511</a>
                </div>
            </div>
            <div class="cont-icon">
                <div class="icon-bg icon-bg-2"></div>
                <div class="c-icon-r">
                    maybe@10000rc.com
                </div>
            </div>
            <div class="cont-icon">
                <div class="icon-bg icon-bg-3"></div>
                <div class="c-icon-r">
                    万才经理人俱乐部
                </div>
            </div>
            <div class="cont-icon">
                <div class="icon-bg icon-bg-4"></div>
                <div class="c-icon-r">
                    杭州市高德置地广场二期2号楼2单元20层
                </div>
            </div>
        </div>
        <!--<Footer/>-->
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../../components/my-header'
  import Nav from '../../components/menu'
  import Footer from '../../components/my-footer'


  export default {
      components:{Header,Nav,Footer},
      data() {
          return {
              showMenu:false,
              mobile:"153 7258 8833",
          }
      },
        computed:{

        },
        watch:{

        },
        created(){

        },
        mounted(){
            // this.getMobile()
        },
        destroyed(){

        },
        methods:{
            getMobile() {
                let _this = this;
                this.$api.getMobile()
                    .then(res => {
                        _this.mobile = res.data.data || '153 7258 8833'
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            isShowMenu: function (params) {
                console.log(params);
                this.showMenu = !this.showMenu;
            },
        }
  }
</script>

<style lang="scss" scoped>
    .home-top{
        height: 4.2rem;
        padding:0 .75rem;
        background:url("../../assets/images/con_bg.png") no-repeat center center;
        background-size:100% 100%;
        h3{
            padding-top: 1.7rem;
            font-size:.48rem;
        }
    }
    .cont-content{
        padding:1.2rem .8rem;
        h4{
            color:#3A3A3B;
            font-size:.3rem;
            padding: 0 .2rem;
        }
        .cont-box{
            color:#333333;
            h5{
                padding-bottom: .8rem;
                font-size:.36rem;
            }
            p{
                font-size: .26rem;
            }
        }
        .cont-icon{
            display: flex;
            flex-direction:row;
            margin-top:.4rem;
            .icon-bg{
                display: flex;
                width:.6rem;
                height:.6rem;
                background:url("../../assets/images/m_telephone_dark.png") no-repeat center center;
                background-size:98%;
            }
            .icon-bg-2{
                background:url("../../assets/images/m_email_dark.png") no-repeat center center;
                background-size:98%;
            }
            .icon-bg-3{
                background:url("../../assets/images/m_wechat_dark.png") no-repeat center center;
                background-size:98%;
            }
            .icon-bg-4{
                background:url("../../assets/images/m_location_dark.png") no-repeat center center;
                background-size:98%;
            }
            .c-icon-r{
                display: flex;
                /*width:calc(100% - 1.95rem);*/
                border-left:none;
                flex-direction: column;
                justify-content: center;
                padding-left: .2rem;
                padding-top:0.05rem;
                /*align-content: flex-start;*/
                /*align-items:center;*/
                span{
                    display: flex;
                    color:#333333;
                    font-size:.32rem;
                }
                code{
                    display: flex;
                    color: #4E4E51;
                    font-size:.32rem;
                }
            }
        }
    }
</style>
