<template>
    <div class="service3Con">
        <div class="topPart">
            <div class="time">{{time}}</div>
            <div class="title">{{title}}</div>
        </div>
        <div class="middlePart">
            <div class="ql-editor" v-html="content"></div>
        </div>
        <div class="bottomPart">  
            <div class="here" @click="goBack"></div>
        </div>
    </div>
</template>
<script>
  export default {
      data() {
          return {
              time:'',
              content:'',
              title:'',
          }
      },
      mounted(){
          this.getInfo();
      },
      methods:{
          goBack(){
              this.$router.go(-1);
          },
          getInfo(){
              let id = this.$route.query.id;
              let params = {
                  id
              };
              this.$api.checkBoardArticle(params).then(res=>{
                  let { data:layer1 } = res;
                  let { data,respCode } = layer1;
                  if( respCode === 0 ){
                      this.title = data.title;
                      this.content = data.content;
                      let rege = data.updatedAt.replace(/-/g, "/");
                      let generate = new Date(rege);
                      let mapObj = {
                          0:'星期日',
                          1:'星期一',
                          2:'星期二',
                          3:'星期三',
                          4:'星期四',
                          5:'星期五',
                          6:'星期六',
                      };
                      this.time = data.updatedAt.split(' ')[0] + '/' + mapObj[generate.getDay()];
                  }                  
              }).catch(err=>{
                  console.log('err',err);
              })
          },
      }
  }
</script>
<style scoped lang="scss">
    .service3Con {
        height: 14rem;
        background-position: top center;
        background-size: cover;
        width: 100%;
        box-sizing: border-box;
        background-image: url(../../assets/bg/h5-3.png);        
        .topPart {
            height: 2.2rem;
            width: 100%;
            box-sizing: border-box;
        }
        .time {
            color: #fff;
            text-align: center;
            font-size: 0.3rem;
            height: 0.72rem;
            font-weight: 400;
            padding-top: 0.1rem;
            box-sizing: border-box;
        }
        .title {
            font-weight: bold;
            font-size: 0.31rem;
            text-align: center;
            margin-top: 1.07rem;
            padding-left: 0.8rem;
            padding-right: 0.8rem;
            box-sizing: border-box;
            word-wrap: break-word;
            margin-bottom: 0.4rem;
        }
        .middlePart {
            height: 8rem;
            padding-top: 0.2rem;
            overflow-y: scroll;
            width: 100%;
            padding-left: 0.3rem;
            padding-right: 0.3rem;    
            box-sizing: border-box;        
        }
        .bottomPart {
            height: 2.97rem;
            width: 100%;
            box-sizing: border-box;
            padding-top: 1rem;
            .here {
                height: 1rem;
                width: 6.5rem;
                margin: 0 auto;
            }
        }        
    }
</style>
<style lang="scss">
    .service3Con {
        .ql-editor {
            img {
                max-width: 6rem !important;
            }
            p {
                letter-spacing: 0.01rem;
                color: #666 !important;
            }
        }
    }    
</style>