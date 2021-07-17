import React, { useCallback } from 'react'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'
import { ClientStackParamList } from '../types'

import config from './config'
import Client from '../screens/Client'

const ClientStack = createStackNavigator<ClientStackParamList>()

const ClientNavigator = (props: StackScreenProps<ClientStackParamList>) => {
  const { t } = useTranslation()
  const { background } = useTheme()

  return (
    <ClientStack.Navigator
      screenOptions={{
        ...config.stackNavigatorOptions,
        headerStyle: {
          backgroundColor: background.primary
        }
      }}
      initialRouteName="List"
      mode="card"
    >
      <ClientStack.Screen
        name="List"
        options={{
          title: t('screen.client.menu.list')
        }}
        component={Client.List}
      />
      <ClientStack.Screen
        name="Add"
        options={{
          title: t('screen.client.menu.add_new')
        }}
        component={Client.AddEdit}
      />
      <ClientStack.Screen
        name="Edit"
        options={{ title: t('screen.client.menu.details') }}
        component={Client.AddEdit}
      />
    </ClientStack.Navigator>
  )
}

export default ClientNavigator
