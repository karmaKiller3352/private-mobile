import { dark } from './dark'
import { blue } from './blue'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string
      secondary?: string
      block?: string
      imagePlaceholder?: string
      avatarTextColor?: string
      avatarBGColor?: string
    }
    color: {
      primary: string
      secondary?: string
      third?: string
      menuItem?: string
      labelText?: string
      primaryTitle?: string
      primarySubtitle?: string
    }
    border?: {
      card?: string
      input?: string
      focused?: string
      error?: string
    }
    icon?: {
      removeIcon?: string
    }
  }
}

export default {
  dark,
  blue
}
