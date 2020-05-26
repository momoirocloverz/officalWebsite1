<template>
    <div class="abouts">
      <!--<router-view></router-view>-->
        <company></company>
        <contact></contact>
        <certificate></certificate>
    </div>
</template>

<script>
  import Vue from 'vue';
  import company from './aboutus/companyinfo'
  import contact from './aboutus/contact'
  import certificate from './aboutus/certificate'

  export default {
        name:'aboutus',
        components:{company,contact,certificate},
        data() {
          return {
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
        }
  }
</script>

<style scoped>
</style>
