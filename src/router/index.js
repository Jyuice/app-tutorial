// 引入需要的模块
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'
import Resolve from '../views/Resolve'

// 下面使用了es6的对象增强写法，命名必须是routes
const routes = [
    {
        path: '/',
        redirect: 'home'
    }, 
    {
        path: '/home',
        component: Home
    },
    {
        path: '/detail',
        component: Detail
    },
    {
        path: '/resolve',
        component: Resolve
    },
]

// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 导出路由
export default router