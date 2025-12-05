import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return (
      <DefaultTheme.Layout>
        {{
          'nav-bar-title-after': () => <img src="/logo.png" style="height:35px; margin-left:10px" />
        }}
      </DefaultTheme.Layout>
    )
  }
}
