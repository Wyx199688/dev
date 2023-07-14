/*
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-08 09:24:37
 * @LastEditTime: 2021-08-15 07:40:47
 * @LastEditors: Mr.Meng
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible'
import App from './App'
import router from './router'
import config from './common/config.js'
import Api from './common/api.js'

Vue.use(ElementUI);
Vue.prototype.$http = Api
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    var title = localStorage.getItem('__title');
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        if (title && title != '') {
            document.title = title;
        }
    }
    if (to.meta.requireLogin) {
        var user = localStorage.getItem('__dpuser');
        // if (!user || user == '') {
        //     if (to.path == '/login') {
        //         next();
        //     } else {
        //         next({ path: '/login' });
        //     }
        // } else {
        next();
        //}
    } else {
        next();
    }
})

// 读取接口域名
config.requestRemoteIp().finally(res => {
    new Vue({
        el: '#app',
        router,
        components: { App },
        template: '<App/>'
    })
});