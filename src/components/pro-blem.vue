<template>
    <section>
        <div class="pro-con-one">
            <h2>
                <span></span>
                {{pro.title}}
            </h2>
            <ul >
                <li v-for="(item,index) in pro.list">
                    <i class="" :class="'pro-icon-'+ (index+1)"></i>
                    <div class="content-r">
                        <h5 class="fc-black">{{item.name}}</h5>
                        <p class="fc-gray">{{item.text}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
  import Vue from 'vue'

export default {
    props: {
        pro: {
            required:true,
            type:Object
        }
    },
  data () {
    return {
    }
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

<style lang="scss">
    .pro-con-one{
        padding: .6rem .3rem .88rem .65rem;
        h2{
            display: flex;
            height: .4rem;
            font-size:.37rem;
            font-weight: 600;
            justify-content: space-around;
            align-items: center;
            span{
                display: inline-block;
                width:.27rem;
                height:.27rem;
                background-color:#4E8CEE;
            }
        }
        ul{
            li{
                margin-top: .6rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                i{
                    display: flex;
                    width: .65rem;
                    height: .62rem;
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center center;
                }
                i.pro-icon-1{
                    background-image: url("../assets/images/1.png");
                }
                i.pro-icon-2{
                    background-image: url("../assets/images/2.png");
                }
                i.pro-icon-3{
                    background-image: url("../assets/images/3.png");
                }
                i.pro-icon-4{
                    background-image: url("../assets/images/4.png");
                }
                .content-r{
                    display: flex;
                    flex-direction: column;
                    width: calc(100% - 1.05rem);
                    h5{
                        font-size: .28rem;
                        font-weight:600;
                    }
                    p{
                        font-size:.22rem;
                    }
                }
            }
        }
    }
</style>
