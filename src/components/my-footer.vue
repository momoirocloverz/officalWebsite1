<template>
  <footer>
    <div class="footer tc">
        <h5 class="fs32 fs-bold-100 fc-white">
            长按识别二维码
        </h5>
        <h5 class="fs32 fs-bold-100 fc-white mt15">关注微信公众号</h5>
        <img class="ft-ma" src="../assets/images/wx_ma.jpg" alt="">
        <div style="margin-top: .4rem;padding-left: 1.2rem" class="tl">
            <a class="tel fc-white fs40" href="tel:15158135511">
                <i class="phone-icon"></i>
                {{moblie}}<span class="fs22" style="color: rgba(255,255,255,0.5);">(工作日09:00-18:00)</span>
            </a>
        </div>
        <div style="margin-top: .4rem;padding-left: 1.2rem" class="tl">
            <a class="tel fc-white fs40">
                <i class="email-icon"></i>
                business@10000rc.com
            </a>
        </div>
        <h5 class="fs24 fs-bold-100 fc-white" style="padding: .8rem 0;">Copyright © 2015-2020 万才科技（杭州）有限公司 版权所有</h5>
    </div>
  </footer>
</template>
<script>
export default {
  data () {
    return {
        moblie:'151 5813 5511'
    }
  },
  mounted(){
  },
  methods:{
      getMobile() {
          let _this = this;
          this.$api.getMobile()
              .then(res => {
                  _this.moblie = res.data.data || '153 7258 8833'
              })
              .catch(err => {
                  console.log(err)
              })
      },
    showMenu:function () {
      this.$emit("showEvent",'false');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .footer{
      background-color: #2E334D;
      padding-top:.8rem;
      .ft-ma{
          display: inline-block;
          width:3.2rem;
          height:3.2rem;
          margin:.4rem 0 .2rem;
      }
      .tel{
          .phone-icon{
              display: inline-block;
              width:.6rem;
              height:.6rem;
              background: url("../assets/images/m_telephone.png") no-repeat center center;
              background-size:100%;
              vertical-align: bottom;
          }
          .email-icon{
              display: inline-block;
              width:.6rem;
              height:.6rem;
              background: url("../assets/images/m_email.png") no-repeat center center;
              background-size:100%;
              vertical-align: bottom;
          }
      }
  }
</style>