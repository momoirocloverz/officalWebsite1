<template>
  <header class="wc-m-header" @touchmove.prevent>
      <mt-header>
          <mt-button slot="left">
              <img class="wc-logo" src="../assets/images/logo.png" alt="">
          </mt-button>
          <mt-button slot="right">
              <span class="header-right" @click="showMenu()">
              </span>
          </mt-button>
      </mt-header>
  </header>
</template>

<script>
  import Vue from 'vue'

export default {
  props:{
    title:{
      type:String,
      required:true,
      default:'title',
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
    back: function () {
      console.log('go----');
      this.$router.go(-1);
    },
    showMenu:function () {
      this.$emit("showEvent",'false');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wc-m-header{
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:8;
  }
  .wc-logo{
      display: inline-block;
      height: .52rem;
      width:1.51rem;
  }
  .wc-m-header .header-right{
      display: block;
      width:.48rem;
      height:.48rem;
      margin-top:.1rem;
      margin-right:.1rem;
      background:url("../assets/images/m_order.png") no-repeat center center;
      background-size:100% 100%;
  }
</style>
