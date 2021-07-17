import React, { useContext } from 'react'
import styled from 'styled-components/native'
import context from '../../context'

const Content = styled.Text`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 100%;
  padding: 40px;
  height: 100%;
`
const Button = styled.Button`
  width: 300px;
  align-self: center;
  font-size: 25px;
`

export default function SignUp() {
  const { auth } = useContext(context)

  return (
    <Content>
      <Button title="Sign Up" onPress={auth.setAuthenticated} />
    </Content>
  )
}
