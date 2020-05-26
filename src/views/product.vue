<template>
    <div class="product-box pt-90">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu"/>
        <div class="per-bg" v-if="activeIndex === 1">
            <div class="btn-center" @click="goToPre"></div>
        </div>
        <div class="com-bg" v-if="activeIndex === 0">
            <div class="btn-center" @click="goToPre"></div>
        </div>
        <!--<router-view></router-view>-->
        <div class="tab-down mt80 mb80">
            <span :class="{'span-active':activeIndex === 0}" @click="tab(0)">万才企业版</span>
            <span :class="{'span-active':activeIndex === 1}" class="span-person" @click="tab(1)">万才个人版</span>
        </div>
        <preson v-if="activeIndex === 1"></preson>
        <company v-if="activeIndex === 0"></company>
        <experience></experience>
        <Footer/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import Footer from '../components/my-footer'
  import experience from '../components/experience'
  import company from './product/proone'
  import preson from './product/protwo'

  export default {
      components: {company,preson,Header,Nav,Footer,experience},
      data() {
          return {
              showMenu:false,
              activeIndex:1,
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
            tab(index){
                this.activeIndex = index;
                if(index === 1){
                }else if(index === 0){
                }
            },
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

<style lang="scss">
    .product-box{
        .per-bg{
            position: relative;
            height:4rem;
            background: url("../assets/images/m_person_banner.png") no-repeat center center;
            background-size: 100% 100%;
        }
        .com-bg{
            position: relative;
            height:4rem;
            background: url("../assets/images/m_company_banner.png") no-repeat center center;
            background-size: 100% 100%;
        }
    }
</style>
