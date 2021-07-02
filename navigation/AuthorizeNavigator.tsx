import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthorizeParamList } from '../types'

import config from './config'
import Authorize from '../screens/Authorize'

const AuthorizerStack = createStackNavigator<AuthorizeParamList>()

const AuthorizeNavigator = (props: any) => {
  return (
    <AuthorizerStack.Navigator
      screenOptions={{ ...config.stackNavigatorOptions, headerRight: () => null }}
      initialRouteName="SignIn"
      mode="card"
    >
      <AuthorizerStack.Screen options={{ headerShown: false }} name="SignIn" component={Authorize.SignIn} />
      <AuthorizerStack.Screen name="SignUp" options={{ title: 'Sign up' }} component={Authorize.SignUp} />
      <AuthorizerStack.Screen
        name="RestorePassword"
        options={{ title: 'Restore password' }}
        component={Authorize.RestorePassword}
      />
    </AuthorizerStack.Navigator>
  )
}

export default AuthorizeNavigator
