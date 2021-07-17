import styled, { css, useTheme } from 'styled-components/native'
import React, { useContext, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import * as R from 'ramda'
import { TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import context from '../../context'
import { Themes } from '../../constants/themes'
import theme from '../../styles/theme'
import GUI from '../../styles/global'

const LanguageSelector = styled.TouchableOpacity<{ active: boolean }>`
  width: 45%;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.background.primary};
  margin-right: 20px;

  ${(props) =>
    props.active &&
    css`
      border: 3px solid #ccc;
    `}
`

const LanguageName = styled.Text`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.third};
`

const ThemePicker = styled.View<{ color: string; active?: boolean }>`
  width: 50px;
  border-radius: 50px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background-color: ${({ color }) => color};
  ${({ active }) =>
    active &&
    css`
      border: 3px solid #ccc;
    `}
`

const Settings = () => {
  const { t, i18n } = useTranslation()
  const { background } = useTheme()

  const {
    theme: { current, setTheme }
  } = useContext(context)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const changeTheme = useCallback((t: Themes) => setTheme(t), [])

  return (
    <GUI.ScreenWrapper>
      <GUI.Section>
        <GUI.LabelContainer>
          <MaterialIcons name="language" size={24} color={background.primary} />
          <GUI.SelectorLabel>{t('screen.settings.language_label')}</GUI.SelectorLabel>
        </GUI.LabelContainer>
        <GUI.SelectorContainer>
          <LanguageSelector active={i18n.language === 'ru'} onPress={() => changeLanguage('ru')}>
            <LanguageName>Русский</LanguageName>
          </LanguageSelector>
          <LanguageSelector active={i18n.language === 'en'} onPress={() => changeLanguage('en')}>
            <LanguageName>English</LanguageName>
          </LanguageSelector>
        </GUI.SelectorContainer>
      </GUI.Section>
      <GUI.Section>
        <GUI.LabelContainer>
          <Ionicons name="md-color-palette-sharp" size={24} color={background.primary} />
          <GUI.SelectorLabel>{t('screen.settings.theme_label')}</GUI.SelectorLabel>
        </GUI.LabelContainer>
        <GUI.SelectorContainer>
          {R.map((themeName: any) => {
            return (
              <TouchableOpacity key={themeName} onPress={() => changeTheme(themeName)}>
                <ThemePicker active={themeName === current} color={theme[themeName].background.primary} />
              </TouchableOpacity>
            )
          }, R.keys(theme))}
        </GUI.SelectorContainer>
      </GUI.Section>
    </GUI.ScreenWrapper>
  )
}

export default Settings
