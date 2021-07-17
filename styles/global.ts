import styled, { css } from 'styled-components/native'

const ScreenWrapper = styled.ScrollView<{ isNotTransparent?: boolean }>`
  flex: 1;
  padding: 15px;
  ${(props) =>
    props.isNotTransparent &&
    css`
      background-color: ${(props) => props.theme.background.secondary};
    `}
`

const Section = styled.View`
  padding: 10px 20px 20px;
  background-color: ${(props) => props.theme.background.secondary};
  margin-bottom: 20px;
`

const SelectorLabel = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => props.theme.color.primary};
`
const Label = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.color.secondary};
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const LabelContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`

const SelectorContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const LargeLabel = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: ${(props) => props.theme.color.primary};
`

export default {
  ScreenWrapper,
  SelectorContainer,
  LabelContainer,
  SelectorLabel,
  Label,
  LargeLabel,
  Container,
  Section
}
