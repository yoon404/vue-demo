import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import "@/assets/css/global.css"

var app = createApp(App);
app.use(store)
    .use(router)
    .use(ElementPlus, {locale: zhCn,})
    .use(ElementPlusIconsVue);

Object.keys(ElementPlusIconsVue).forEach(function (key) {
    app.component(ElementPlusIconsVue[key].name, ElementPlusIconsVue[key])
})
app.mount('#app');
