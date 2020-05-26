import {
    httpPost,
    httpGet,
    AxiosGet
} from './http'

export default {
    //预约
    saveOld: (param) => {
        return httpPost(`/biz/appointmentRecord/save`, param)
    },
    save: (param) => {
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            if (process.env.VUE_APP_TITLE == 'pre') {
                url = 'http://pre.api.10000rc.com/pre';
            } else if (process.env.VUE_APP_TITLE == 'test') {
                url = 'http://test.api.10000rc.com';
            } else {
                url = 'http://www.10000rc.com';
            }
        }
        return httpPost(`${url}/orgrimar/appointment/add`, param)
    },
    getInfoList: (data) => {
        const {pageNum, pageSize, title, status} = data;
        return httpGet(`/biz/informaion/getInfomationByTitle?pageNum=${pageNum}&pageSize=${pageSize}&title=${title}&status=${status}`)
    },
    addRead: (id) => {
        return httpGet(`/biz/informaion/getHotArticleList?id=${id}`)
    },
    getIndustry: (param) => {
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            if (process.env.VUE_APP_TITLE == 'pre') {
                url = 'http://pre.api.10000rc.com/pre';
            } else if (process.env.VUE_APP_TITLE == 'test') {
                url = 'http://test.api.10000rc.com';
            } else {
                url = 'http://www.10000rc.com';
            }
        }
        return httpGet(`${url}/orgrimar/dictionary/getByCodeAndLevel`,param)
    },
    getDetail: (id) => {
        return httpGet(`/biz/informaion/getDetailPortal?id=${id}`)
    },
    shareSDK: (param) => { //微信绑定
        return httpGet(`/public/wechat/jsConfigObj`, param)
    },
    getMobile: () => { // 获取客服电话
        return httpGet(`/public/sysparam/info/string?paramName=official_cus_service_mobile`)
    },
    appStore: () => {
        return AxiosGet(`/public/version/latest`, {
            params: {},
            headers: {
                os: 'Android',
                appType: '1'
            }
        })
    },
    appDown: (type) => {
        return AxiosGet(`/orgrimar/appVersion/latest`, {
            params: {},
            headers: {
                os: 'Android',
                appType:type
            }
        })
    },
    appStore2: () => {
        return AxiosGet(`/public/version/latest`, {
            params: {},
            headers: {
                os: 'Android',
                appType: '3'
            }
        })
    },
    getBoardArticle: (param) => {
        return httpGet(`/biz/board/list`, param)
    },
    getServiceInfo: (param) => {
        return httpGet(`/biz/board/getRespond`, param)
    },
    checkBoardArticle: (param) => {
        return httpGet(`/biz/board/get`, param)
    },
    //分类列表
    helpRangeList: (param) => {
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            if (process.env.VUE_APP_TITLE == 'pre') {
                url = 'http://pre.api.10000rc.com/pre';
            } else if (process.env.VUE_APP_TITLE == 'test') {
                url = 'http://test.api.10000rc.com';
            } else {
                url = 'http://www.10000rc.com';
            }
        }
        return httpGet(`${url}/orgrimar/help/range/list`, param)
    },
    //问题列表
    helpQuestionList: (param) => {
        let url = 'http://test.api.10000rc.com';
        if (process.env.NODE_ENV == 'production') {
            if (process.env.VUE_APP_TITLE == 'pre') {
                url = 'http://pre.api.10000rc.com/pre';
            } else if (process.env.VUE_APP_TITLE == 'test') {
                url = 'http://test.api.10000rc.com';
            } else {
                url = 'http://www.10000rc.com';
            }
        }
        return httpPost(`${url}/orgrimar/help/question/list`, param)
    },
}