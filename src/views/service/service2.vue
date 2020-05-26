<template>
    <div class="service2Con">
        <div class="bigText">{{$route.query.region}}</div>
        <div class="address">{{addressMap[$route.query.region]}}</div>         
        <div class="articleCon">
            <template v-for="(item,index) in articleList">
                <div :key="index" class="itemCon" @click="checkDetails(item)">
                    <div class="firstLine">
                        <div class="itemNumber"><span v-if="index<9">0</span>{{index+1}}</div>
                        <div class="itemTitle textHidden">{{item.title}}</div>
                    </div>
                    <div class="content">{{item.pureText}}</div>
                    <div class="timeContainer">{{item.updatedAt.split(' ')[0]}}</div>
                </div>                
            </template>
            <div v-if="!articleList.length" class="nothing">暂无公告内容</div>
        </div>
        <a :href="phone"><div class="phoneTrigger"></div></a>
        <div class="goBack" @click="goBack"></div>
        <div class="qrCon">
            <img class="forBg"  :src="qrcode">
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { NoticeBar } from 'vant';
    import 'vant/lib/notice-bar/style';
    Vue.use(NoticeBar);    
  export default {
      data() {
          return {
              articleList:[],
              addressMap:{
                  '杭州萧山中心局':'建设四路与风情大道交叉口，杭州邮件处理中心',
                  '杭州坎山区':'杭州萧山区坎山路168号',
                  '绍兴上虞区':'上虞区人民西路1738号元泰工业园（中国邮政）',
                  '宁波鄞州区':'鄞县大道古林段288号',
              },
              phone:'',
              qrcode:'',
              bgStyleObj:{},
          }
      },
      mounted(){
          this.initRequest();
      },
      methods:{
          goBack(){
              this.$router.go(-1);
          },
          checkDetails(item){
              this.$router.push({
                  name: 'service3',
                  query:{
                      id:item.id
                  }
              });
          },
          initRequest(){
              let analyse = this.$route.query;
              let params = {
                  region:analyse.region,
                  status:1,
              };
              this.$api.getBoardArticle(params).then(res=>{
                  let { data:layer1 } = res;
                  let { data,respCode } = layer1;
                  if( respCode === 0 ){
                      if(data && data.list){                            
                          data.list.forEach(ele=>{
                              let pretitleTemp = ele.content.replace(/(\n)/g, "");
                              pretitleTemp = pretitleTemp.replace(/(\t)/g, "");
                              pretitleTemp = pretitleTemp.replace(/(\r)/g, "");
                              pretitleTemp = pretitleTemp.replace(/<\/?[^>]*>/g, "");
                              pretitleTemp = pretitleTemp.replace(/\s*/g, "");    
                              pretitleTemp = pretitleTemp.replace(/&nbsp;/g, "");
                              ele.pureText = pretitleTemp.substring(0,50);
                          });                          
                          this.articleList = data.list;
                      }else{
                          this.articleList = [];
                      }
                  }
              }).catch(err=>{
                  console.log('err',err);
              })              
              let params1 = {
                  region:analyse.region 
              };              
              this.$api.getServiceInfo(params1).then(res=>{
                  let { data:layer1 } = res;
                  let { respCode,data } = layer1;
                  if( respCode === 0 ){
                      if(data){
                          this.phone = `tel:${data[0].mobile}`;
                          this.qrcode = data[0].qrCode;
                      }
                  }else{
                  }
            }).catch(err=>{
                console.log('err',err);
            })
              
          },
      }
  }
</script>
<style scoped lang="scss">
    .service2Con {
        height: 18.78rem;
        background-position: top center;
        background-size: cover;
        width: 100%;
        padding-top: 0.9rem;
        box-sizing: border-box;
        background-image: url(../../assets/bg/h5-2.png);
        .noticeCon {
            width: 6.9rem;
            margin: 0 auto;
        }
        .firstLine {
            display: flex;
            justify-content: flex-start;
            align-content: center;
            align-items: flex-start;
        }
        .textHidden {
            text-overflow: ellipsis;            
            white-space: nowrap;
            overflow: hidden;
        }
        .bigText {
            color:#fff;
            text-align: center;
            font-size: 0.6rem;
            margin-bottom: 0.1rem;            
        }
        .nothing {
            text-align: center;
            color: #999;
        }
        .address {
            color:#fff;
            padding-left: 2.4rem;
            padding-right: 2rem;
            box-sizing: border-box;
            font-size: 0.28rem;
            height: 1.3rem;
        }
        .phoneTrigger {
            width: 6.5rem;
            height: 1rem;
            margin: 0 auto;
            margin-top: 0.9rem;
        }
        .goBack {
            width: 6.5rem;
            height: 1rem;
            margin: 0 auto;
            margin-top: 0.5rem;
        }
        .qrCon {
            margin: 0 auto;
            margin-top: 0.5rem;
            width: 3rem; 
            .forBg {
                width: 3rem;  
                height: 3rem;
            }
            .scanText {
                font-size: 0.3rem;
                color: #fff;
                text-align: center;
                margin-top: 0.15rem;
            }
        }
        .articleCon {
            margin-top: 0.9rem;
            margin-left: 0.32rem;
            margin-right: 0.32rem;
            box-sizing: border-box;
            padding-bottom: 0.3rem;
            overflow-y: scroll;
            height: 4.3rem;
            .itemCon {
                padding-left: 0.3rem;
                padding-right: 0.3rem;    
                margin-bottom: 0.12rem;
                box-sizing: border-box;              
                .itemNumber {
                    color: #E82828;
                    font-size: 0.4rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    width: 0.8rem;
                }
                .itemContent {
                    margin-left: 0.2rem;
                    color: #0F4CD6;
                    width:100%;
                    font-size: 0.26rem;  
                }
                .itemTitle {
                    font-size: 0.3rem;
                    font-weight: bold;
                    color: #0F4CD6;
                    margin-bottom: 0.1rem;
                    width: 73vw;
                }
                    .content {
                        margin-left: 0.8rem;
                        color: #999;
                        width: 73vw;
                        font-size: 0.26rem; 
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        margin-bottom: 0.1rem;
                    }
                    .timeContainer {
                        text-align: right;
                        color: #0F4CD6;
                        font-size: 0.24rem; 
                    }   
            }
        }
    }
</style>