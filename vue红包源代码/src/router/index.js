/*
 * @Description: 
 * @Author: Mr.Meng
 * @Date: 2021-05-08 09:24:37
 * @LastEditTime: 2021-05-13 09:33:22
 * @LastEditors: Mr.Meng
 */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
    //获取原型对象上的push函数
const originalPush = Router.prototype.push
    //修改原型对象中的push方法
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default new Router({
    mode: 'history',
    routes: [{
            name: 'login',
            path: '/login',
            meta: { requireLogin: false, title: "正在加载..." },
            component: () =>
                import ('../components/common/login.vue'),
        },
        {
            name: 'recruit',
            path: '/recruit',
            meta: { requireLogin: true, title: "招聘代理" },
            component: () =>
                import ('../components/vpage/recruit.vue'),
        },
        {
            name: 'complaint',
            path: '/complaint',
            meta: { requireLogin: true, title: "投诉" },
            component: () =>
                import ('../components/vpage/complaint.vue'),
        },
        {
            name: 'commission',
            path: '/commission',
            meta: { requireLogin: true, title: "分佣明细" },
            component: () =>
                import ('../components/vpage/commission.vue'),
        },
        {
            name: 'agent_extend',
            path: '/agent_extend',
            meta: { requireLogin: true, title: "推广教程" },
            component: () =>
                import ('../components/vpage/agent_extend.vue'),
        },
        {
            name: 'team',
            path: '/team',
            meta: { requireLogin: true, title: "我的团队" },
            component: () =>
                import ('../components/vpage/team.vue'),
        },
        {
            name: 'team_list',
            path: '/team_list',
            meta: { requireLogin: true, title: "下级代理" },
            component: () =>
                import ('../components/vpage/team_list.vue'),
        },
        {
            name: 'spread',
            path: '/spread',
            meta: { requireLogin: true, title: "推广二维码" },
            component: () =>
                import ('../components/vpage/spread.vue'),
        },
        {
            /**主页公共组件*/
            name: 'common',
            path: '',
            meta: { requireLogin: true },
            component: () =>
                import ('../components/common/common.vue'),
            children: [{
                    name: 'home',
                    path: '/',
                    meta: { requireLogin: true, title: false },
                    component: () =>
                        import ('../components/vhome/index.vue'),
                },
                {
                    name: 'agent',
                    path: '/agent',
                    meta: { requireLogin: true, title: false },
                    component: () =>
                        import ('../components/vhome/agent.vue'),
                },
                {
                    name: 'service',
                    path: '/service',
                    meta: { requireLogin: true, title: false },
                    component: () =>
                        import ('../components/vhome/service.vue'),
                },
                {
                    name: 'open',
                    path: '/open',
                    meta: { requireLogin: true, title: false },
                    component: () =>
                        import ('../components/vhome/open.vue'),
                }
            ]
        }
    ]
})