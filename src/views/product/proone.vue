<template>
    <div class="pro-one">
        <!--<Header @showEvent='isShowMenu()' ref="mychild" title=""/>-->
        <!--<Nav @showList="isShowMenu()" v-show="showMenu"/>-->
        <!--<Banner class="bg-305-1" v-bind:message='info'/>-->
        <div class="tc fs36 fs-bold">
            服务群体
        </div>
        <ul class="tc company-ul">
            <li>
                <img src="../../assets/images/company.png" alt="">
                <h5>企业商家</h5>
                <p>有营业执照</p>
            </li>
            <li>
                <img src="../../assets/images/company_person.png" alt="">
                <h5>个人商家</h5>
                <p>无营业执照的“工头”</p>
            </li>
            <li>
                <img src="../../assets/images/company_manager.png" alt="">
                <h5>企业员工</h5>
                <p>企业下附属的管理者</p>
            </li>
        </ul>
        <section class="pro-advantage bg-white">
            <ul class="tc">
                <li>
                    <h3>智慧SaaS管理：提效率、降成本</h3>
                    <p>万才网实现了移动端智能排班、考勤、结算、发薪一体化线上操作流程，帮助企业从繁杂的事务性工作中解脱出来，减少人员开支</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>自动排班——解除手动排班的繁琐</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>线上考勤——人脸打卡，虚签0概率</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>智能结算——自动结算，精确省事</span>
                    </p>
                    <img style="margin-top: 0" class="img-305" src="../../assets/images/3.png" alt="">
                </li>
                <li>
                    <h3>数据报表：投入产出比一目了然</h3>
                    <p>平台可提供多维度的生产能效、项目利润分析报表，实时、可视化显示项目情况，精准管理分析，深挖数据背后的价值！</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>考勤数据——线上打卡数据实时可查</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>项目利润表——利润情况心中有数</span>
                    </p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>生产效能表——现场效率一目了然</span>
                    </p>
                    <img class="img-305" src="../../assets/images/11.png" alt="">
                </li>
                <li>
                    <h3>合法合规：规避企业用工风险</h3>
                    <p>新业态从业人员经由万才网平台转化，将劳动（务）雇佣关系转化为合作经营关系，在降低企业用工成本的同时规避了企业的用工风险。</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>外包模式——无社保费用，降低成本</span>
                    </p>
                    <img class="img-305" src="../../assets/images/2.png" alt="">
                </li>
                <li>
                    <h3>商保服务：灵活配置、24h保障</h3>
                    <p>万才网商业保险，按天购买、打卡生效！可灵活自主选择医疗、工伤额度！确保人员出现工伤事故时，极大地降低企业风险成本！</p>
                    <p class="p-icon">
                        <img src="../../assets/images/ok.png" alt=""><span>一键购险— 实时生效，保障无忧</span>
                    </p>
                    <img class="img-305" src="../../assets/images/4.png" alt="">
                </li>
            </ul>
        </section>
        <section class="box-305-com">
            <h2>成功案例 <span></span></h2>
            <h3><img class="company-cir-img" src="../../assets/images/haicang_logo.png" alt="">海仓科技</h3>
            <div class="item">
                <strong>公司简介：</strong>
                <span>海仓科技是一家从事跨境电商供应链服务、智能仓储设备研发与集成的综合型企业。公司业务范围涵盖仓储运营管理、线上云商、仓储技术、供应链金融、自营电商平台、智能仓规划建设、仓储自动化设备研发和软硬件服务等，并与考拉海购、云集等跨境电商平台建立长期战略合作伙伴关系。</span>
            </div>
            <div class="item">
                <strong>存在痛点：</strong>
                <span>如何对已合作的多家外包服务商进行统一的系统化管理，传统的管理方式效率低且信息不准确。</span>
            </div>
            <div class="item">
                <strong>解决方案：</strong>
                <span>通过对实际业务场景的数据采集实现智能化数字化管理，大大减少企业内部繁琐的事务性工作，使得企业在外包商管理这个模块正真实现成本的降低和效率的提成。</span>
            </div>
            <div class="item">
                <strong></strong>
                <span class="span-img-wrap">
                    <img src="../../assets/images/company/hc1.jpg" alt="">
                    <img src="../../assets/images/company/hc2.jpg" alt="">
                    <img src="../../assets/images/company/hc3.jpg" alt="">
                    <img src="../../assets/images/company/hc4.jpg" alt="">
                </span>
            </div>
        </section>
        <!--<mt-swipe :auto="4000">-->
        <!--<mt-swipe-item>-->
        <!--<section class="box-305-com">-->
        <!--<h2>成功案例 <span></span></h2>-->
        <!--<h3>钜锋人力</h3>-->
        <!--<div class="item">-->
        <!--<strong>公司简介：</strong>-->
        <!--<span>钜锋人力资源开发有限公司成立于2017年，致力于从事劳务派遣、人力资源外包服务。向浙江省内的企业输送大批次的新业态从业人员需求！</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong>存在痛点：</strong>-->
        <!--<span>社保不灵活、费用过高；企业长期招聘难，招聘成本高；人员管理难，效率极低;</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong>解决方案：</strong>-->
        <!--<span>通过平台缴纳社保，一天1元打卡生效，降低成本和风险；通过微团模式完成用工需求，降低招聘成本；运用新业态从业人员管理SaaS平台智能排班考勤，结算发薪一站式高效操作，提升效率。</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong></strong>-->
        <!--<span>-->
        <!--<img src="http://test.api.10000rc.com/company/jf3.jpg" alt="">-->
        <!--<img src="http://test.api.10000rc.com/company/jf2.jpg" alt="">-->
        <!--</span>-->
        <!--</div>-->
        <!--</section>-->
        <!--</mt-swipe-item>-->
        <!--<mt-swipe-item>-->
        <!---->
        <!--</mt-swipe-item>-->
        <!--<mt-swipe-item>-->
        <!--<section class="box-305-com">-->
        <!--<h2>成功案例 <span></span></h2>-->
        <!--<h3>海宁汇鑫</h3>-->
        <!--<div class="item">-->
        <!--<strong>公司简介：</strong>-->
        <!--<span>海宁汇鑫服务外包有限公司是华东地区领先的蓝领（人力资源）外包服务供应商之一，通过丰富的劳动力资源、专业的服务经验和先进的管理体系，为客户提供系统、全面的蓝领供应及整体外包服务解决方案。</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong>存在痛点：</strong>-->
        <!--<span>对于新业态从业人员的商保不及时、不灵活，传统管理方式效率低，薪资结算流程太过繁杂。</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong>解决方案：</strong>-->
        <!--<span>通过系统化工作环节的提升，管理者可快速了解项目进展和结果，同一岗位（排班/考勤/后勤/招聘）所需人员减少，降低企业成本。薪资不会出差错，增加新业态从业人员和企业的粘性，减少流失率，用人更加稳定。</span>-->
        <!--</div>-->
        <!--<div class="item">-->
        <!--<strong></strong>-->
        <!--<span>-->
        <!--<img src="http://test.api.10000rc.com/company/hx1.jpg" alt="">-->
        <!--<img src="http://test.api.10000rc.com/company/hx4.jpg" alt="">-->
        <!--</span>-->
        <!--</div>-->
        <!--</section>-->
        <!--</mt-swipe-item>-->
        <!--</mt-swipe>-->
        <!--<Slide/>-->
        <!--<FormCom/>-->
        <!--<experience></experience>-->
        <!--<Footer/>-->
    </div>
