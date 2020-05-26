<template>
    <div class="home">
        <Header @showEvent='isShowMenu()' ref="mychild" title="首页"/>
        <Nav @showList="isShowMenu()" v-show="showMenu"/>
        <section class="section-wrap">
            <div class="topPart">
                <!--<div class="topFirst">企业用工交易系统化管理平台</div>-->
                <!--<div class="topSec">赋能企业降本增效，提升企业核心竞争力</div>-->
                <div class="topThird">
                    <div class="preOrder" @click="goToPre"></div>
                </div>
            </div>
            <div class="switchBtnCon">
                <!--<div class="switchBtnFirst">万才网服务客户</div>
                <div class="switchBtnSec">将企业、外包服务商、新业态从业人员之间的关系进行系统化构建，</div>
                <div class="switchBtnThird">解决行业困局，实现多方合作共赢。</div>
                <div class="selectImgCon">
                    <div class="eachCon">
                        <div @click="setFocusIndex(1)">
                            <div class="imgParentCon">
                                <img class="sameImg" :src="oneNoActive" v-if="focusIndex == 1">
                                <img class="sameImg" :src="oneActive" v-else>
                            </div>
                            <div class="imgText" :class="{activeText:focusIndex == 1 }">企业及外包服务商</div>
                        </div>
                    </div>
                    <div class="eachCon">
                        <div @click="setFocusIndex(2)" class="setWidth">
                            <div class="imgParentCon ">
                                <img class="spImg" :src="twoNoActive" v-if="focusIndex == 2">
                                <img class="spImg" :src="twoActive" v-else>
                            </div>
                            <div class="imgText" :class="{activeText:focusIndex == 2 }">班务经理</div>
                        </div>
                    </div>
                    <div class="eachCon">
                        <div @click="setFocusIndex(3)" class="setWidth">
                            <div class="imgParentCon ">
                                <img class="sameImg" :src="threeNoActive" v-if="focusIndex == 3">
                                <img class="sameImg" :src="threeActive" v-else>
                            </div>
                            <div class="imgText" :class="{activeText:focusIndex == 3 }">新业态从业人员(蓝领)</div>
                        </div>
                    </div>
                </div>-->
            </div>
            <div class="textForSwitchCon">
                <!--<div v-if="focusIndex == 3">-->
                    <!--<div class="textSwitch1">适用系统：佳薪宝</div>-->
                    <!--<div class="textSwitch2">产品口号：让新业态从业人员收入更高，创业更简单。</div>-->
                    <!--<div class="textSwitch2">解决痛点：找工作难，赚不到钱，人身安全没保障，老板拖欠薪资。</div>-->
                <!--</div>-->
                <!--<div v-if="focusIndex == 2">-->
                    <!--<div class="textSwitch1">适用系统：蓝灵王</div>-->
                    <!--<div class="textSwitch2">产品功能：让天下没有难管的项目，提供无纸化、高效便捷的管理平台。</div>-->
                    <!--<div class="textSwitch2">解决痛点：人员管理效率低,内勤事务繁杂机械,考勤结算费时耗力,没有直观数据分析。</div>-->
                <!--</div>-->
                <!--<div v-if="focusIndex == 1">-->
                    <!--<div class="textSwitch1">适用系统：万才经理人</div>-->
                    <!--<div class="textSwitch2">产品口号：一款基于任务的撮合交易平台，将多方关系进行系统化构建。</div>-->
                    <!--<div class="textSwitch2">解决痛点：社保入税成本高，企业招聘难度大，员工管理效率低，旺季人手不足。</div>-->
                <!--</div>-->
            </div>
            <div class="fourBlocksCon">
                <!--<div class="blocksConTitle">万才网解决方案</div>-->
                <!--<div class=" resetblockPad">-->
                    <!--<div class="twoBlocksCon">-->
                        <!--<div class="eachBlockCon">-->
                            <!--<div class="blocksTitle">灵活用工解决方案</div>-->
                            <!--<div class="blocksBg">-->
                                <!--<div class="blocksText">-->
                                    <!--新业态从业人员在APP端抢单，企业可基于用人需求的波峰波谷、灵活地按需雇佣人才，有效解决突发性人员补充、临时性人员调遣的问题。-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="eachBlockCon">-->
                            <!--<div class="blocksTitle">合规用工解决方案</div>-->
                            <!--<div class="blocksBg">-->
                                <!--<div class="blocksText">-->
                                    <!--万才网将企业与员工的劳动关系转化为合作经营关系，在降低企业用工成本的同时规避了企业的用工风险，确保企业用工安全规范，省钱省心。-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="blockPad">-->
                    <!--<div class="twoBlocksCon">-->
                        <!--<div class="eachBlockCon">-->
                            <!--<div class="blocksTitle">财税统筹解决方案</div>-->
                            <!--<div class="blocksBg">-->
                                <!--<div class="blocksText">万才网将客户、人力资源外包服务商、项目经理人、新业态从业人员之间的业务关系进行系统化构建，为客户提供增值税专用发票。</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="eachBlockCon">-->
                            <!--<div class="blocksTitle">灵活用工解决方案</div>-->
                            <!--<div class="blocksBg">-->
                                <!--<div class="blocksText">万才网的人力资源管理系统，实现了移动排班考勤到记账发薪一体化线上操作。企业可实时监控项目完成进度、人员安排、劳动效率。-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <div class="newsCon">
                <div class="newsTitleCon">
                    <div class="newsTitleFirst">新闻资讯</div>
                    <div class="newsTitleSec">洞察市场前沿，关注最新动态</div>
                </div>
                <div class="padCon">
                    <div class="newsPicCon newsPicOne" @click="goToNews">
                        <!--<div class="newsPicFirst">公司新闻</div>-->
                        <!--<div class="newsPicSec">- 来自媒体的声音 -</div>-->
                    </div>
                    <div class="newsPicCon newsPicTwo" @click="goToNews">
                        <!--<div class="newsPicFirst">媒体报道</div>-->
                        <!--<div class="newsPicSec">- 来自媒体的声音 -</div>-->
                    </div>
                    <!--<div class="newsPicCon newsPicThree" @click="goToNews">-->
                        <!--<div class="newsPicFirst">常见问题</div>-->
                        <!--<div class="newsPicSec">- 来自媒体的声音 -</div>-->
                    <!--</div>-->
                </div>
            </div>

            <experience></experience>
        </section>
        <Footer/>
    </div>
