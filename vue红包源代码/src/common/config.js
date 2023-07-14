/*
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-10 10:22:22
 * @LastEditTime: 2021-05-12 13:18:55
 * @LastEditors: Mr.Meng
 */
import axios from 'axios'

const config = {
    requestUrl: '/api/User/getConfig', //动态域名所在地址
    baseUrl: {
        dev: '/api/',
        pro: '/api/' // 接口域名，会被动态覆盖
    },

    requestRemoteIp: () => { // 动态获取
        return new Promise((resolve, reject) => {
            axios.get(config.requestUrl).then(response => {
                //config.baseUrl.pro = response.data.data.path;
                if (response.data.data.title) {
                    window.localStorage.setItem('__title', response.data.data.title);
                }
                resolve()
            }, err => {
                reject()
            });
        });
    }
}

export default config