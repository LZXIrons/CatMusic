import axios from 'axios';

// 配置请求信息
let api = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: '3000', //请求超时时间
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    } //header传值，例如：Authorization
})

// 允许跨越携带cookie信息
axios.defaults.withCredentials = true;

export default {
    //登陆
    login(params) {
        return api.get(`/login/cellphone?` + params)
    },
    // 轮播图
    getBanner() {
        return api.get(`/banner`)
    },
    // 最新mv
    newMv() {
        return api.get(`/mv/first`);
    },
    // 独家放送
    privateSongs() {
        return api.get(`/api/personalized/privatecontent`)
    }
}