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
import React from 'react'
import { FlattenSimpleInterpolation, StyledInterface } from 'styled-components'

export interface IRenderIcon {
  iconType?: string
  iconName: any
  size?: number
  color?: string
  active?: boolean
  title?: string
  label?: string
  style?: any
  onPress?(): void
}

const NativeIcon: React.FC<IRenderIcon> = (props) => {
  const color = props.active ? '#f4c772' : props.color || 'black'

  switch (props.iconType) {
    case 'Feather':
      return <Feather name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'FontAwesome':
      return <FontAwesome name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'SimpleLineIcons':
      return <SimpleLineIcons name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'Ionicons':
      return <Ionicons name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'AntDesign':
      return <AntDesign name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'FontAwesome5':
      return <FontAwesome5 name={props.iconName} size={props.size || 24} color={color} {...props} />
    case 'MaterialIcons':
      return <MaterialIcons name={props.iconName} size={props.size || 24} color={color} {...props} />

    default:
      return null
  }
}

export default NativeIcon
