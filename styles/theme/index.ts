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
    }
    color: {
      primary: string
      secondary?: string
      third?: string
      menuItem?: string
    }
  }
}

export default {
  dark,
  blue
}
