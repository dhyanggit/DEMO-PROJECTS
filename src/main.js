import { createApp } from 'vue'
import App from './App.vue'
// 路由挂载到全局
import router from './router'
import myElementPlus from './plugins/myElementPlus'

const app = createApp(App).use(router).use(myElementPlus);
app.mount('#app')

