import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-after': () =>
        h('img', { src: '/logo.png', style: 'height:35px; margin-left:10px' })
    })
  }
}
