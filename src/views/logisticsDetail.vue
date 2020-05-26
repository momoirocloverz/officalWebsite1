<template>
    <div class="home ">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="物流详情" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu" />
        <section class="section-wrap">
            <div class="home-top fc-white tc">
                <h3 class="fs24">万才网 劳动力优化管理平台</h3>
                <p class="pt20 fs13">专注于电商快递物流行业 赋能企业降本增效</p>
                <router-link to="aboutus/contact" class="home-tel fc-white fs13">
                    联系我们
                </router-link>
            </div>
            <section>
                <ul class="tc">
                    <li v-if="tabIndex == 1">
                        <img src="../assets/images/wl_1.png" alt="">
                        <h5>中大型快递物流外包商</h5>
                        <p>该外包商是公司，规模较大，日常需要雇佣大量的人事、内勤、财务人员，负责员工考勤表审核、招聘、 薪资计算和发放等，大约薪资在 60000 元/月.</p>
                    </li>
                    <li v-if="tabIndex == 2">
                        <img src="../assets/images/wl_2.png" alt="">
                        <h5>小型快递物流外包商</h5>
                        <p>该外包商是个人，不能为客户单位提供符合要求的发票，需要挂靠别的企业解决发票问题。同时，该外包商带领大约 50人的团队作业，规模较小，但是日常需要雇佣一名人事财务综合人员，负责员工考勤表审核、招聘、 薪资计算和发放等，大约薪资在 8000 元/月。</p>
                    </li>
                    <li v-if="tabIndex == 3">
                        <img src="../assets/images/wl_3.png" alt="">
                        <h5>中大型电商快递物流公司</h5>
                        <p>该公司在快递物流行业较有经验，有较为成熟的管理团队，自有 500 名以上员工，但是鉴于全职员工缴纳社保成本较高，采用人力外包或者不缴纳社保的形式控制用工成本，存在较大的合规风险。另外，未缴纳社保员工的薪资发放，带来新的财税问题，需要财税方案解决。</p>
                    </li>
                </ul>
                <div class="wl-icon">
                    <i></i>
                </div>
                <div class="wl-info" v-if="tabIndex == 1">
                    <h3>入驻万才网后</h3>
                    <p>1、可以获得进项抵扣发票；</p>
                    <p>2、系统排班考勤、线上发薪，不需要雇佣任何一名人事财务人员，每月直接节省 60000 元的开支；</p>
                    <p>3、提供合法合规用工方案，为其规避风险提供建议；</p>
                    <p>4、新业态从业人员招聘使用万才经纪人 APP，快速扩充团队，按结果付费，降低招聘成本。</p>
                </div>
                <div class="wl-info" v-if="tabIndex == 2">
                    <h3>入驻万才网后</h3>
                    <p>1、可以为其提供客户单位需要的发票；</p>
                    <p>2、系统排班考勤、线上发薪，不需要雇佣任何一名人事财务人员，每月直接节省 8000 元的开支；</p>
                    <p>3、提供合法合规用工方案，为其规避风险提供建议；</p>
                    <p>4、新业态从业人员招聘使用万才经纪人 APP，快速扩充团队，按结果付费，降低招聘成本。</p>
                </div>
                <div class="wl-info" v-if="tabIndex == 3">
                    <h3>入驻万才网后</h3>
                    <p>1、合法合规用工方案，可为企业规避用工风险同时，无需为员工缴纳社保；；</p>
                    <p>2、财税统筹方案，能为企业提供 3%的增值税专用发票；</p>
                    <p>3、排班考勤、薪资结算系统化，可以大量缩小管理团队，节省管理成本。</p>
                </div>
            </section>
        </section>
        <Footer />
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import Footer from '../components/my-footer'
  // import FormCom from '../components/form'
  // import Slide from '../components/slide'

  export default {
        components:{Header,Nav,Footer},
        data() {
          return {
            showMenu:false,
            tabIndex:0,
          }
        },
        computed:{

        },
        watch:{
        },
        created(){
            let index = this.$route.query.index;
            if(index>0){
                this.tabIndex = this.$route.query.index;
                console.log(this.tabIndex)
            }
        },
        mounted(){

        },
        destroyed(){

        },
        methods:{
          isShowMenu: function (params) {
              this.showMenu = !this.showMenu;
          },
        }
  }
</script>

<style lang="scss">
    .home{
        .home-top{
            height: 4.2rem;
            background:url("../assets/images/top.png") no-repeat center center;
            background-size:100% 100%;
            h3{
                padding-top: 1.3rem;
            }
        }
        ul{
            background-color:#F8F9FA;
            padding:.8rem .75rem .5rem;
            li{
                img{
                    display: block;
                    width: 100%;
                    max-height:3.9rem;
                }
                h5{
                    font-size: .3rem;
                    font-weight:500;
                    padding:.3rem 0;
                }
                p{
                    font-size:.24rem;
                    color:#707070;
                    text-align:justify;
                }
            }
        }
        .wl-info{
            background-color:#F8F9FA;
            padding:.5rem .75rem .55rem;
            h3{
                text-align: center;
                font-size: .3rem;
                padding-bottom:.3rem;
            }
            p{
                font-size: .24rem;
                margin-bottom:.32rem;
                color: #3A3A3B;
            }
        }
        .wl-icon{
            height:1.32rem;
            display: flex;
            justify-content: center;
            align-items: center;
            i{
                display: inline-block;
                width:.5rem;
                height: .64rem;
                background:url("../assets/images/wu_icon.png") no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
    /* iphone4 */

    @media screen and (device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2){
        .home .home-top h3{
            font-size:18px;
        }
    }

    /* iphone5 */

    @media screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2){
        .home .home-top h3{
            font-size:18px;
        }
    }
</style>
