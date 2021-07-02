import styled, { css, useTheme } from 'styled-components/native'
import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { MaterialIcons } from '@expo/vector-icons'

const ScreenWrapper = styled.ScrollView`
  width: 100%;
  padding: 20px;
`

const LangSection = styled.View`
  padding: 10px 20px 20px;
  background-color: ${(props) => props.theme.background.secondary};
`

const LaguageSelectorLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => props.theme.background.primary};
`
const LaguageSelectorLabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

const LanguageSelectorContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LanguageSelector = styled.TouchableOpacity<{ active: boolean }>`
  width: 45%;
  padding: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.background.primary};

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
  color: ${(props) => props.theme.color.primary};
`

const Settings = () => {
  const { t, i18n } = useTranslation()
  const { background } = useTheme()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <ScreenWrapper>
      <LangSection>
        <LaguageSelectorLabelContainer>
          <MaterialIcons name="language" size={24} color={background.primary} />
          <LaguageSelectorLabel>{t('screen.settings.language_label')}</LaguageSelectorLabel>
        </LaguageSelectorLabelContainer>
        <LanguageSelectorContainer>
          <LanguageSelector active={i18n.language === 'ru'} onPress={() => changeLanguage('ru')}>
            <LanguageName>Русский</LanguageName>
          </LanguageSelector>
          <LanguageSelector active={i18n.language === 'en'} onPress={() => changeLanguage('en')}>
            <LanguageName>English</LanguageName>
          </LanguageSelector>
        </LanguageSelectorContainer>
      </LangSection>
    </ScreenWrapper>
  )
}

export default Settings
