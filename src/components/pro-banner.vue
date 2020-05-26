<template>
    <section>
        <div class="home-top fc-white tl">
            <h3 class="fs24" :class="message.class">{{message.title}}</h3>
            <p class="pt20 fs13 lh18" style="white-space:pre">{{message.text}}</p>
            <router-link to="/counter3" class="pro-btn fc-white fs13">
                获取解决方案
            </router-link>
        </div>
    </section>
</template>

<script>
  import Vue from 'vue'

export default {
    props: {
        message: {
            required:true,
            type:Object
        }
    },
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
    .home-top{
        text-align: center;
        height: 4.2rem;
        padding:0 .75rem;
        h3{
            padding-top: 1.2rem;
        }
        .pro-btn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin: .4rem auto;
            font-size: .22rem;
            width: 2.1rem;
            background-color: #3784FF;
            /*border: 1px solid #fff;*/
            height: .54rem;
            border-radius: .27rem;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
        }
    }
</style>
