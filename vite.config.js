import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"


// https://vitejs.dev/config/
export default defineConfig({
  // 路径别名
  alias: {
    // 主程序目录
    '@': path.resolve(__dirname, './src'),
    // 样式目录
    'styles': path.resolve(__dirname, 'src/styles'),
    // 公用组件目录
    'coms': path.resolve(__dirname, 'src/components'),
    // view 组件
    'view': path.resolve(__dirname, 'src/view'),
  },

  publicDir: 'public',
  build: {
    outDir: 'dist', // 生产打包导出目录,
  },

  // base: '',
  server: {
    host: 'localhost',
    open: true,      // 是否自动打开浏览器
    post: 3000,      // 端口号
    https: false,    // 是否开启https加密协议
    ssr: false,      // 是否开启服务端渲染
    optimizeDepsL: { // 引入第三方的配置
      // include:['moment','axios'],
    },
    // proxy: {        // 代理设置
    //   '/foo':'http://localhost:3001/foo',
    //   '/api':{
    //     target:'http://www.baidu.com',
    //     changeOrigin:true,
    //     rewrite:path=> path.replace(/^\/api/,'')
    //   }
    // },
  },

  plugins: [vue()] // 插件方式倒入

})
