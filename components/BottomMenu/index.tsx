import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as R from 'ramda'
import * as UI from './ui'
import NativeIcon from '../NativeIcon'

const menu = [
  {
    iconType: 'Ionicons',
    iconName: 'home-outline',
    title: 'Home',
    component: 'Root'
  },
  {
    iconType: 'MaterialIcons',
    iconName: 'format-list-numbered',
    title: 'Pricelist',
    component: '1'
  },
  {
    iconType: 'Ionicons',
    iconName: 'ios-people-outline',
    title: 'Clients',
    component: '2'
  },
  {
    iconType: 'AntDesign',
    iconName: 'shoppingcart',
    title: 'Orders',
    component: '3'
  },
  {
    iconType: 'AntDesign',
    iconName: 'barschart',
    title: 'Reports',
    component: 'NotFound'
  }
]

const BottomMenu: React.FC<any> = (props) => {
  const [active, setActive] = useState<string>()
  const navigation = useNavigation()
  const pressHandler = (iconName: string, component: string) => {
    setActive(iconName)
    navigation.navigate(component, { param: 1 })
  }

  return (
    <UI.MenuWrapper>
      {R.map((item) => {
        const isActive = item.iconName === active

        return (
          <UI.MenuItem key={item.iconName} onPress={() => pressHandler(item.iconName, item.component)}>
            <NativeIcon iconType={item.iconType} iconName={item.iconName} size={35} active={isActive} />
            <UI.ItemTitle active={isActive}>{item.title}</UI.ItemTitle>
          </UI.MenuItem>
        )
      }, menu)}
    </UI.MenuWrapper>
  )
}

export default BottomMenu
