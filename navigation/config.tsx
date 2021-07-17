import React from 'react'
import { BottomTabBarOptions } from '@react-navigation/bottom-tabs'
import { StackNavigationOptions } from '@react-navigation/stack'
import BackButton from '../components/BackButton'
import MenuButtton from '../components/MenuButton'
import { DrawerNavigationOptions } from '@react-navigation/drawer'

// stack navigation params
const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0]
            })
          }
        ]
      }
    }
  }
}

const stackNavigatorOptions: StackNavigationOptions = {
  headerBackAccessibilityLabel: 'true',
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerLeft: (props) => (props.canGoBack ? <BackButton config={props} /> : <MenuButtton />),
  gestureDirection: 'horizontal',
  headerLeftContainerStyle: {
    paddingLeft: 10
  },
  ...horizontalAnimation
}

// Drawler navigation screen options
const drawlerNavigationOptions: DrawerNavigationOptions = {
  headerLeft: (props) => <BackButton config={props} drawer />,
  headerShown: true,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

// Bottom navigation params

const tabBarOptions: BottomTabBarOptions = {
  inactiveTintColor: '#000000',
  labelStyle: {
    fontWeight: '700'
  },
  style: {
    height: 80
  }
}

const TAB_ICON_SIZE = 35

export default {
  stackNavigatorOptions,
  drawlerNavigationOptions,
  horizontalAnimation,
  tabBarOptions,
  TAB_ICON_SIZE
}
