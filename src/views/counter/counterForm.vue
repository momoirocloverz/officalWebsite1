<template>
    <section>
        <div class="g-home-form">
            <span class="fs12" style="color:#306ED5">选择城市:</span>
            <div class="pos-r pt20 u-select" @click="selectSub">
                <div class="input">
                  {{system}}
                </div>
               <i class="icon-jt jt-r" style="position:relative;left:4.75rem;top:-0.35rem;"></i>
            </div>
            <span class="fs12" style="color:#306ED5">最低缴纳基数:</span>
            <div class="mb40 pt20">
              <!-- <input @focus="changeBottom(1)" @blur="changeBottomBlur(3)" type="text" v-model="name">-->
              <div class="input">
                <div class="fs13">{{sysListMap[system]}}</div><div class="fs12" style="margin-right:0.1rem">元</div>
              </div>
            </div>
            <span class="fs12" style="color:#306ED5">劳务外包人数:</span>
            <div class="mb40 pt20 ">
                <div class="input">
                  <input class="u-input" v-model="num"/><div class="fs12" style="margin-right:0.1rem">人</div>
              </div>
            </div>
            <div class="btn fc-white mt50 btn-bg" style="width:calc(100% - 1.2rem);" @click="submit">
                计算
            </div>
        </div>
        <mt-popup v-model="systemVisible" position="bottom" class="mint-popup">
            <mt-picker :slots="sysList" :visible-item-count="5" :show-toolbar="true" ref="sysPicker" @touchmove.prevent>
                <div @click="sysConfirm()" class="sure">确认</div>
            </mt-picker>
        </mt-popup>
    </section>
</template>

<script>
  import Vue from 'vue'
// <li data-value="1">灵活用工</li>
//             <li data-value="2">财务统筹</li>
//             <li data-value="3">商保服务</li>
//             <li data-value="4">社保合规用工</li>
//             <li data-value="5">新业态从业人员管理优化</li>
export default {
  props:{},
  data () {
    return {
        system:'杭州',
        demand:'1',
        name:'',
        mobile:'',
        num:'',
        sysList:[
            {
                flex: 1,
                values: ['杭州','宁波','温州','绍兴','湖州','嘉兴','金华','台州','衢州','丽水',],
                className: "slot1",
                textAlign: "center",
            },
        ],
        sysListMap:{
          '杭州':3321.6,
          '宁波':3539,
          '温州':3321.6,
          '绍兴':3322,
          '湖州':3322,
          '嘉兴':3320,
          '金华':3320,
          '台州':3320,
          '衢州':3322,
          '丽水':3150,

        },
        systemVisible:false,
    }
  },
  created(){
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{//查看对应规模分析价格
      sysConfirm:function(){
          let _this = this;
          let value = _this.$refs.sysPicker.getValues()[0];
          _this.system = value;
          switch (_this.system) {
              case '灵活用工':
                  _this.demand = '1';
                  break;
              case '财务统筹':
                  _this.demand = '2';
                  break;
            case '商保服务':
                  _this.demand = '3';
                  break;
              case '社保合规用工':
                  _this.demand = '4';
                  break;
                  case '新业态从业人员管理优化':
                  _this.demand = '5';
                  break;
             
          }
          _this.systemVisible = false;
          console.log(_this.demand);
      },
      selectSub: function(){
          this.systemVisible = true;
      },
      changeBottom: function(type){
            console.log(type)
          this.$emit('changeBottom',type)
      },
      changeBottomBlur: function(type){
            console.log(type)
          this.$emit('changeBottomBlur',type)
      },
      submit: function () {
          let _this = this;
          if(!this.num){
            this.$toast('请输入人数')
          }else {
            this.$router.push({name:'counter2',query:{num:this.num,city:this.system}});
          }
      }
  }
}
</script>

<style lang="scss">
    .g-home-form{
        padding:1rem .65rem;
        .u-select {
          input{
            display: block;
            background-color:#F5F6F8;
            height:.6rem;
            width:calc(100% - 1.2rem);
            line-height:.6rem;
            text-indent:.3rem;
            border:1px solid #D9D9D9;
          }
        }
        .input {
            display: flex;
            background-color:#F5F6F8;
            height:.6rem;
            width:calc(100% - 1.2rem);
            line-height:.6rem;
            text-indent:.3rem;
            border:1px solid #D9D9D9;
            justify-content: space-between;
        }
        .jt-r{
            position: absolute;
            right:.15rem;
            top:calc(50% + .05rem);
            transform: translateY(-50%);
        }
        .u-input {
          width: 5.5rem;
          padding-left:0.2rem;
          background-color: transparent;
          border:none;
        }
        .btn-bg {
          background:linear-gradient(135deg,rgba(255,192,17,1) 0%,rgba(255,153,20,1) 100%);
          box-shadow:0px 10px 10px rgba(219,130,20,0.26);
        }
    }
</style>
