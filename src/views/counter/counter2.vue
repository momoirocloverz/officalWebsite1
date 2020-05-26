<template>
    <div class="g-publicity">
        <img class="u-publicity-img" src="../../assets/images/counter2.png" v-if="!showBac"/>
        <div class="title1 fs30">
            企业每年社保部分多支出
        </div>
        <div class="title2 fs30">
            <span class="fs36 num" v-if="allYear.length>4">{{allYear.slice(0, allYear.length - 4)}}<span class="fs30" style="color:#fff;">万</span></span>
            <span class="fs36 num" v-else>{{allYear}}</span>
            <span class="fs30">元</span>
        </div>
        <div class="title3 fs18">
            <span class="fs18">每月企业额外支出</span>
            <span class="fs20 num" v-if="allMonth.length>4">{{allMonth.slice(0, allMonth.length - 4)}}<span class="fs20 num" style="color:#fff;">万</span></span>
             <span class="fs20 num" v-else>{{allMonth}}</span>
            <span class="fs18">元</span>
        </div>
        <div class="u-content">
            <div class="u-title fs12">
              企业社保部分支出：
            </div>
            <div class="u-table-item">
                <div class="u-table-item1 u-com fs10" style="background-color:#E5ECFF">
                    企业人数
                </div>
                <div class="u-table-item2 text-center" >
                    {{num}}人
                </div>
            </div>
            <div class="u-table-item top-1" >
                <div class="u-table-item1 fs10" style="background-color:#E5ECFF">
                <div style="height:0.1rem"></div>
                    企业最低</br>缴纳金额
                </div>
                <div class="u-table-item2 text-center">
                  
                    {{data[city][5]}}元/月
                </div>
            </div>
            <div class="u-table-item top-2">
                <div class="u-table-item1 fs10"  style="background-color:#E5ECFF">
                <div style="height:0.1rem"></div>
                    企业一年</br>社保支出
                </div>
                <div class="u-table-item2 text-center" style="margin-top:0.06rem;">
                  {{data[city][5]}}*{{num}}*12={{allYear}}元
                </div>
            </div>
        </div>
        <div class="u-content2">
            <div class="u-title fs12">
              当地企业按最低基数缴纳新业态从业人员社保的明细：
            </div>
            <div class="u-table-item">
                <div class="u-table-item1 fs10 u-com text-center" style="line-height:0.66rem;background-color:#E5ECFF;color:#4E8CEE;height:0.66rem;">
                    社保支出类型
                </div>
                <div class="u-table-item2 fs10 text-center" style="ine-height:0.66rem;background-color:#E5ECFF;color:#4E8CEE;" >
                     企业最低缴费金(元)
                </div>
            </div>
            <div class="u-table-item top-1">
                <div class="u-table-item1 lh-066 fs10">
                    养老保险
                </div>
                <div class="u-table-item2 text-center">
                    {{data[city][0]}}
                </div>
            </div>
            <div class="u-table-item top-2">
                <div class="u-table-item1 lh-066 fs10">
                    医疗保险
                </div>
                <div class="u-table-item2 text-center">
                    {{data[city][1]}}
                </div>
            </div>
             <div class="u-table-item top-3">
                <div class="u-table-item1 lh-066 fs10">
                    失业保险
                </div>
                <div class="u-table-item2 text-center">
                    {{data[city][2]}}
                </div>
            </div>
            <div class="u-table-item top-4">
                <div class="u-table-item1 lh-066 fs10">
                    工伤保险
                </div>
                <div class="u-table-item2 text-center">
                    {{data[city][4]}}
                </div>
            </div>
            <div class="u-table-item top-5">
                <div class="u-table-item1 lh-066 fs10">
                    生育保险
                </div>
                <div class="u-table-item2 text-center">
                  {{data[city][3]}}
                </div>
            </div>
            <div class="u-table-item top-6">
                <div class="u-table-item1 lh-066 fs10">
                    总计
                </div>
                <div class="u-table-item2 text-center">
                  {{data[city][5]}}
                </div>
            </div>
        </div>
        <div class="u-border"></div>
        <div class="btn fc-white mt50 btn-bg" style="width:calc(100% - 1.2rem);" @click="submit">
                寻求解决方案
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';

  const data = {
    '杭州':[465.02, 
          348.77,
          16.61,
          39.86,
          13.29,
          883.55],
    '宁波':[495.46, 
          318.51,
          17.70, 
          24.77, 
          7.08,
          863.52],
    '温州':[
      465.02 ,
      398.59,
      16.61,
      33.22,
      6.64,
      920.08 
    ],
    '绍兴':[
      465.08,
      208.78,
      16.61,
      25.05,
      8.35,
      723.87 
    ],
    '湖州':[
      465.08,
      282.37,
      16.61,
      29.90,
      6.64,
      800.60 
    ],
    '嘉兴':[
      464.80,
      313.50,
      16.60,
      16.60,
      6.64,
      818.14 
    ],
    '金华':[
      464.80,
      166.00,
      16.60,
      16.60,
      11.62,
      675.62 
    ],
    '台州':[
      464.80,
      232.40,
      16.60,
      16.60,
      9.96,
      740.36 
    ],
    '衢州':[
      465.08,
      265.76,
      16.61,
      16.61,
      6.64,
      770.70 
    ],
    '丽水':[
      441.00 ,
      189.00 ,
      15.75 ,
      18.90 ,
      6.30 ,
      670.95 
    ],
  }
  export default {
        data() {
          return {
            name:'',
            mobile:'',
            demand: 4,
            showBac: false,
            num:'',
            city:'',
            data:data,
            allYear:'',
            allMonth:''
          }
        },
        computed:{

        },
        watch:{

        },
        created(){
          const {isBoss}=this.$route.query
          if(isBoss=='1'){
              this.showBac = true;
          }else {
             this.showBac = false;
          }
        },
        mounted(){
          const {query} = this.$route;
          this.num = query.num;
          this.city = query.city;
          const {data,city,num} = this;
          this.allYear = String(parseInt(data[city][5]*num*12));
          this.allMonth = String(parseInt(data[city][5]*num));
          console.log(this.allYear)
        },
        destroyed(){

        },
        methods:{
          submit(){
            this.$router.push('counter3');
          }
        }
  }
