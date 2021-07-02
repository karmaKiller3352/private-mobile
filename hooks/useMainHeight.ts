import { useLayoutEffect, useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import { BOTTOM_MENU_HEIGHT } from '../constants/common'

const useMainHeight = () => {
  const { height } = useWindowDimensions()
  const [mainAreaHeight, setMainAreaHeight] = useState<number>()
  const headerHeight = useHeaderHeight()

  useLayoutEffect(() => {
    setMainAreaHeight(height - BOTTOM_MENU_HEIGHT - headerHeight)
  }, [headerHeight, height])

  return mainAreaHeight
}

export default useMainHeight
