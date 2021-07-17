import * as React from 'react'
import { useTheme } from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useTranslation } from 'react-i18next'
import moment from 'moment'
import { MainStackParamList } from '../types'
import GUI from '../styles/global'

const options: any = {
  era: 'long',
  year: 'long',
  month: 'long'
}

export default function Main({ navigation }: StackScreenProps<MainStackParamList, 'Home'>) {
  const { t } = useTranslation()
  const { background } = useTheme()

  const date = moment().format('MM-DD-YYYY')

  return (
    <GUI.ScreenWrapper>
      <GUI.Section>
        <GUI.LabelContainer>
          <MaterialCommunityIcons name="timetable" size={24} color={background.primary} />
          <GUI.SelectorLabel>{t('screen.main.date')}</GUI.SelectorLabel>
        </GUI.LabelContainer>
        <GUI.Label>{date}</GUI.Label>
      </GUI.Section>
      <GUI.Section>
        <GUI.LabelContainer>
          <MaterialCommunityIcons name="clipboard-list-outline" size={24} color={background.primary} />
          <GUI.SelectorLabel>{t('screen.main.pricelist')}</GUI.SelectorLabel>
        </GUI.LabelContainer>
        <GUI.Container>
          <GUI.Label>{t('screen.main.count')}: </GUI.Label>
          <GUI.LargeLabel>25</GUI.LargeLabel>
        </GUI.Container>
        <GUI.Container>
          <GUI.Label>{t('screen.main.purchase_cost')}: </GUI.Label>
          <GUI.LargeLabel>16 000₽</GUI.LargeLabel>
        </GUI.Container>
        <GUI.Container>
          <GUI.Label>{t('screen.main.sale_value')}: </GUI.Label>
          <GUI.LargeLabel>23 524₽</GUI.LargeLabel>
        </GUI.Container>
      </GUI.Section>
    </GUI.ScreenWrapper>
  )
}
