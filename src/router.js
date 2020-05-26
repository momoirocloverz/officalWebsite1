import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import( /* webpackChunkName: 'Home' */ './views/home.vue');
const Product = () => import( /* webpackChunkName: 'Product' */ './views/product.vue');
// const ProOne = () => import( /* webpackChunkName: 'ProOne' */ './views/product/proone.vue');
// const ProTwo = () => import( /* webpackChunkName: 'ProTwo' */ './views/product/protwo.vue');
const Finance = () => import( /* webpackChunkName: 'Finance' */ './views/finance.vue');
const LogisticsDetail = () => import( /* webpackChunkName: 'LogisticsDetail' */ './views/logisticsDetail.vue');
const Subscribe = () => import( /* webpackChunkName: 'LogisticsDetail' */ './views/subscribe.vue');

const AboutUs = () => import( /* webpackChunkName: 'AboutUs' */ './views/aboutus.vue');
// const CompanyInfo = () => import( /* webpackChunkName: 'CompanyInfo' */ './views/aboutus/companyinfo.vue');
const Agreement = () => import( /* webpackChunkName: 'CompanyInfo' */ './views/aboutus/agreement.vue');
// const Certificate = () => import( /* webpackChunkName: 'CompanyInfo' */ './views/aboutus/certificate.vue');
// const Contact = () => import( /* webpackChunkName: 'Contact' */ './views/aboutus/contact.vue');

const Down = () => import( /* webpackChunkName: 'Down' */ './views/down.vue');
const IntroduceInfo = () => import( /* webpackChunkName: 'Down' */ './views/introduceInfo.vue');
const IntroduceDetail = () => import( /* webpackChunkName: 'Down' */ './views/introduce/introduceDetail.vue');
const Publicity = () => import( /* webpackChunkName: 'Down' */ './views/publicity.vue');
const PublicityTwo = () => import( /* webpackChunkName: 'Down' */ './views/publicityTwo.vue');

const Counter1 = () => import( /* webpackChunkName: 'Down' */ './views/counter/counter1.vue');
const Counter2 = () => import( /* webpackChunkName: 'Down' */ './views/counter/counter2.vue');
const Counter3 = () => import( /* webpackChunkName: 'Down' */ './views/counter/counter3.vue');

const ShareApp = () => import( /* webpackChunkName: 'Down' */ './views/share/shareApp.vue');
const ShareApp2 = () => import( /* webpackChunkName: 'Down' */ './views/share/shareApp2.vue');

