import styled, { useTheme } from 'styled-components/native'
import { useTranslation } from 'react-i18next'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import React, { useContext, useMemo } from 'react'
import context from '../../context'
import * as R from 'ramda'

import NativeIcon, { IRenderIcon } from '../../components/NativeIcon'
import { useCallback } from 'react'

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.background.secondary};
`

const TopContainer = styled.View`
  padding: 40px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background.block};
`

const PhotoWrapper = styled.Image`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.background.imagePlaceholder};
  border-radius: 40px;
`
const ImageWrapper = styled.View`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.theme.background.imagePlaceholder};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`

const NameWrapper = styled.Text`
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.color.primary};
`

const CompanyName = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.color.primary};
`

const PhotoTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.background.avatarTextColor};
`

const MenuContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  display: flex;
`

const MenuListItem = styled.View`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ListText = styled.Text`
  color: ${(props) => props.theme.color.menuItem};
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`

const LogoutWrapper = styled.View`
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`

const LogoutButton = styled.Pressable`
  padding: 10px 25px;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`

const LogoutLabel = styled.Text`
  color: ${(props) => props.theme.color.primary};
  font-size: 20px;
  font-weight: bold;
  margin-left: 20px;
`

const MenuItem: React.FC<IRenderIcon> = (props) => {
  return (
    <MenuListItem>
      <NativeIcon iconName={props.iconName} color={props.color} iconType={props.iconType} size={25} />
      <ListText style={{ color: props.color }}>{props.title}</ListText>
    </MenuListItem>
  )
}

const Content = () => {
  const navigation = useNavigation()
  const { auth } = useContext(context)

  const { i18n } = useTranslation()

  const drawRouteMap = useMemo(
    () => ({
      Profile: {
        title: i18n.t('menu.drawer.profile'),
        iconType: 'MaterialCommunityIcons',
        iconName: 'account-cog-outline',
        active: true
      },
      Messages: {
        title: i18n.t('menu.drawer.messages'),
        iconType: 'MaterialCommunityIcons',
        iconName: 'email-receive-outline'
      },
      Settings: {
        title: i18n.t('menu.drawer.settings'),
        iconType: 'Feather',
        iconName: 'settings'
      },
      Payment: {
        title: i18n.t('menu.drawer.payment'),
        iconType: 'MaterialCommunityIcons',
        iconName: 'credit-card-check-outline'
      }
    }),
    [i18n.language]
  )
  const image = null
  const { color } = useTheme()

  const clickHandler = useCallback((routeName) => {
    const jumpToAction = DrawerActions.jumpTo(routeName)

    return navigation.dispatch(jumpToAction)
  }, [])

  return (
    <SafeAreaView>
      <Wrapper>
        <TopContainer>
          {image ? (
            <PhotoWrapper source={image} />
          ) : (
            <ImageWrapper>
              <PhotoTitle>AS</PhotoTitle>
            </ImageWrapper>
          )}
          <NameWrapper>Aliiev Suleiman</NameWrapper>
          <CompanyName>IP "Orange"</CompanyName>
        </TopContainer>
        <MenuContainer>
          {R.map((item: any) => {
            return (
              <TouchableOpacity onPress={() => clickHandler(item)} key={item}>
                <MenuItem
                  title={drawRouteMap[item].title}
                  color={color.primary}
                  iconType={drawRouteMap[item].iconType}
                  iconName={drawRouteMap[item].iconName}
                />
              </TouchableOpacity>
            )
          }, R.keys(drawRouteMap))}
        </MenuContainer>
        <LogoutWrapper>
          <LogoutButton onPress={auth.setUnauthenticated}>
            <NativeIcon iconName="logout" iconType="MaterialCommunityIcons" color={color.primary} size={25} />
            <LogoutLabel>{i18n.t('menu.drawer.logout')}</LogoutLabel>
          </LogoutButton>
        </LogoutWrapper>
      </Wrapper>
    </SafeAreaView>
  )
}

export default Content
