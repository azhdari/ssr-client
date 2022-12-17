import Vue from 'vue'
import './components'
import './ipc'
import store from './store'
import App from './App'
import { getInitConfig } from './ipc'
import { init as initShortcut } from './shortcut'
import i18n from '../shared/i18n.config'
import renderTray from '../main/tray'
import * as D from '../main/data'

function subscribeI18nEvents () {
  i18n.on('loaded', (loaded) => {
    i18n.changeLanguage('en')
    i18n.off('loaded')
  })
  i18n.on('languageChanged', (lng) => {
    renderTray(D.currentConfig)
  })
}

Vue.config.productionTip = false

// 启动应用时获取初始化数据
getInitConfig()
initShortcut(store.state.appConfig)
subscribeI18nEvents()

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
