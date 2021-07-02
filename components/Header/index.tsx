import * as React from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as UI from './ui'
import Condition from '../Condition'

interface HeaderProps {
  showBackButton?: boolean
  title: string
  headerRef?: any
  renderAdditional?: React.FC
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <UI.HeaderWrapper ref={props.headerRef}>
      <UI.ViewZone align="left">
        <Condition when={props.showBackButton}>
          <Ionicons name="md-arrow-back" size={24} color="#f4c772" />
        </Condition>
      </UI.ViewZone>
      <UI.ViewZone>
        <UI.TextWrapper>{props.title}</UI.TextWrapper>
      </UI.ViewZone>
      <UI.ViewZone>
        <Condition when={!!props.renderAdditional}>{props.renderAdditional}</Condition>
      </UI.ViewZone>
    </UI.HeaderWrapper>
  )
}

export default Header
