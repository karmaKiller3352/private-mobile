import * as React from 'react'
import styled from 'styled-components/native'
import { useContext } from 'react'
import context from '../../context'

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Content = styled.Text`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
`
const Button = styled.Button`
  width: 300px;
  align-self: center;
  font-size: 25px;
`

export default function SignIn(props: any) {
  const { auth } = useContext(context)

  return (
    <Container>
      <Content>
        <Button title="Login" onPress={auth.setAuthenticated} />
      </Content>
      <Content>
        <Button title="Sign up" onPress={() => props.navigation.push('SignUp')} />
      </Content>
      <Content>
        <Button title="Restore password" onPress={() => props.navigation.push('RestorePassword')} />
      </Content>
    </Container>
  )
}