</template>

<script>
    import Vue from 'vue';
    // import Header from '../../components/my-header'
    // import Nav from '../../components/menu'
    // import Footer from '../../components/my-footer'
    // import Banner from '../../components/pro-banner'
    // import Slide from '../../components/slide'
    // import Problem from '../../components/pro-blem'
    // import FormCom from '../../components/form'
    // import experience from '../../components/experience'


    export default {
        // components: {Header, Nav, Footer, Banner, Slide, FormCom, Problem, experience},
        data() {
            return {
                showMenu: false,
                info: {
                    title: '企业及外包服务商',
                    text: '赋能企业降本增效，提升企业核心竞争力',
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
    .pro-one {
        .bg-305-1 {
            background: url("../../assets/images/305-1.png") no-repeat center center;
            background-size: 100% 100%;
        }

        .company-ul {
            display: flex;
            margin: .8rem auto 0;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            width: 95%;
            flex-direction: row;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 33.3%;

                h5 {
                    color: #333;
                    font-size: .32rem;
                    padding: .3rem 0 .2rem;
                }

                p {
                    color: #666;
                    font-size: .18rem;
                    white-space: nowrap;
                    transform: scale(.9);
                }

                img {
                    display: flex;
                    width: 1.2rem;
                    height: 1.2rem;
                }
            }
        }

        .pro-advantage {
            padding: .52rem .35rem .55rem;

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

        .box-305-com {
            padding: .6rem .8rem .68rem;
            background-color: #fff !important;

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

            .item {
                padding-top: .3rem;
                display: flex;
                flex-direction: column;
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
                        margin-bottom: .3rem;
                        z-index: 0;
                    }

                    img:hover {
                        transform: scale(1.3);
                        transition: .3s;
                        z-index: 2;
                    }
                }
            }
        }

    }
</style>
