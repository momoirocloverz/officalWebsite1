<template>
    <nav class="nav" @touchmove.prevent>
      <div class="menu-bg" @click="isMenu()"></div>
      <div class="menu pl30 content-top pt15 pb15 linebdt">
        <div class="nav-item tleft linebdb"
             v-for="(item, index) in $router.options.routes"
             v-if="item.meta.show"
             :class="{'item-h':tabIndex == index}"
             :key="index">
                <div class="fc-black" @click="to(item.path)">{{item.alias}}</div>
                <div v-if="item.children" class="icon-right pl20 pr20 pt20 pb20" @click="have(index)">
                    <i :class="{'hover': tabIndex == index}"></i>
                </div>
            <div class="item-childre-wrap">
              <div class="pl30 item-children linebdt fc-gray-2"
                   v-for="(childItem,childIndex) in item.children"
                   :key="childIndex">
                  <div class="fc-gray-2 fs13" @click="to(childItem.path)">{{childItem.alias}}</div>
                <!--<router-link class="" :to="{path:childItem.path}">-->
                  <!--{{childItem.alias}}-->
                <!--</router-link>-->
              </div>
            </div>
        </div>
      </div>
    </nav>
</template>

<script>
  import Vue from 'vue'

export default {
  props:{},
  data () {
    return {
      isHave:false,
      tabIndex:-1,
    }
  },
  created(){
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{
    have:function (index) {
      if(this.tabIndex == index){
        this.tabIndex = -1;
      }else{
        this.tabIndex = index;
      }
    },
      isMenu:function () {
          // this.$EventBus.$emit('showList',{isShow:false})
          this.$emit('showList','false')
      },
      to:function (path) {
        let _this = this;
        if(path){
            this.$nextTick(()=>{
                _this.$router.push({path: path});
            });
            // _this.$router.push(path);
            // debugger;
            console.log(path);
        }
      }
  }

}
</script>

<style scoped>
    .nav{
        position: fixed;
        top:.9rem;
        z-index:10;
        right:0;
        left:0;
        bottom:0;
    }
    .menu-bg{
        position: fixed;
        top:.9rem;
        z-index:990;
        right:0;
        left:0;
        bottom:0;
        background-color:rgba(0,0,0,.25);
    }
    .menu{
        font-size:14px;
        width:4.42rem;
        position: fixed;
        top:.9rem;
        z-index:999;
        right:0;
        bottom:0;
        background-color:#fff;
    }
    .menu .nav-item{
        position: relative;
        line-height:calc(.9rem - 1px);
        overflow: hidden;
        text-indent:.36rem;
    }
    .menu .nav-item .item-childre-wrap{
        height:0;
        font-size:14px;
        background:rgba(245,246,248,1);
    }
    .menu .nav-item.item-h .item-childre-wrap{
        height:auto;
    }
    .menu .icon-right{
        position: absolute;
        top:.12rem;
        right:.2rem;
    }
    .menu .icon-right i{
        display: block;
        width:.32rem;
        height:.26rem;
        transform:rotate(0deg);
        transition: .1s;
        background:url("../assets/images/xia.png") no-repeat center center;
        background-size:100% 100%;
    }
    .menu .icon-right i.hover{
        transition: .1s;
        transform:rotate(180deg);
    }
    .menu a{
        display: block;
    }

</style>
