import React from 'react'
import { Themes } from '../constants/themes'

export interface IAuth {
  authenticated: boolean
  setAuthenticated(): void
  setUnauthenticated(): void
}

export interface Itheme {
  current?: Themes
  setTheme?(t: Themes): void
}

type ContextProps = {
  auth: IAuth
  theme?: Itheme
}

export default React.createContext<ContextProps>({
  auth: {
    authenticated: false,
    setAuthenticated: () => null,
    setUnauthenticated: () => null
  }
})
