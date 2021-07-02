import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Context, { IAuth, Itheme } from './context'
import { ThemeProvider } from 'styled-components/native'
import theme from './styles/theme'
import Navigation from './navigation'
import { Themes } from './constants/themes'
import './locales'

export default function App() {
  const [mode, setMode] = useState(Themes.BLUE)
  const [isAuthorized, setAuthorized] = useState<boolean>(false)

  const auth: IAuth = {
    authenticated: isAuthorized,
    setAuthenticated: () => setAuthorized(true),
    setUnauthenticated: () => setAuthorized(false)
  }

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
