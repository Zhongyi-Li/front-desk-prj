/*
 * @Author: 'Zhongyi-Li' '1404377808@qq.com'
 * @Date: 2022-05-15 16:02:22
 * @LastEditors: 'Zhongyi-Li' '1404377808@qq.com'
 * @LastEditTime: 2022-05-15 18:53:53
 * @FilePath: \imooc-front\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'

createApp(App).use(router).mount('#app')
