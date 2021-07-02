import * as React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'

import BottomMenu from '../components/BottomMenu'
import Condition from '../components/Condition'

interface IGeneral {
  children?: any
  showBackButton?: boolean
  showBottomMenu?: boolean
}

interface IMainBackground {
  height?: number
  headerMargin?: number
}

const General: React.FC<IGeneral> = (props: IGeneral) => {
  const mainHeight = 1

  return (
    <MainWrapper>
      <MainBackground height={mainHeight}>
        <ScrollView>{props.children}</ScrollView>
      </MainBackground>
      <Condition when={props.showBottomMenu}>
        <BottomMenu />
      </Condition>
    </MainWrapper>
  )
}

const MainBackground = styled.View<IMainBackground>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dfdfe1;
  height: ${(props) => props.height || 0}px;
  margin-top: ${(props) => props.headerMargin || 0}px;
`

const MainWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
`

export default General
