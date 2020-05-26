<template>
    <div class="finance">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="预约" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu"/>
        <FormCom/>
        <Footer/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import FormCom from '../components/form'
  import Footer from '../components/my-footer'

  export default {
        components:{Header,Nav,Footer,FormCom},
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

<style scoped>
  .finance{
     padding-top:.9rem;
  }
</style>