const serviceMaster = () => import(/* webpackChunkName: 'service' */ '@/views/service/serviceMaster.vue');
const service1 = () => import(/* webpackChunkName: 'service' */ '@/views/service/service1.vue');
const service2 = () => import(/* webpackChunkName: 'service' */ '@/views/service/service2.vue');
const service3 = () => import(/* webpackChunkName: 'service' */ '@/views/service/service3.vue');
//帮助中心
const Nav = () => import(/* webpackChunkName: 'service' */ '@/views/help/nav.vue');
const Help = () => import(/* webpackChunkName: 'service' */ '@/views/help/home.vue');
const Question = () => import(/* webpackChunkName: 'service' */ '@/views/help/rangeList.vue');

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        alias: '首页',
        meta: {
            show: true
        }
    },
    {
        path: '/counter1',
        name: 'counter1',
        component: Counter1,
        alias: '宣传',
        meta: {
            show: false,
        }
    },
    {
        path: '/counter2',
        name: 'counter2',
        component: Counter2,
        alias: '宣传',
        meta: {
            show: false,
        }
    },
    {
        path: '/counter3',
        name: 'counter3',
        component: Counter3,
        alias: '宣传',
        meta: {
            show: false,
        }
    },
    {
        path: '/shareApp',
        name: 'shareApp',
        component: ShareApp,
        alias: '分享',
        meta: {
            show: false,
        }
    },
    {
        path: '/shareApp2',
        name: 'shareApp2',
        component: ShareApp2,
        alias: '分享',
        meta: {
            show: false,
        }
    },
    {
        path: '/publicity',
        name: 'publicity',
        component: Publicity,
        alias: '宣传',
        meta: {
            show: false,
        }
    },
    {
        path: '/publicityTwo',
        name: 'publicityTwo',
        component: PublicityTwo,
        alias: '宣传2',
        meta: {
            show: false,
        }
    },
    {
        path: '/introduceDetail',
        name: 'introduceDetail',
        component: IntroduceDetail,
        alias: '资讯详情',
        meta: {
            show: false,
        },
    },
    {
        path: '/product',
        name: 'product',
        alias: '产品服务',
        component: Product,
        meta: {
            show: true
        },
        // children: [
        //     {
        //         path: '/product/proone',
        //         name: 'proone',
        //         component: ProOne,
        //         alias: '企业及外包服务商',
        //         meta: {
        //             keepAlive: false
        //         }
        //     },
        //     {
        //         path: '/product/protwo',
        //         name: 'protwo',
        //         component: ProTwo,
        //         alias: '新业态从业人员(蓝领)',
        //         meta: {
        //             keepAlive: false
        //         }
        //     },
        //     {
        //         path: '/product/prothree',
        //         name: 'prothree',
        //         component: ProThree,
        //         alias: '班务经理',
        //         meta: {
        //             keepAlive: false
        //         }
        //     },
        //     // {
        //     //     path: '/product/profour',
        //     //     name: 'profour',
        //     //     component: ProFour,
        //     //     alias: '众包招聘系统',
        //     //     meta: {
        //     //         keepAlive: false,
        //     //     }
        //     // },
        //     // {
        //     //     path: '/product/profive',
        //     //     name: 'profive',
        //     //     component: ProFive,
        //     //     alias: '新业态从业人员自由接单',
        //     //     meta: {
        //     //         keepAlive: false
        //     //     }
        //     // },
        // ]
    },
    {
        path: '/finance',
        name: 'finance',
        component: Finance,
        alias: '客户案例',
        meta: {
            keepAlive: false,
            show: true,
        }
    },
    {
        path: '',
        name:'helpNav',
        component: Nav,
        alias: '帮助中心',
        meta: {
            keepAlive: false,
            show: false,
        },
        children: [
            {
                path: '/help',
                name: 'help',
                component:Help,
                alias: '帮助中心',
                meta: {
                    keepAlive: false,
                    show: false,
                }
            },{
                path: '/help/question',
                name: 'question',
                component:Question,
                alias: '问题分类',
                meta: {
                    keepAlive: false,
                    show: false,
                }
            },
        ]
    },
    {
        path: '/logisticsDetail',
        name: 'logisticsDetail',
        component: LogisticsDetail,
        alias: '物流详情',
        meta: {
            keepAlive: false,
            show: false,
        }
    },
    {
        path: '/subscribe',
        name: 'subscribe',
        component: Subscribe,
        alias: '预约',
        meta: {
            keepAlive: false,
            show: false,
        }
    },
    {
        path: '/agreement',
        name: 'agreement',
        component: Agreement,
        alias: '协议',
        meta: {
            keepAlive: false,
            show: false,
        }
    },
    {
        path: '/introduceInfo',
        name: 'introduceInfo',
        component: IntroduceInfo,
        alias: '行业资讯',
        meta: {
            show: true,
        },
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        alias: '关于我们',
        component: AboutUs,
        meta: {
            show: true,
        },
        // children: [
        //     {
        //         path: '/aboutus/companyinfo',
        //         name: 'companyinfo',
        //         component: CompanyInfo,
        //         alias: '公司介绍',
        //         meta: {
        //             keepAlive: false
        //         }
        //     },
        //     {
        //         path: '/aboutus/certificate',
        //         name: 'certificate',
        //         component: Certificate,
        //         alias: '资质证明',
        //         meta: {
        //             keepAlive: false
        //         }
        //     },
        //     {
        //         path: '/aboutus/contact',
        //         name: 'contact',
        //         component: Contact,
        //         alias: '联系我们',
        //         meta: {
        //             keepAlive: false
        //         }
        //     }
        // ]
    },
    {
        path: '/down',
        name: 'down',
        component: Down,
        alias: '下载中心',
        meta: {
            keepAlive: false,
            show: true,
        }
    },
    {
        path: '',
        name: 'serviceMaster',
        component: serviceMaster,
        alias: '服务',
        meta: {
            show: false
        },
        children: [
            {
                path: '/serviceMaster/service1',
                name: 'service1',
                component: service1,
                alias: 'service1',
                meta: {
                    show: false,
                }
            },
            {
                path: '/serviceMaster/service2',
                name: 'service2',
                component: service2,
                alias: 'service2',
                meta: {
                    show: false,
                }
            },
            {
                path: '/serviceMaster/service3',
                name: 'service3',
                component: service3,
                alias: 'service3',
                meta: {
                    show: false,
                }
            },
        ],
    },
];
const router = new Router({
    mode: 'hash',
    scrollBehavior: () => ({y: 0}),
    routes,
})
router.beforeEach((to, from, next) => {
    next();
});
export default router