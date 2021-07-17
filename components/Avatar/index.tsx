import React, { useEffect, useMemo } from 'react'
import styled, { css } from 'styled-components/native'
import * as R from 'ramda'
import { StackScreenProps } from '@react-navigation/stack'
import { useTheme } from 'styled-components/native'
import { ClientStackParamList } from '../../types'
import NativeIcon from '../../components/NativeIcon'
import GUI from '../../styles/global'

interface IAvatar {
  firstName: string
  lastName?: string
  imageUrl?: string
  size: number
}

const Circle = styled.View<{ size: number; imageUrl?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size}px;
  background: ${(props) =>
    props.imageUrl ? `url(${props.imageUrl})` : props.theme.background.avatarBGColor};
`

const AvatarText = styled.Text<{ size: number }>`
  color: ${(props) => props.theme.color.third};
  font-size: ${(props) => props.size}px;
`

const Avatar: React.FC<IAvatar> = ({ firstName, lastName, size = 30, imageUrl }) => {
  const title = useMemo(() => {
    const title = lastName
      ? `${R.slice(0, 1, firstName)}${R.slice(0, 1, lastName)}`
      : R.slice(0, 2, firstName)

    return title.toUpperCase()
  }, [firstName, lastName])

  return (
    <Circle size={size} imageUrl={imageUrl}>
      <AvatarText size={size / 3}>{title}</AvatarText>
    </Circle>
  )
}
export default Avatar
