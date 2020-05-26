<template>
    <div class="introduce-detail pt-90">
        <Header @showEvent = 'isShowMenu()' ref="mychild" title="物流详情" />
        <Nav @showList ="isShowMenu()" v-show = "showMenu" />
        <div class="introduce-top fc-white tc" v-if="isRouterAlive">
              <h3 class="fs24 fs-bold-700">行业资讯</h3>
              <p class="pt20 fs13">行业热点追踪 方向趋势预测 展望行业未来</br>
始终屹立行业前沿  为企业决策拨云看日</p>
        </div>
        <div class="introduce-just">
          <div class="u-title fs20 fs-bold-700">
            {{title}}
          </div>
          <div class="u-head-note">
            <div class="source-text fs13"> 来源 &nbsp;&nbsp; {{source}}</div>
            <div class="time">{{createdAt.split(' ')[0]}}</div>
          </div>
          <div class="u-content fs15">
            <div v-html="content"></div>
          </div>
        </div>
        <div class="u-change-page">
          <div v-if="preId" class="u-last fs14 u-text" @click="handleChangeToOther(preId)">
            上一篇:&nbsp;{{preTitle}}
          </div>
          <div v-if="nextId" class="u-next fs14 u-text" @click="handleChangeToOther(nextId)">
            下一篇:&nbsp;{{nextTitle}}
          </div>
        </div>
       <Footer/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../../components/my-header'
  import Nav from '../../components/menu'
  import Footer from '../../components/my-footer'
  import FormCom from '../../components/form'
  import Slide from '../../components/slide'

  export default {
        components:{Header,Nav,Footer},
        data() {
          return {
            showMenu:false,
            tabIndex:0,
            title:'',
            source:'',
            createdAt:'',
            content:'',
            preId:'',
            preTitle:'',
            nextId:'',
            nextTitle:'',
            isRouterAlive:true
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
                console.log(this.tabIndex)
            }
        },
        mounted(){
          const {id} = this.$route.query;
          this.handleGetDetail(id);
        },
        destroyed(){

        },
        methods:{
          isShowMenu: function (params) {
              this.showMenu = !this.showMenu;
          },
          handleGetDetail:function(id){
            this.$api.getDetail(id).then(res=>{
            const {data} = res.data;
            this.title = data.title;
            this.source= data.source;
            this.createdAt=data.createdAt;
            this.content= data.content;
            this.preId=data.preId;
            this.preTitle=data.preTitle;
            this.nextId=data.nextId;
            this.nextTitle=data.nextTitle;
            })
          },
          handleChangeToOther: function(id){
            this.$api.addRead(id).then(res=>{
              this.$router.push({name:'introduceDetail',query:{id:id}});
              this.reload();
            })
          },
          reload (){
            const {id} = this.$route.query;
            this.handleGetDetail(id);
          }
        }
  }
</script>

<style lang="scss">
  .introduce-detail {
    background-color: #F8F9FA;
  }
 .introduce-top{
        height: 4.2rem;
        background:url("../../assets/images/introduce.png") no-repeat center center;
        background-size:100% 100%;
        h3{
            padding-top: 1.3rem;
        }
    }
  .introduce-just {
    background-color: #fff;
    padding: 0.6rem 0.36rem;
    width: calc(100% - 0.72rem);
    .u-title {
      width: calc(100% - 0.72rem);
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
  }
  .u-head-note {
    display: flex;
    color: #9B9EA0;
    justify-content: space-between;
    margin-top: 0.3rem;
    .time {
      margin-right: 0.5rem;
    }
    .source-text {
      width:4rem;
      overflow: hidden;/*超出部分隐藏*/
      text-overflow:ellipsis;/* 超出部分显示省略号 */
      white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
  }
  .u-content {
    color: #4E4E51;
    margin-top: 0.3rem;
    p {
       img {
        display: block;
        width: calc(100% - 0.6rem)!important;
      }
    }
  }
  .u-change-page {
    padding: 0.2rem 0.2rem 0 0.2rem;
    background-color: #fff;
    width: calc(100% - 0.4rem);
    height: 1.2rem;
    line-height: 0.48rem;
    color: #73777A;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
    .u-text {
      width: calc(100% - 0.4rem);
      overflow: hidden;/*超出部分隐藏*/
      text-overflow:ellipsis;/* 超出部分显示省略号 */
      white-space: nowrap;/*规定段落中的文本不进行换行 */
    }
    
  }
  .u-last {
    margin-bottom: 0.1rem;
  }
</style>
