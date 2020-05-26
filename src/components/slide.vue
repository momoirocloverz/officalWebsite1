<template>
    <section>
        <div class="home-slide">
            <mt-swipe class="tc" :auto="3000">
                <mt-swipe-item >
                    <div class="swipe-box swipe-box-1">
                        <div class="swipe-mask">
                            <h3 class="fs24 fc-white">中大型快递物流外包商</h3>
                            <p class="pt20 fs13 fc-white">入驻万才网后</p>
                            <router-link :to="{path:'/logisticsDetail',query: { index: 1}}" class="home-tel fc-white fs13">
                                了解更多
                            </router-link>
                        </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swipe-box swipe-box-2">
                        <div class="swipe-mask">
                        <h3 class="fs24 fc-white">小型快递物流外包商</h3>
                        <p class="pt20 fs13 fc-white">入驻万才网后</p>
                        <router-link :to="{path:'/logisticsDetail',query: { index: 2}}" class="home-tel fc-white fs13">
                            了解更多
                        </router-link>
                    </div>
                    </div>
                </mt-swipe-item>
                <mt-swipe-item>
                    <div class="swipe-box swipe-box-3">
                        <div class="swipe-mask">
                        <h3 class="fs24 fc-white">中大型电商快递物流公司</h3>
                        <p class="pt20 fs13 fc-white">入驻万才网后</p>
                        <router-link :to="{path:'/logisticsDetail',query: { index: 3}}" class="home-tel fc-white fs13">
                            了解更多
                        </router-link>
                        </div>
                    </div>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </section>
</template>

<script>
  import Vue from 'vue'

export default {
  props:{},
  data () {
    return {
    }
  },
  created(){
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{
  }
}
</script>

<style lang="scss">
    .home-slide{
        height:4.6rem;
        .swipe-box{
            height:4.6rem;
            h3{
                padding-top: 1.3rem;
            }
        }
        .swipe-mask{
            height:4.6rem;
            background-color:rgba(0,0,0,.5);
        }
        .swipe-box-1{
            background:url("../assets/images/wl_1.png") no-repeat center center;
            background-size:100% 100%;
        }
        .swipe-box-2{
            background:url("../assets/images/wl_2.png") no-repeat center center;
            background-size:100% 100%;
        }
        .swipe-box-3{
            background:url("../assets/images/wl_3.png") no-repeat center center;
            background-size:100% 100%;
        }
    }
</style>
