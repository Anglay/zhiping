import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: resolve => require(['@/pages/main'], resolve),
        redirect: '/recommend',
        children: [{
            path: '/recommend',
            name: 'recommend',
            component: resolve => require(['@/pages/recommend/index'], resolve)
        }, {
            path: '/collection',
            name: 'collection',
            component: resolve => require(['@/pages/collection/index'], resolve)
        }, {
            path: '/post',
            name: 'post',
            component: resolve => require(['@/pages/post/index'], resolve)
        }, {
            path: '/resume',
            name: 'resume',
            component: resolve => require(['@/pages/resume/index'], resolve)
        }]
    }]
})