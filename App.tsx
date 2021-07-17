import 'react-native-gesture-handler'
import { StatusBar, LogBox } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native'
import Context, { IAuth, Itheme } from './context'
import { ThemeProvider } from 'styled-components/native'
import theme from './styles/theme'
import Navigation from './navigation'
import { Themes } from './constants/themes'
import './locales'
import Amplify, { I18n, Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
import i18n, { dict } from './locales'
import { useEffect } from 'react'

LogBox.ignoreLogs(['Setting a timer'])
const currentLocale = i18n.language

I18n.setLanguage(currentLocale)
I18n.putVocabularies(dict)

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true
  }
})

const inputLabel = Object.assign({}, AmplifyTheme.inputLabel, { color: theme.blue.color.labelText })
const button = Object.assign({}, AmplifyTheme.button, { backgroundColor: theme.blue.background.primary })
const buttonDisabled = Object.assign({}, AmplifyTheme.buttonDisabled, {
  backgroundColor: theme.blue.background.primary,
  opacity: 0.7
})
const sectionFooterLink = Object.assign({}, AmplifyTheme.sectionFooterLink, {
  color: theme.blue.color.primary
})

const MyTheme = Object.assign({}, AmplifyTheme, { button, sectionFooterLink, buttonDisabled, inputLabel })

const App = () => {
  const [mode, setMode] = useState(Themes.BLUE)
  const [user, setUser] = useState<any>({})

  const auth: IAuth = {
    user,
    setUnauthenticated: () => Auth.signOut()
  }

  useEffect(() => {
    ;(async () => {
      const authUser = await Auth.currentUserInfo()
      setUser(authUser)
    })()
  }, [])

  const themeContext: Itheme = {
    current: mode,
    setTheme: (t) => setMode(t)
  }

  return (
    <ThemeProvider theme={theme[themeContext.current]}>
      <Context.Provider value={{ auth, theme: themeContext }}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Navigation />
        </SafeAreaProvider>
      </Context.Provider>
    </ThemeProvider>
  )
}

export default withAuthenticator(App, false, [], null, MyTheme)
