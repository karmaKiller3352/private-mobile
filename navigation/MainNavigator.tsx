import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { MainStackParamList } from '../types'
import Main from '../screens/Main'
import Static from '../screens/Static'

import config from './config'

const MainStack = createStackNavigator<MainStackParamList>()

const MainNavigator = (props: StackScreenProps<MainStackParamList>) => {
  const { t } = useTranslation()

  return (
    <MainStack.Navigator screenOptions={config.stackNavigatorOptions} initialRouteName="Home" mode="card">
      <MainStack.Screen name="Home" options={{ title: t('screen.main.menu.home') }} component={Main} />
      <MainStack.Screen name="Static" options={{ title: t('screen.main.menu.page') }} component={Static} />
    </MainStack.Navigator>
  )
}

export default MainNavigator
