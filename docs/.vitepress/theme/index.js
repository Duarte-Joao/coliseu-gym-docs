import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,

  Layout() {
    const layout = DefaultTheme.Layout

    return {
      name: 'CustomLayout',

      setup() {
        return () => h(
          layout,
          null,
          {
            // Slot oficial para adicionar conteúdo depois do título da navbar
            'nav-bar-title-after': () =>
              h('img', {
                src: '/logo.png',
                style: 'height: 35px; margin-left: 10px'
              })
          }
        )
      }
    }
  }
}
