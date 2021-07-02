import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useMemo } from 'react'
import * as R from 'ramda'
import NotFoundScreen from '../screens/NotFoundScreen'
import { TabNavigatorParmaList } from '../types'
import NativeIcon from '../components/NativeIcon'
import MainNavigator from './MainNavigator'
import { useTheme } from 'styled-components/native'
import { useTranslation } from 'react-i18next'

import config from './config'

const BottomTabNavigator = createBottomTabNavigator<TabNavigatorParmaList>()

export default function BottomNavigator() {
  const { background, color } = useTheme()
  const { i18n } = useTranslation()
  const tabBarBadge = 2

  const rootRouterMap: any = useMemo(
    () => ({
      Main: {
        iconType: 'Ionicons',
        iconName: 'home-outline',
        component: MainNavigator,
        options: {
          headerShown: true,
          title: i18n.t('menu.bottom.home')
        }
      },
      Pricelist: {
        iconType: 'MaterialIcons',
        iconName: 'format-list-numbered',
        component: NotFoundScreen,
        options: {
          title: i18n.t('menu.bottom.pricelist')
        }
      },
      Clients: {
        iconType: 'Ionicons',
        iconName: 'ios-people-outline',
        component: NotFoundScreen,
        options: {
          title: i18n.t('menu.bottom.clients')
        }
      },
      Orders: {
        iconType: 'AntDesign',
        iconName: 'shoppingcart',
        component: NotFoundScreen,
        options: {
          title: i18n.t('menu.bottom.orders'),
          tabBarBadge
        }
      },
      Reports: {
        iconType: 'AntDesign',
        iconName: 'barschart',
        component: NotFoundScreen,
        options: {
          title: i18n.t('menu.bottom.reports')
        }
      }
    }),
    [tabBarBadge, i18n.language]
  )

  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const { iconType, iconName } = rootRouterMap[route.name]

          return (
            <NativeIcon iconType={iconType} iconName={iconName} size={config.TAB_ICON_SIZE} color={color} />
          )
        }
      })}
      tabBarOptions={{
        ...config.tabBarOptions,
        activeTintColor: color.primary,
        inactiveTintColor: color.secondary,
        activeBackgroundColor: background.primary,
        inactiveBackgroundColor: background.primary,
        labelStyle: {
          bottom: 10
        }
      }}
    >
      {R.map(
        (item: any) => (
          <BottomTabNavigator.Screen
            name={item}
            key={item}
            component={rootRouterMap[item].component}
            options={rootRouterMap[item].options}
          />
        ),
        R.keys(rootRouterMap)
      )}
    </BottomTabNavigator.Navigator>
  )
}
