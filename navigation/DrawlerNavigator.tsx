import React from 'react'
import { useTheme } from 'styled-components/native'
import { useTranslation } from 'react-i18next'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { AppDrawlerParamList } from '../types'
import BottomTabNavigator from './BottomNavigator'
import RightMenu from '../screens/RightMenu'
import config from './config'

const Drawler = createDrawerNavigator<AppDrawlerParamList>()

const AppDrawlerNavigator = () => {
  const { background } = useTheme()
  const { t } = useTranslation()

  return (
    <Drawler.Navigator
      drawerStyle={{ width: '80%' }}
      initialRouteName="BottomMenu"
      drawerType="back"
      screenOptions={{
        headerTintColor: background.primary,
        ...config.drawlerNavigationOptions
      }}
      drawerPosition="left"
      drawerContent={(p) => <RightMenu.Content />}
    >
      <Drawler.Screen name="BottomMenu" options={{ headerShown: false }} component={BottomTabNavigator} />
      <Drawler.Screen
        name="Profile"
        options={{ title: t('menu.drawer.profile') }}
        component={RightMenu.Profile}
      />
      <Drawler.Screen
        name="Settings"
        options={{ title: t('menu.drawer.settings') }}
        component={RightMenu.Settings}
      />
      <Drawler.Screen
        name="Payment"
        options={{ title: t('menu.drawer.payment') }}
        component={RightMenu.Payment}
      />
      <Drawler.Screen
        name="Messages"
        options={{ title: t('menu.drawer.messages') }}
        component={RightMenu.Messages}
      />
    </Drawler.Navigator>
  )
}

export default AppDrawlerNavigator
