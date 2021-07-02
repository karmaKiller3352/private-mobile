import * as React from 'react'
import styled from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'
import { MainStackParamList } from '../types'

const HugeView = styled.ScrollView``
const Content = styled.Text`
  text-align: center;
  font-size: 50px;
  height: 150px;
`

const Button = styled.Button``

export default function Main({ navigation }: StackScreenProps<MainStackParamList, 'Home'>) {
  return (
    <HugeView contentContainerStyle={{ flexGrow: 1 }}>
      {/* <Button title="Go to next" onPress={() => navigation.push('Static')} /> */}
      <Content> TEST1 </Content>
      <Content> TEST2 </Content>
      <Content> TEST3 </Content>
      <Content> TEST </Content>
      <Content> TEST </Content>
      <Content> TEST </Content>
      <Content> TEST </Content>
    </HugeView>
  )
}
