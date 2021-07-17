import styled, { useTheme } from 'styled-components/native'
import React, { useEffect, useCallback, useMemo } from 'react'
import { FlatList, ListRenderItemInfo, ActivityIndicator } from 'react-native'

const Container = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Spinner = () => {
  const theme = useTheme()
  return (
    <Container>
      <ActivityIndicator size={50} color={theme.background.avatarBGColor} />
    </Container>
  )
}

export default Spinner
