/*
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-08 17:51:39
 * @LastEditTime: 2021-05-13 10:36:52
 * @LastEditors: Mr.Meng
 */
import axios from 'axios';
import md5 from 'js-md5';
import config from './config.js';
import routerIndex from '../router/index';
import { Message } from 'element-ui';
import qs from 'qs';

let http = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function(data) {
        data = qs.stringify(data) // 这里必须使用qs库进行转换
        return data
    }]
});

// 添加一个响应拦截器
http.interceptors.response.use(function(response) {
    if (response.data && response.data.code) {
        if (parseInt(response.data.code) == 401) {
            /****进行跳转登录微信***/
            window.localStorage.clear();
            routerIndex.push('/login');
        } else if (parseInt(response.data.code) == 405) {
            window.localStorage.clear();
            window.location.href = response.data.data.url;
        }
    }
    return response;
}, function(error) {
    if (error.response && error.response.data.code) {
        if (parseInt(error.response.data.code) == 401) {
            /****进行跳转登录微信***/
            window.localStorage.clear();
            routerIndex.push('/login');
        } else if (parseInt(error.response.data.code) == 405) {
            window.localStorage.clear();
            window.location.href = error.response.data.data.url;
        } else {
            Message.warning("服务器连接失败");
        }
    } else {
        Message.warning("服务器连接失败");
    }
    return Promise.reject(error);
})

async function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        timeout: 30000,
    }).then(function(res) {
        response(res);
    }).catch(function(err) {
        response(err);
    })
}

function getCache(cacheKey) {
    if (localStorage.getItem(cacheKey) != null && localStorage.getItem(cacheKey) != "") {
        var info = JSON.parse(localStorage.getItem(cacheKey));
        if (info.extime >= new Date().getTime()) {
            return info.data;
        }
    }
    return false;
}

export default {
    get: function(url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function(url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function(url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function(url, params, response) {
        return apiAxios('DELETE', url, params, response)
    },
    getUser: function() {
        if (localStorage.getItem('__dpuser') && localStorage.getItem('__dpuser') != null && localStorage.getItem('__dpuser') != "undefined") {
            return JSON.parse(localStorage.getItem('__dpuser'));
        } else {
            return false;
        }
    },
    getCommon: function() {
        if (localStorage.getItem('__dpcommon') && localStorage.getItem('__dpcommon') != null && localStorage.getItem('__dpcommon') != "undefined") {
            return JSON.parse(localStorage.getItem('__dpcommon'));
        } else {
            return false;
        }
    },
    getHblist: function() {
        if (localStorage.getItem('__dphblist') && localStorage.getItem('__dphblist') != null && localStorage.getItem('__dphblist') != "undefined") {
            return JSON.parse(localStorage.getItem('__dphblist'));
        } else {
            return false;
        }
    }
}