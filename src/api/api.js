
import api from "@/api/http.js"

export default {
    //登陆
    login(phone,password) {
        return api.get(`/login/cellphone`,{
            params:{
                phone,
                password,
            }
        })
    },
    // 轮播图
    getBanner(obj) {
        return api.get(`/banner`,{
           params:{
            
           }
        })
    },
    // 最新mv
    newMv() {
        return api.get(`/mv/first`);
    },
    // 独家放送
    privateSongs() {
        return api.get(`/api/personalized/privatecontent`)
    },

}