</template>

<script>
    import Header from '../components/my-header'
    import Nav from '../components/menu'
    import Footer from '../components/my-footer'
    import experience from '@/components/experience'

    export default {
        components: {Header, Nav, Footer, experience},
        data() {
            return {
                focusIndex: 1,
                oneNoActive: require('../assets/images/home1Active.png'),
                oneActive: require('../assets/images/home1NoActive.png'),
                twoNoActive: require('../assets/images/home2Active.png'),
                twoActive: require('../assets/images/home2NoActive.png'),
                threeNoActive: require('../assets/images/home3Active.png'),
                threeActive: require('../assets/images/home3NoActive.png'),
                showMenu: false,
                tabIndex: 0,
                top: 0,
                subVisible: false,
                subText: '',
            }
        },
        mounted() {
        },
        methods: {
            goToPre() {
                this.$router.push({
                    name: 'subscribe',
                })
            },
            goToNews() {
                this.$router.push({
                    name: 'introduceInfo',
                })
            },
            setFocusIndex(index) {
                this.focusIndex = index;
            },
            //确认规模成本
            subConfirm: function () {
                let value = this.$refs.subPicker.getValues()[0];
                this.subText = value;
                this.subVisible = false;
            },
            //显示与隐藏菜单
            isShowMenu: function (params) {
                console.log(params);
                this.showMenu = !this.showMenu;
            },
            //根据icon显示对应消息
            tab: function (index) {
                this.tabIndex = index;
            },
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        background-color: #fff;

        .topPart {
            height: 4rem;
            padding-left: 0.37rem;
            padding-top:3rem;
            box-sizing: border-box;
            background-image: url("../assets/images/m_index_banner.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;

            .topFirst {
                color: #0E1421;
                font-size: 0.42rem;
                font-weight: bold;
                line-height: 0.55rem;
                margin-bottom: 0.24rem;
            }

            .topSec {
                font-size: 0.24rem;
                line-height: 0.33rem;
                font-weight: bold;
                margin-bottom: 0.6rem;
            }

            .topThird {
                .preOrder {
                    /*background-color: #3784FF;*/
                    height: 0.58rem;
                    width: 1.6rem;
                    text-align: center;
                    line-height: 0.58rem;
                    color: #fff;
                    font-size: 0.22rem;
                    border-radius: 0.27rem;
                }
            }
        }

        .selectImgCon {
            margin-top: 0.54rem;
            display: flex;
            padding-bottom: 0.25rem;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-content: center;
            align-items: center;

            .sameImg {
                height: 0.7rem;
                width: 0.8rem;
            }

            .spImg {
                width: 0.9rem;
                height: 0.7rem;
            }
        }

        .switchBtnCon {
            background: url("../assets/images/m_SaaS.png") no-repeat center center;
            background-size: 100% 100%;
            height:11.82rem;
            /*margin-bottom: 0.3rem;*/
            /*padding-top: 0.6rem;*/
            box-sizing: border-box;
            padding-left: 0.63rem;
            padding-right: 0.63rem;

            .switchBtnFirst {
                color: #0E1421;
                font-size: 0.42rem;
                font-weight: bold;
                text-align: center;
                line-height: 0.6rem;
                margin-bottom: 0.1rem;
            }

            .switchBtnSec {
                color: #4E4E51;
                font-size: 0.24rem;
                text-align: center;
                line-height: 0.36rem;
            }

            .imgText {
                text-align: center;
                font-size: 0.24rem;
                color: #3A3A3B;
                position: relative;
                margin-top: 0.2rem;

                &:after {
                    position: absolute;
                    content: "";
                    width: 100%;
                    height: 0.04rem;
                    background-color: rgba(255, 255, 255, 0);
                    bottom: -0.25rem;
                    left: 0;
                }
            }

            .activeText {
                color: #3784FF;

                &:after {
                    background-color: #3784FF;
                }
            }

            .imgParentCon {
                text-align: center;
            }

            .setWidth {
                /*width: 1.14rem;*/
                margin: 0 auto;
            }

            .switchBtnThird {
                color: #4E4E51;
                font-size: 0.24rem;
                text-align: center;
                line-height: 0.36rem;
            }
        }

        .textForSwitchCon {
            /*padding-left: 0.63rem;*/
            /*padding-right: 0.63rem;*/
            box-sizing: border-box;
            height:9.6rem;
            /*margin-bottom: 0.8rem;*/
            background: url("../assets/images/m_advantage.png") no-repeat center center;
            background-size:100% 100%;
            .textSwitch1 {
                font-weight: bold;
                font-size: 0.28rem;
                height: 0.4rem;
                line-height: 0.4rem;
                color: #3A3A3B;
                margin-bottom: 0.24rem;
            }

            .textSwitch2 {
                font-size: 0.24rem;
                color: #3A3A3B;
                line-height: 0.36rem;
                height: 0.72rem;
            }
        }

        .eachCon {
            width: 1.95rem;
        }

        .fourBlocksCon {
            height: 7.16rem;
            background: url("../assets/images/m_partner.png") no-repeat center center;
            background-size:100% 100%;
            .blocksConTitle {
                color: #383D41;
                font-size: 0.42rem;
                line-height: 0.5rem;
                margin-bottom: 0.46rem;
                text-align: center;
                font-weight: bold;
            }

            .eachBlockCon {
                box-sizing: border-box;
                padding-left: 0.3rem;
                width: 3.25rem;
                height: 4rem;
                background-color: #fff;
                position: relative;
                box-shadow: 0px 0px 16px rgba(106, 106, 106, 0.1);
            }

            .blockPad {
                height: 4rem;
                background-image: url("../assets/images/homeSolve1.png");
                background-position: center 20%;
                background-size: contain;
                background-repeat: repeat-x;
                margin-bottom: 0.5rem;
            }

            .resetblockPad {
                height: 4rem;
                background-image: url("../assets/images/homeSolve1.png");
                background-position: center 20%;
                background-size: contain;
                background-repeat: repeat-x;
                margin-bottom: 0.3rem;
            }

            .twoBlocksCon {
                padding-left: 0.37rem;
                padding-right: 0.37rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-content: center;
                align-items: center;

                .blocksTitle {
                    color: #0E1421;
                    margin-top: 0.3rem;
                    font-size: 0.28rem;
                    line-height: 0.4rem;
                    font-weight: bold;
                    margin-bottom: 0.1rem;
                }

                .blocksBg {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    height: 80%;
                    width: 3.2rem;
                    padding-left: 0.25rem;
                    box-sizing: border-box;
                    background-image: url("../assets/images/homeSolve2.png");
                    background-position: bottom;
                    background-size: contain;
                    background-repeat: repeat-x;
                    background-color: #fff;
                    padding-bottom: 1rem;
                }

                .blocksText {
                    /*                    width: 2.7rem;*/
                    box-sizing: border-box;
                    padding-right: 0.2rem;
                    color: #666;
                    font-size: 0.24rem;
                }
            }
        }

        .newsCon {
            margin-top: 0.8rem;
            background-image: url("../assets/images/lightBlue.png");
            background-position: bottom;
            background-size: contain;
            background-repeat: no-repeat;
            padding-bottom: 1.2rem;

            .newsTitleCon {
                margin-bottom: 0.8rem;

                .newsTitleFirst {
                    color: #0E1421;
                    font-size: 0.42rem;
                    text-align: center;
                    line-height: 0.6rem;
                    font-weight: bold;
                    margin-bottom: 0.12rem;
                }

                .newsTitleSec {
                    font-size: 0.24rem;
                    color: #4E4E51;
                    text-align: center;
                    line-height: 0.33rem;
                }
            }

            .padCon {
                padding-left: 0.6rem;
                padding-right: 0.6rem;
                box-sizing: border-box;
            }

            .newsPicCon {
                height:1.8rem;
                color: #fff;
                text-align: center;
                margin-top: 0.4rem;
                background-repeat: no-repeat;
                background-size: contain;
            }

            .newsPicOne {
                background: url("../assets/images/m_company_news.png") no-repeat center center;
                background-size:100% 100%;
            }

            .newsPicTwo {
                background: url("../assets/images/m_media_news.png") no-repeat center center;
                background-size:100% 100%;
            }

            .newsPicThree {
                background-image: url("../assets/images/homeNews3.png");
            }

            .newsPicFirst {
                font-size: 0.38rem;
                line-height: 0.53rem;
                padding-top: 0.94rem;
                margin-bottom: 0.12rem;
                font-weight: bold;
            }

            .newsPicSec {
                font-size: 0.32rem;
            }
        }
    }
</style>