import React from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'
import { MainStackParamList } from '../types'
import Main from '../screens/Main'

import config from './config'

const MainStack = createStackNavigator<MainStackParamList>()

const MainNavigator = (props: StackScreenProps<MainStackParamList>) => {
  const { t } = useTranslation()
  const { background, color } = useTheme()

  return (
    <MainStack.Navigator
      screenOptions={{
        ...config.stackNavigatorOptions,
        headerStyle: {
          backgroundColor: background.primary
        }
      }}
      initialRouteName="Home"
      mode="card"
    >
      <MainStack.Screen name="Home" options={{ title: t('screen.main.menu.home') }} component={Main} />
    </MainStack.Navigator>
  )
}

export default MainNavigator
