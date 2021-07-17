import { DrawerActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { useTheme } from 'styled-components/native'
import NativeIcon from '../NativeIcon'

const MenuButtton = () => {
  const navigation = useNavigation()
  const { color } = useTheme()

  return (
    <NativeIcon
      touchable
      size={30}
      iconType="Ionicons"
      iconName="ios-menu"
      color={color.third}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  )
}

export default MenuButtton
