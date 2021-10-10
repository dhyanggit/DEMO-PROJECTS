import { createRouter, createWebHistory } from "vue-router"
import index from "view/index.vue"

const routes = [
    {
        path: '/',
        // component: index,
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children: [
            {
                path: '/vueCase',
                name: 'vue',
                component: () => import('view/vueCase.vue'),
            },
            {
                path: '/tab',
                name: 'tab',
                component: () => import('coms/tab.vue'),
                children: [
                    {
                        path: '/page1',
                        name: 'page1',
                        component: () => import('view/vueCase/page1.vue'),
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        component: () => import('view/vueCase/page2.vue'),
                    },
                    {
                        path: '/page3',
                        name: 'page3',
                        component: () => import('view/vueCase/page3.vue'),
                    }

                ]
            },
            {
                path:'/js',
                name:'js',
                component:()=>import('view/js/index.vue'),
                children:[
                    {
                        path:'/closure',
                        name:'closure',
                        component:()=>import('view/js/closure.vue'),
                    }
                ]
            },



        ]
    }
]
// 工厂函数创建路由实例
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router