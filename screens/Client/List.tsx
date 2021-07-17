import React, { useEffect, useCallback, useMemo } from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { useTheme } from 'styled-components/native'
import { ClientStackParamList } from '../../types'
import NativeIcon from '../../components/NativeIcon'
import Avatar from '../../components/Avatar'
import Layout from '../../constants/Layout'
import useConfirmationAlert from '../../hooks/useConfirmationAlert'
import { Client } from '../../models'
import useDataStore from '../../hooks/useDataStore'
import { ListWrapper, ContentWrapper, InfoWrapper, NameWrapper, PhoneWrapper, ButtonWrapper } from './ui'
import Spinner from '../../components/Spinner'

interface IListItem {
  width?: number
  removeIconColor?: string
  goToDetailsHandler?: (props: any) => void
  showRemoveDialog?: (props: any) => void
  item: any
}

const ListItem: React.FC<IListItem> = ({ item, width, removeIconColor, showRemoveDialog, goToDetailsHandler }) => {
  const phoneNumber = useMemo(() => `+${item.phoneCountryCode} ${item.phone}`, [item.phoneCountryCode, item.phone])

  const removeHandler = useCallback(() => showRemoveDialog(item.id), [item.id])

  return (
    <ListWrapper onPress={() => goToDetailsHandler(item)}>
      <Avatar size={60} firstName={item.firstName} lastName={item.lastName} />
      <ContentWrapper width={width}>
        <InfoWrapper>
          <NameWrapper>{`${item.firstName} ${item.lastName}`}</NameWrapper>
          <PhoneWrapper>{phoneNumber}</PhoneWrapper>
        </InfoWrapper>
        <ButtonWrapper>
          <NativeIcon onPress={removeHandler} touchable iconType="MaterialIcons" iconName="highlight-remove" color={removeIconColor} />
        </ButtonWrapper>
      </ContentWrapper>
    </ListWrapper>
  )
}

const List = ({ navigation }: StackScreenProps<ClientStackParamList, 'List'>) => {
  const { t } = useTranslation()
  const theme = useTheme()

  const fetchQuery = (c) => c.owner('eq', owner)
  const afterSave = () => navigation.goBack()

  const { owner, addEdit, remove, loading, list } = useDataStore({ Model: Client, fetchQuery, afterSave })
  const contentWidth = useMemo(() => Layout.window.width - 100, [Layout.window.width])

  const goToDetailsHandler = useCallback((data) => {
    navigation.navigate('Edit', {
      clientInfo: data,
      addEdit
    })
  }, [])

  const addHandler = useCallback(() => {
    navigation.navigate('Add', {
      addEdit
    })
  }, [addEdit])

  const showRemoveDialog = useConfirmationAlert({
    alertTitle: t('modal.removeTitle'),
    confirmAction: remove
  })

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        right: 10
      },

      headerRight: () => (
        <NativeIcon touchable onPress={addHandler} iconType="MaterialIcons" iconName="person-add-alt" color={theme.color.third} size={30} />
      )
    })
  }, [])

  const renderItem = useCallback(
    (props: ListRenderItemInfo<any>) => {
      return (
        <ListItem
          {...props}
          width={contentWidth}
          goToDetailsHandler={goToDetailsHandler}
          removeIconColor={theme.icon.removeIcon}
          showRemoveDialog={showRemoveDialog}
        />
      )
    },
    [list]
  )

  if (loading) return <Spinner />

  return <FlatList data={list} renderItem={renderItem} keyExtractor={(item) => item.id} />
}

export default List
