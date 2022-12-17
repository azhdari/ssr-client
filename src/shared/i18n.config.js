import i18n, { use, isInitialized, init } from 'i18next'
import i18nextBackend from 'i18next-node-fs-backend'
import { fallbackLng, languages } from './config'

const i18nextOptions = {
  backend: {
    // path where resources get loaded from
    loadPath: './locales/{{lng}}/{{ns}}.json',
    // path to post missing resources
    addPath: './locales/{{lng}}/{{ns}}.missing.json',
    // jsonIndent to use when storing json files
    jsonIndent: 2
  },
  interpolation: {
    escapeValue: false
  },
  saveMissing: true,
  fallbackLng,
  whitelist: languages,
  react: {
    wait: false
  }
}

use(i18nextBackend)

// initialize if not already initialized
if (!isInitialized) {
  init(i18nextOptions)
}

export default i18n