</script>

<style scoped lang="scss">
 .top-1 {
    position:relative;
    top:-1px;
  }
  .top-2 {
    position:relative;
    top:-2px;
  }
  .top-3 {
    position:relative;
    top:-3px;
  }
  .top-4 {
    position:relative;
    top:-4px;
  }
  .top-5 {
    position:relative;
    top:-5px;
  }
  .top-6 {
    position:relative;
    top:-6px;
  }
  .lh-066 {
    line-height:0.66rem;
    height:0.66rem;
  }
  .text-center {
    width: 4.4rem;
    text-align:center;
    line-height: 1rem;
  }
.g-publicity {
  .u-publicity-img {
    width: 100%;
  }
  
}

.title1 {
  position:absolute;
  top:1.2rem;
  left:0.5rem;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color: #fff;
  text-shadow:0px 3px 20px rgba(8,30,49,0.16);
}
.title2 {
  position:absolute;
  top:2.4rem;
  left:2.8rem;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color: #fff;
  text-shadow:0px 3px 20px rgba(8,30,49,0.16);
  .num {
    color:#FFDD00;
  }
}
.title3 {
  position:absolute;
  top:3.6rem;
  left:1.5rem;
  font-family:Source Han Sans CN;
  font-weight:bold;
  color: #fff;
  text-shadow:0px 3px 20px rgba(8,30,49,0.16);
  .num {
    color:#FFDD00;
  }
}
.u-content {
  position:absolute;
  top:4.8rem;
  left:0.8rem;
  .u-title {
    color:#B9BABD;
    margin-bottom: 0.1rem;
  }
  .u-table-item {
    display:flex;
    width:6rem;
    height:1rem;
    border:1px solid #A6C5F6;
    .u-table-item1 {
      text-align: center;
      width:1.6rem;
      height:1rem;
      border-right: 1px solid #A6C5F6;
      color:#4E8CEE;
    }
    .u-com {
      height:1rem;
      line-height: 1rem;
    }
  }
 
}

.u-content2 {
   position:absolute;
   top:8.8rem;
   left:0.8rem;
   .u-title {
    color:#B9BABD;
    margin-bottom: 0.1rem;
  }
  .u-table-item {
    display:flex;
    width:6rem;
    height:0.66rem;
    border:1px solid #A6C5F6;
    .u-table-item1 {
      text-align: center;
      width:1.6rem;
      height:0.66rem;
      border-right: 1px solid #A6C5F6;
    }
    .u-table-item2 {
      text-align: center;
      width:4.4rem;
      height:0.66rem;
      line-height: 0.66rem;
    }
    .u-com {
      height:1rem;
      line-height: 1rem;
    }
  }
 
}
 .u-border {
    position:absolute;
    width:6.86rem;
    height:1px;
    background-color:#D9D9D9;
    top:14.4rem;
    left:0.32rem;
  }
  .btn-bg {
    position:absolute;
    top:14.2rem;
    left:0.66rem;
    background-color:#F96544;
  }
</style>
