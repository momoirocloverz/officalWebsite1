<template>
    <div class="g-publicity">
        <img class="u-publicity-img" src="../../assets/images/counter3.png"/>
        <img class="u-publicity-img" v-if="showShare" src="../../assets/images/counter4.png" @click="()=>{showShare=false;}"/>
        <div class="u-free-use" @click="handleToUse"></div>
        <div class="u-phone" @click="handleToTel"></div>
        <div class="u-share-button" @click="handleToShare"></div>
    </div>
</template>

<script>
  import Vue from 'vue';


  export default {
        data() {
          return {
            name:'',
            mobile:'',
            demand: 4,
            showBac: false,
            showShare:false,
            moblie:'15372588833'
          }
        },
        computed:{

        },
        watch:{

        },
        created(){
          const {isBoss}=this.$route.query
          if(isBoss=='1'){
              this.showBac = true;
          }else {
             this.showBac = false;
          }
        },
        mounted(){

        },
        destroyed(){

        },
        methods:{
          handleToShare(){
            this.showShare = true;
            window.scrollTo(0,0);  
          },
          handleToTel(){
            window.location.href = 'tel:' + this.moblie
          },
          handleToUse(){
            this.$router.push('publicity');
          }
        }
  }
</script>

<style scoped lang="scss">
.g-publicity {
  .u-publicity-img {
    width: 100%;
    position:absolute;
    top:0;
    left:0;
  }
}

.u-publicity-form {
  position: absolute;
  top:6.8rem;
  left:1rem;
  .u-input {
    width: 5.5rem;
    background-color: transparent;
    border:none;
  }
  .u-publicity-btn {
    width: 5.5rem;
    height: 0.8rem;
    margin-top: 0.65rem;
  }
}
.u-first-btn {
    position: absolute;
    width:6.5rem;
    height: 0.85rem;
    top:11.98rem;
    left:0.6rem;
  }
  .u-share-button {
    position: absolute;
    width: 6rem;
    height: 1rem;
    top: 16rem;
    left: 1rem;
  }
  .u-phone {
    position: absolute;
    width: 6rem;
    height: 1rem;
    top: 14.8rem;
    left: 1rem;
  }
  .u-free-use {
     position: absolute;
    width: 6rem;
    height: 1rem;
    top: 11.2rem;
    left: 1rem;
  }
</style>
