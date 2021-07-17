import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import detector from 'i18next-browser-languagedetector'

import en from './en.json'
import ru from './ru.json'
import { NativeModules, Platform } from 'react-native'

export const dict = {
  en,
  ru
}
// the translations
const resources = {
  en: {
    translation: en
  },
  ru: {
    translation: ru
  }
}

// const locale =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale
//     : NativeModules.I18nManager.localeIdentifier

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'en', // use en if detected lng is not available

    keySeparator: '.', // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
