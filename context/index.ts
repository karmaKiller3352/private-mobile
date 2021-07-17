import React from 'react'
import { Themes } from '../constants/themes'

export interface IAuth {
  user: any
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
    user: {},
    setUnauthenticated: () => null
  }
})
