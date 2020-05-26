<template>
    <div class="introduce pt-90">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="物流详情" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu" />
        <div class="introduce-top fc-white tc">
              <h3 class="fs24 fs-bold-700">行业资讯</h3>
              <p class="pt20 fs13">行业热点追踪 方向趋势预测 展望行业未来<br>
              始终屹立行业前沿  为企业决策拨云看日</p>
        </div>
        <div class="introduce-list">
          <div 
          v-for="(it,i) in infoList" 
          :key="i" class="introduce-item"  
          :class="it.listPic?'':'no-image'"
          @click="handleToDetail(it.id)"
          >
            <div class="u-text">
              <div class="u-title fs16 fs-bold-700">
                {{it.title}}
              </div>
              <div class="u-foot-note">
                <div class="source fs13">来源&nbsp;&nbsp;{{it.source}}</div>
                <div class="time fs13">{{it.createdAt.split(' ')[0]}}</div>
              </div>
            </div>
            <div v-if="it.listPic" class="u-image">
                <img class="u-image-content" :src="it.listPic"/>
            </div>
          </div>
        </div>
        <div v-if="total >infoList.length" class="u-more fs15" @click="handleGetMore">
          更多资讯({{total-infoList.length}}条)
        </div>
        <Footer />
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../components/my-header'
  import Nav from '../components/menu'
  import Footer from '../components/my-footer'
  import FormCom from '../components/form'
  import Slide from '../components/slide'

  export default {
        components:{Header,Nav,Footer},
        data() {
          return {
            showMenu:false,
            tabIndex:0,
            infoList:[],
            num:1,
            total:0,
          }
        },
        computed:{

        },
        watch:{
        },
        created(){
            let index = this.$route.query.index;
            if(index>0){
                this.tabIndex = this.$route.query.index;
            }
        },
        mounted(){
            this.handleGetInfoList({num:this.num});
        },
        destroyed(){

        },
        methods:{
          isShowMenu: function (params) {
              this.showMenu = !this.showMenu;
          },
          handleGetInfoList: function({num}){
            this.$api.getInfoList({pageNum:num,pageSize:10,title:'',status:1}).then(res=>{
              this.infoList = this.infoList.concat(res.data.data.list||[]);
              this.total = res.data.data.total;
              this.num+=1
            });
          },
          handleToDetail: function(id){
            this.$api.addRead(id).then(res=>{
              console.log(id)
              this.$router.push({name:'introduceDetail',query:{id:id}});
            })
          },
          handleGetMore: function(){
             this.handleGetInfoList({num:this.num});
          },
          // reload(){
          //   this.isRout
          // }
        }
  }
</script>

<style lang="scss" scoped>
  .introduce {
    background-color: #F8F9FA;
  }

  .introduce-list {
    margin-top: 0.3rem;
  }

 .introduce-top{
        height: 4.2rem;
        background:url("../assets/images/introduce.png") no-repeat center center;
        background-size:100% 100%;
        h3{
            padding-top: 1.3rem;
        }
    }
  .introduce-item {
    display: flex;
    background-color: #fff;
    padding: 0.5rem 0.4rem;
    margin-bottom: 0.3rem;
  }
  .u-foot-note {
    margin-top: 0.24rem;
    display: flex;
    justify-content: space-between;
    color: #9B9EA0;
    line-height: 26px;
    .source {
      width:2rem;
      overflow: hidden;/*超出部分隐藏*/
      text-overflow:ellipsis;/* 超出部分显示省略号 */
      white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
  }
  .u-text {
    width: 3.9rem;
    margin-right: 0.75rem;
    justify-content: space-between;
    .u-title {
      width: 3.9rem;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .u-image {
    width: 2.1rem;
    height: 1.4rem;
    
    .u-image-content {
     width: 100%;
     height: 100%;
     object-fit: contain;
     object-position: center center;
    }
  }
  .no-image {
    width: calc(100% - 0.8rem);
    margin-right: 0;
    .u-foot-note {
      padding-right: 2.02rem;
      
    }
    
    .u-text {
      width:100%;
      .u-title {
        width: 100%;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
    
  }
  .u-more {
    color: #373D41;
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    background-color: #fff;
    margin-bottom: 0.3rem;
  }
</style>
