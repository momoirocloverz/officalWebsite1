<template>
    <div class="pro-two">

        <!--<Banner class="bg-305-2" v-bind:message = 'info'/>-->
        <!--<Problem :pro = 'problem'/>-->
        <section class="pro-advantage bg-white">
            <ul class="tc">
                <li>
                    <h3>考勤薪资数据可视化，有据可查</h3>
                    <p>零工通过平台排班考勤，所有数据明细一应俱全，可实时查询核对、明明白白，有据可查！</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>排班明细——每份结算可查明细</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>考勤数据</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>奖惩扣款明细——扣款原因一目了然</span>
                    </p>
                    <img class="img-305" src="../../assets/images/6.png" alt="">
                </li>
                <li>
                    <h3>商业保险，保障你的人身安全</h3>
                    <p>平台内零工，均享受24h、灵活、即时保障的商保服务，保障零工的人身安全</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>意外险—打卡系统即自动购险</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>保险记录—历史保险记录可查</span>
                    </p>
                    <img class="img-305" src="../../assets/images/7.png" alt="">
                </li>
                <li>
                    <h3>线上发薪，快速便捷有保障</h3>
                    <p>平台采用线上发薪方式，发薪明细、进展实时掌控，无需走访讨薪，坐收收入有保障</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>排班日历—结算进度实时可追踪</span>
                    </p>
                    <img class="img-305" src="../../assets/images/8.png" alt="">
                </li>
                <li>
                    <h3>线上发薪，快速便捷有保障</h3>
                    <p>平台采用线上发薪方式，发薪明细、进展实时掌控，无需走访讨薪，坐收收入有保障</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>排班日历—结算进度实时可追踪</span>
                    </p>
                    <img class="img-305" src="../../assets/images/8.png" alt="">
                </li>
                <li>
                    <h3>信息对称：线上动态消息，实时接收</h3>
                    <p>平台对零工排班情况、上工时间、其他说明等消息及时推送提醒，在线实时查询工作安排情况，避免因信息不对称造成的麻烦，做到心中有数，不混乱！</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>push推送——线上即时消息推送</span>
                    </p>
                    <img class="img-305" src="../../assets/images/12.png" alt="">
                </li>
            </ul>
        </section>
        <section class="box-305-com">
            <h2>成功案例 <span></span></h2>
            <h3><img class="company-cir-img" src="../../assets/images/youzheng_logo.png" alt="">中国邮政</h3>
            <div class="item">
                <strong>公司简介：</strong>
                <span>浙江万才物流是经邮政管理局批准的具有邮件收寄、分拣、投递资质，专业从事邮件处理、仓储配送服务的大型物流企业，公司现已拥有员工2000多名。</span>
            </div>
            <div class="item">
                <strong>存在痛点：</strong>
                <span>死守一份工作，很难赚到钱；发薪资时常出现迟发、漏发等情况；</span>
            </div>
            <div class="item">
                <strong>解决方案：</strong>
                <span>采用线上优化管理模式，一站式排班考勤核算发薪，员工可根据排班时间合理安排下一份工作的时间，提升效率的同时，钱也比以前赚更多，薪资从此不再拖欠。</span>
            </div>
            <div class="item">
                <strong></strong>
                <span class="span-img-wrap">
                    <img src="../../assets/images/company/wc1.jpg" alt="">
                    <img src="../../assets/images/company/wc2.jpg" alt="">
                    <img src="../../assets/images/company/wc3.jpg" alt="">
                    <img src="../../assets/images/company/wc4.jpg" alt="">
                </span>
            </div>
        </section>
        <!--<Slide/>-->
        <!--<FormCom/>-->
        <!--<experience></experience>-->
        <!--<Footer/>-->
    </div>
</template>

<script>
    import Vue from 'vue';
    // import Banner from '../../components/pro-banner'
    // import Slide from '../../components/slide'
    // import Problem from '../../components/pro-blem'
    // import FormCom from '../../components/form'


    export default {
        // components: {Banner, Slide, FormCom, Problem},
        data() {
            return {
                showMenu: false,
                info: {
                    title: '新业态从业人员(蓝领)',
                    text: '让新业态从业人员收入更高，创业更简单',
                },
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {

        },
        destroyed() {

        },
        methods: {
            isShowMenu: function (params) {
                console.log(params);
                this.showMenu = !this.showMenu;
            },
        }
    }
</script>

<style lang="scss">
    .pro-two {
        .bg-305-2 {
            background: url("../../assets/images/305-3.png") no-repeat center center;
            background-size: 100% 100%;
        }

        .box-305-com {
            h2 {
                position: relative;
                text-align: center;
                font-size: .42rem;
                padding-bottom: .2rem;
                margin-bottom: .3rem;

                span {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    margin: auto;
                    width: .5rem;
                    height: .06rem;
                    background-color: #3784FF;
                }
            }

            h3 {
                font-size: .28rem;
            }

            padding: .6rem .8rem .68rem;

            .item {
                padding-top: .3rem;
                flex-direction: column;
                display: flex;
                justify-content: space-between;
                align-items: start;
                line-height: 1.7;

                .span-img-wrap {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-direction: row;
                    flex-wrap: wrap;
                }

                strong {
                    display: flex;
                    font-weight: 500;
                    font-size: .24rem;
                }

                span {
                    display: flex;
                    justify-content: space-between;
                    font-size: .24rem;
                    color: #666666;

                    img {
                        display: flex;
                        width: 2.8rem;
                        height: 1.6rem;
                        transform: scale(1);
                        transition: .3s;
                        position: relative;
                        z-index: 0;
                        margin-bottom: .3rem;
                    }

                    img:hover {
                        transform: scale(1.3);
                        transition: .3s;
                        z-index: 2;
                    }
                }
            }
        }

        .pro-advantage {
            padding: 0 .35rem .55rem;

            ul {
                li {
                    text-align: center;

                    img.img-305 {
                        display: block;
                        width: 100%;
                        margin-top: .2rem;
                        margin-bottom: .35rem;
                    }

                    p {
                        font-size: .24rem;
                        color: #565656;
                        padding: 0 .8rem;
                    }

                    .p-icon {
                        display: flex;
                        padding-top: .26rem;
                        padding-left: 1.6rem;
                        justify-content: start;
                        align-items: center;

                        img {
                            display: flex;
                            width: .3rem;
                            height: .3rem;
                            margin-right: .1rem;
                        }
                    }
                }
            }

            h3 {
                i {
                    display: flex;
                    width: 0.27rem;
                    height: .27rem;
                    margin-right: .2rem;
                    background-color: #4E8CEE;
                }

                display: flex;
                margin-top: .25rem;
                margin-bottom: .2rem;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: .36rem;
                font-weight: 600;
            }
        }
    }

</style>
