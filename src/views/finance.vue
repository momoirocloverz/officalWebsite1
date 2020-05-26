<template>
    <div class="finance">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="客户案例" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu"/>
        <div class="home-top fc-white tc">
            <!--<h3 class="fs24">用工财税方案</h3>-->
            <!--<p class="pt20 fs13 lh18">万才网创新合法合规用工、财税优化解决方案</p>-->
            <!--<p class="fs13 lh18">是您身边合规用工、财税统筹的专家</p>-->
            <div class="btn-center" @click="goToPre"></div>
        </div>
        <!--<div class="f-con-1 tc">-->
            <!--<h4 class="fc-black">合法合规用工方案</h4>-->
            <!--<p class="fc-gray-2 lh18">万才网平台的合法合规用工方案，是基于人力资源、项目外包服务等用工关系研究和国家政策解读，通过鼓励员工个人响应大众创业成为个体经营者，并经过万才网平台大数据处理，与企业形成商事合作关系，以规避企业用工风险，如缴纳社保、劳动合同签订等.</p>-->
            <!--<img src="../assets/images/f_bg_1.png" alt="">-->
        <!--</div>-->
        <!--<div class="f-con-2 tc">-->
            <!--<h4 class="fc-black">财税统筹方案</h4>-->
            <!--<p class="fc-gray-2 lh18">万才网平台的财税统筹方案，是通过员工从个人到个体经营者身份的转变，万才网平台与企业达成合作，由万才网为员工以个体经营者开具相关内容的发票，经由万才网平台转化，向企业提供符合企业经营要求开票内容的3%增值税专用发票。因此，企业可将员工薪资支出及相关费用作为进项抵扣，实现真正意义上的财税优化。</p>-->
            <!--<img src="../assets/images/f_bg_2.png" alt="">-->
        <!--</div>-->
        <div class="ul-list">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="title-name co-333 fs29 pb20">
                        <img v-if="item.icon" class="img-icon" :src="item.icon" alt="">
                        <span v-else class="img-icon">{{item.iconText}}</span>
                        {{item.name}}
                    </div>
                    <p class="co-666 fs24">{{item.desc}}</p>
                    <div class="img-list">
                        <div v-for="(src,srcIndex) in item.imgSrc" :key="srcIndex">
                            <img :src="src" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <experience></experience>
        <Footer/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import Footer from '../components/my-footer'
  import experience from '@/components/experience'
  export default {
        components:{Header,Nav,Footer,experience},
        data() {
          return {
              showMenu:false,
              list:[
                  {
                      icon:require('@/assets/images/youzheng_logo.png'),
                      name:'中国邮政',
                      desc:'中国邮政杭州邮件处理中心是中国邮政浙江省分公司下面的分支机构，主营速递物流类业务，为社会公众提供信函、包裹、快递等服务。',
                      imgSrc:[require('@/assets/images/company/wc1.jpg'),
                          require('@/assets/images/company/wc2.jpg'),
                          require('@/assets/images/company/wc3.jpg'),
                          require('@/assets/images/company/wc4.jpg')],
                  },
                  {
                      icon:require('@/assets/images/haicang_logo.png'),
                      name:'海仓科技',
                      desc:'海仓科技是一家从事跨境电商供应链服务、智能仓储设备研发与集成的综合型企业。公司业务范围涵盖仓储运营管理、线上云商、仓储技术、供应链金融、自营电商平台、智能仓规划建设、仓储自动化设备研发和软硬件服务等，并与考拉海购、云集等跨境电商平台建立长期战略合作伙伴关系。',
                      imgSrc:[require('@/assets/images/company/hc1.jpg'),
                          require('@/assets/images/company/hc2.jpg'),
                          require('@/assets/images/company/hc3.jpg'),
                          require('@/assets/images/company/hc4.jpg')],
                  },
                  {
                      icon:'',
                      iconText:'钜锋',
                      name:'钜锋人力',
                      desc:'钜锋人力资源开发有限公司成立于2017年，致力于从事劳务派遣、人力资源外包服务。向浙江省内的企业输送大批次的新业态从业人员需求！',
                      imgSrc:[require('@/assets/images/company/jf1.jpg'),
                          require('@/assets/images/company/jf2.jpg'),
                          require('@/assets/images/company/jf3.jpg'),
                          require('@/assets/images/company/jf4.jpg')],
                  },
                  {
                      icon:'',
                      iconText:'汇鑫',
                      name:'海宁汇鑫',
                      desc:'海宁汇鑫服务外包有限公司是华东地区领先的蓝领（人力资源）外包服务供应商之一。，通过丰富的劳动力资源、专业的服务经验和先进的管理体系，为客户提供系统、全面的蓝领供应及整体外包服务解决方案。',
                      imgSrc:[require('@/assets/images/company/hx1.jpg'),
                          require('@/assets/images/company/hx2.jpg'),
                          require('@/assets/images/company/hx3.jpg'),
                          require('@/assets/images/company/hx4.jpg')],
                  }
              ],
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
            goToPre() {
                this.$router.push({
                    name: 'subscribe',
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
  .finance{
     padding-top:.9rem;
      .home-top{
          position: relative;
          height: 4rem;
          padding:0 .75rem;
          background:url("../assets/images/m_partner_banner.png") no-repeat center center;
          background-size:100% 100%;
          h3{
              padding-top: 1.3rem;
          }
      }
      .ul-list{
          padding:0 .8rem .8rem;
          ul{
              width: 100%;
              li{
                  margin-top: .8rem;
                  .img-icon{
                      display: inline-flex;
                      width:.6rem;
                      height:.6rem;
                      background-color:#3377FF;
                      color: #fff;
                      align-items: center;
                      justify-content: center;
                      border-radius: .3rem;
                      font-size:.18rem;
                  }
                  p{
                      text-align: justify;
                      padding-bottom: .1rem;
                  }
                  .img-list{
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      flex-direction: row;
                      flex-wrap: wrap;
                      img{
                          display: flex;
                          width: 2.8rem;
                          height:1.6rem;
                          margin-top:.3rem;
                      }
                  }
              }
          }
      }
      .f-con-1,.f-con-2{
          padding: .8rem 0rem 0.5rem;
          background-color:#EDF7FF;
          h4{
              font-size:.36rem;
          }
          p{
              font-size:.23rem;
              padding: 0.4rem .5rem 0;
              text-align:justify;
          }
          img{
              display: block;
              width:100%;
          }
      }
      .f-con-2{
          background-color: #F8FCFF;
      }
  }
</style>
