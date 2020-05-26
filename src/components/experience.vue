<template>
    <div class="experienceCon">
        <div class="first fs36">万才网产品服务</div>
        <div class="sec fs24">提供人力资源多类型解决方案</div>
        <div class="third fs24" @click="goTo">免费试用</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted(){
  },
  methods:{
      goTo(){
          this.$router.push({
                    name: 'subscribe',
                })
      },
  }
}
</script>
<style lang="scss" scoped>
    .experienceCon {
        /*background-image: url("../assets/images/deepBlue.png");*/
        /*background-size:contain;*/
        /*background-repeat: no-repeat;*/
        background-color: #3377FF;
        box-sizing: border-box;
        height: 3.5rem;
        color: #fff;
        text-align: center;
        padding-top: 0.7rem;
        .first {
            font-size: 0.36rem;
            line-height: 0.5rem;            
            margin-bottom: 0.08rem;
        }
        .sec {
            font-size: 0.28rem;
            line-height: 0.4rem;
            margin-bottom: 0.8rem;
        }
        .third {
            width:1.76rem;
            height: 0.56rem;
            text-align: center;
            line-height: 0.56rem;
            /*border: 1px solid #fff;*/
            box-sizing: border-box;
            margin: 0 auto;
            background-color: #fff;
            color:#3377FF;
            border-radius: 0.26rem;
        }
    }
</style>