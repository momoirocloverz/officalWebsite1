<template>
    <div class="service1Con">
        <div class="trigger part1" @click="pushArticles('杭州萧山中心局')"></div>
        <div class="trigger part2" @click="pushArticles('杭州坎山区')"></div>
        <div class="trigger part3" @click="pushArticles('绍兴上虞区')"></div>
        <div class="trigger part4" @click="pushArticles('宁波鄞州区')"></div>
    </div>
</template>
<script>
  export default {
      data() {
          return {}
      },
      mounted(){},
      methods:{
          pushArticles(str){
              this.$router.push({
                  name: 'service2',
                  query:{
                      region:str
                  },
              });
          },
      },
  }
</script>
<style scoped lang="scss">    
    .service1Con {
        height: 14.36rem;
        background-position: top center;
        background-size: cover;
        width: 100%;
        padding-top: 6.4rem;
        box-sizing: border-box;
        background-image: url(../../assets/bg/h5-1.png);
        .trigger {
            width: 5.5rem;
            height: 1rem;
            margin: 0 auto;
        }
        .part2 {
            margin-top: 0.43rem;
        }
        .part3 {
            margin-top: 0.43rem;
        }
        .part4 {
            margin-top: 0.43rem;
        }
    }
</style>