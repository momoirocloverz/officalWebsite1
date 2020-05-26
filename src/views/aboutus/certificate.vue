<template>
    <div class="">
        <!--<Header @showEvent = 'isShowMenu()' ref="mychild" title="资质证明" />-->
        <!--<Nav @showList ="isShowMenu()" v-show = "showMenu"/>-->
        <!--<div class="home-top fc-white tc">-->
            <!--<h3 class="">-资质证明-</h3>-->
            <!--<p class="pt20 fs14 lh18">万才科技（杭州）有限公司</p>-->
        <!--</div>-->
        <div class="cer-content">
            <!--<van-divider :style="{color:'#333',fontWeight:'600'}">许可证书</van-divider>-->
            <!--<ul class="ul-1">-->
                <!--<li @click="showImage()">-->
                    <!--<img src="@/assets/images/cer/111.png" alt=""/>-->
                    <!--<span class="f12">人力资源服务许可证</span>-->
                <!--</li>-->
            <!--</ul>-->
            <van-divider class="fs36" :style="{color:'#333',fontWeight:'600'}">资质认证</van-divider>
            <ul class="ul-2">
                <li v-for="(item,index) in cerlist" :key="index"
                    @click="showImage2(index)">
                    <img :src=item.src alt=""/>
                    <span class="f12">{{item.name}}</span>
                </li>
            </ul>
            <!--<van-divider :style="{color:'#333',fontWeight:'600'}">其它证书</van-divider>-->
            <ul class="ul-2">
                <li v-for="(item,index) in cerlist2" :key="index"
                    @click="showImage3(index)">
                    <img :src=item.src alt=""/>
                    <span class="f12">{{item.name}}</span>
                </li>
            </ul>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Vue from 'vue';
  import Header from '../../components/my-header'
  import Nav from '../../components/menu'
  import Footer from '../../components/my-footer'
  import { Divider } from 'vant';
  import { ImagePreview } from 'vant';
  import 'vant/lib/index.css';
  Vue.use(Divider);
  Vue.use(ImagePreview);


  export default {
      components:{Header,Nav,Footer},
      data() {
          return {
              showMenu:false,
              cerlist:[
                  {src:require('@/assets/images/cer/555.png'),name:'万才经理人软著'},
                  {src:require('@/assets/images/cer/666.png'),name:'万才经理人软著'},
                  {src:require('@/assets/images/cer/777.png'),name:'万才网平台后台软著'},
                  {src:require('@/assets/images/cer/888.png'),name:'佳薪宝软著'},
                  {src:require('@/assets/images/cer/999.png'),name:'万才网客户后台软著'},
                  {src:require('@/assets/images/cer/1213.png'),name:'蓝灵王软著'},
              ],
              cerlist2:[
                  {src:require('@/assets/images/cer/1212.png'),name:'增值电信业务经营许可证'},
                  {src:require('@/assets/images/cer/444.png'),name:'国际顶级域名注册证书'},
                  {src:require('@/assets/images/cer/3.3.png'),name:'增值电信业务经营许可证'},
                  {src:require('@/assets/images/cer/111.png'),name:'人力资源服务许可证'},
              ]
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
            showImage(){
                ImagePreview({
                    images:[require('@/assets/images/cer/111.png'),]
                });
            },
            showImage2(index){
                ImagePreview({
                    images:[require('@/assets/images/cer/555.png'),
                        require('@/assets/images/cer/666.png'),
                        require('@/assets/images/cer/777.png'),
                        require('@/assets/images/cer/888.png'),
                        require('@/assets/images/cer/999.png'),
                        require('@/assets/images/cer/1213.png')
                    ],
                    startPosition: index,
                    onClose() {
                        // do something
                    }
                });
            },
            showImage3(index){
                ImagePreview({
                    images: [
                        require('@/assets/images/cer/1212.png'),
                        require('@/assets/images/cer/444.png'),
                        require('@/assets/images/cer/3.3.png'),
                        require('@/assets/images/cer/111.png'),],
                    startPosition: index,
                    onClose() {
                        // do something
                    }
                });
            }
        }
  }
</script>

<style lang="scss" scoped>
    .f12{
        font-size: .24rem;
    }
    .home-top{
        height: 4.2rem;
        padding:0 .75rem;
        background:url("../../assets/images/cer/000.png") no-repeat center center;
        background-size:100% 100%;
        h3{
            padding-top: 1.7rem;
            font-size:.48rem;
        }
    }
    .cer-content{
        padding:0 .5rem .35rem;
        .ul-1,.ul-2{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width:100%;
            padding-bottom:.5rem;
            li{
                display: flex;
                flex-direction: column;
                justify-content: center;
                width:50%;
                text-align: center;
                img{
                    display: flex;
                    margin:.5rem auto .3rem;
                    width:2.66rem;
                    height:1.9rem;
                    transform: scale(1);
                    transition:.3s;
                    position:relative;
                    z-index: 1;
                }
                /*img:hover{*/
                    /*transform: scale(2);*/
                    /*transition:.3s;*/
                    /*z-index:3;*/
                /*}*/
            }
        }
        .ul-2{
            li{
                width:50%;
                img{
                    width: 2.24rem;
                    height: auto;
                }
            }
        }
    }
</style>
