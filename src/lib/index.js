import svgIcon from './svg-icon/index.vue'
import popup from './popup/index.vue'
import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // app.component('m-svg-icon', svgIcon), app.component('m-popup', popup)

    //组件自动注册
    //1.获取当前路径下所有的 index.vue
    const components = import.meta.glob('./*/index.vue')
    for (let [fullPath, fn] of Object.entries(components)) {
      const componentName = 'm-' + fullPath.replace('./', '').split('/')[0]
      app.component(componentName, defineAsyncComponent(fn))
    }
  }
}
