<template>
    <div class="rang-list">
        <van-nav-bar
                title="帮助中心"
                left-text=""
                left-arrow
                @click-left="onClickLeft"
        />
        <ul class="flex flex-left align-item-center flex-row flex-wrap pt10">
            <li class="range-li" v-for="(item,index) in rangeList" :key="index">
                <div class="range-item" @click="goItem(item,1)">
                    {{item.rangeName}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { NavBar} from 'vant';
    Vue.use(NavBar);
    export default {
        name: "rangeList",
        data(){
          return {
              rangeList:[]
          }
        },
        mounted(){
            this.getRange()
        },
        methods:{
            onClickLeft(){
                this.$router.go(-1)
            },
            getRange(){
                this.$api.helpRangeList({
                    pageNum:this.pageNum,
                    pageSize:0,
                }).then(res => {
                    if(res.data.respCode === 0){
                        if(res.data.data.list && res.data.data.list.length > 0){
                            let len = Array.from(res.data.data.list).length;
                            this.rangeList = Array.from(res.data.data.list)
                        }
                    }
                }).catch(err=>{
                    console.log(err)
                })
            },
            goItem(item){

            }
        },
    }
</script>

<style lang="scss" scoped>

</style>