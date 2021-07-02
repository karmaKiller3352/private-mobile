import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import NativeIcon from '../NativeIcon'

const MenuButtton = () => {
  const navigation = useNavigation()
  const { background } = useTheme()

  return (
    <NativeIcon
      size={35}
      iconType="Ionicons"
      iconName="ios-menu"
      color={background.primary}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  )
}

export default MenuButtton
