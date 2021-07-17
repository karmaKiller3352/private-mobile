import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthorizeParamList } from '../types'

import config from './config'
import Auth from '../screens/Auth'

const AuthorizerStack = createStackNavigator<AuthorizeParamList>()

const AuthorizeNavigator = () => {
  return (
    <AuthorizerStack.Navigator
      screenOptions={{ ...config.stackNavigatorOptions, headerRight: () => null }}
      initialRouteName="SignIn"
      mode="card"
    >
      <AuthorizerStack.Screen options={{ headerShown: false }} name="SignIn" component={Auth.SignIn} />
      <AuthorizerStack.Screen name="SignUp" options={{ title: 'Sign up' }} component={Auth.SignUp} />
      <AuthorizerStack.Screen
        name="RestorePassword"
        options={{ title: 'Restore password' }}
        component={Auth.RestorePassword}
      />
    </AuthorizerStack.Navigator>
  )
}

export default AuthorizeNavigator
