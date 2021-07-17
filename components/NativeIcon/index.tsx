import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  Feather,
  SimpleLineIcons
} from '@expo/vector-icons'
import * as R from 'ramda'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

const iconMapper = {
  Feather: Feather,
  FontAwesome: FontAwesome,
  SimpleLineIcons: SimpleLineIcons,
  Ionicons: Ionicons,
  MaterialCommunityIcons: MaterialCommunityIcons,
  AntDesign: AntDesign,
  FontAwesome5: FontAwesome5,
  MaterialIcons: MaterialIcons
}

export interface IRenderIcon {
  iconType?: string
  iconName: any
  size?: number
  color?: string
  active?: boolean
  title?: string
  label?: string
  style?: any
  touchable?: boolean
  onPress?(props: any): void
}

const NativeIcon: React.FC<IRenderIcon> = (props) => {
  const color = props.active ? '#f4c772' : props.color || 'black'
  const Component = iconMapper[props.iconType]

  const rest = R.omit(['onPress'], props)

  if (props.touchable) {
    return (
      <TouchableOpacity activeOpacity={0.6} delayPressIn={10} delayPressOut={300} onPress={props.onPress}>
        <Component name={props.iconName} size={props.size || 24} color={color} />
      </TouchableOpacity>
    )
  }

  return <Component name={props.iconName} size={props.size || 24} color={color} {...props} />
}

export default NativeIcon
