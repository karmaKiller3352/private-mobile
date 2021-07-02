import React, { useState, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types'
import { ThemeProvider } from 'styled-components/native'
import AppDrawlerNavigator from './DrawlerNavigator'
import AuthorizeNavigator from './AuthorizeNavigator'
import theme from '.././styles/theme'
import context from '../context'

const RootStack = createStackNavigator<RootStackParamList>()

const RootNavigator = () => {
  const { auth } = useContext(context)
  return (
    <RootStack.Navigator mode="card" headerMode="none">
      {auth.authenticated ? (
        <RootStack.Screen name="Application" component={AppDrawlerNavigator} />
      ) : (
        <RootStack.Screen name="Authorize" component={AuthorizeNavigator} />
      )}
    </RootStack.Navigator>
  )
}

export default RootNavigator
