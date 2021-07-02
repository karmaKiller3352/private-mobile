import React, { useCallback } from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import NativeIcon from '../NativeIcon'
import { HeaderBackButton, StackHeaderLeftButtonProps } from '@react-navigation/stack'

interface IBackButton {
  config?: StackHeaderLeftButtonProps
  drawer?: boolean
}

const BackButton = ({ config, drawer }: IBackButton) => {
  const navigation = useNavigation()
  const clickHandler = useCallback(() => {
    const jumpToAction = DrawerActions.jumpTo('BottomMenu')

    return navigation.dispatch(jumpToAction)
  }, [])

  const styles = StyleSheet.create({
    image: {
      paddingLeft: 10
    }
  })

  if (drawer)
    return <NativeIcon style={styles.image} onPress={clickHandler} iconType="Ionicons" color={config.tintColor} iconName="arrow-back" size={30} />

  return (
    config.canGoBack && (
      <HeaderBackButton {...config} backImage={() => <NativeIcon iconType="Ionicons" color={config.tintColor} iconName="arrow-back" size={30} />} />
    )
  )
}

export default BackButton
