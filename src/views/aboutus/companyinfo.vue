<template>
    <div class="pt-90">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="公司介绍" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu"/>
        <div class="home-top fc-white tc">
            <!--<h3 class="fs36">公司介绍</h3>-->
            <!--<p class="pt20 fs24 lh18">万才科技（杭州）有限公司</p>-->
        </div>
        <div class="company-content">
            <h3 class="tc fs36">公司介绍</h3>
            <p class="pt40 pb40">万才网（万才科技（杭州）有限公司）创立于2015年，是国内先进的新业态从业人员用工交易管理平台，通过互联网信息技术的不断创新和运用，为国内新业态从业人员用工市场的灵活用工、合规用工、财税统筹、优化管理等痛点提供多类型解决方案，并结合用户群体实际情况，提供更细化、更专业的服务，我们希望用专注的精神和高品质的服务成为国内第一新业态从业人员众创众包平台。</p>
            <video id="videoPlay" poster="../../assets/images/m_video_cover.png" controls loop="loop" x-webkit-airplay="true" webkit-playsinline="true">
                <source src="../../assets/video/1080p.mp4" type="video/mp4">
            </video>
            <!--<img src="../../assets/images/company_b2.png" alt="">-->
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
          }
      },
        computed:{

        },
        watch:{

        },
        created(){
        },
        mounted(){

        },
        destroyed(){

        },
        methods:{
            isShowMenu: function (params) {
                console.log(params);
                this.showMenu = !this.showMenu;
            },
        }
  }
</script>

<style lang="scss" scoped>
    .home-top{
        height: 4rem;
        padding:0 .75rem;
        background:url("../../assets/images/m_about_banner.png") no-repeat center center;
        background-size:100% 100%;
        h3{
            padding-top: 1.7rem;
            font-size:.48rem;
        }
    }
    #videoPlay{
        display: flex;
        width: 100%;
    }
    .company-content{
        color:#333;
        padding:.65rem .8rem 0;
        img{
            display: block;
            width:100%;
        }
        p{
            padding-top:.45rem;
            color:#666;
            font-size:.28rem;
            text-align: justify;
        }
    }
</style>
