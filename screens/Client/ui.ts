import styled from 'styled-components/native'

export const TopSection = styled.View`
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
`

export const InputSection = styled.View`
  display: flex;
  width: 65%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AvatarSection = styled.View`
  display: flex;
  width: 25%;
`

export const ListWrapper = styled.Pressable`
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  display: flex;
  width: 100%;
  border-bottom-color: ${(props) => props.theme.border.card};
  border-bottom-width: 1px;
`

export const ContentWrapper = styled.View<{ width: number }>`
  width: ${(props) => props.width}px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  justify-content: space-between;
  flex-direction: row;
`

export const InfoWrapper = styled.View`
  display: flex;
  height: 80px;
  align-items: flex-start;
  justify-content: center;
`

export const NameWrapper = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.color.primaryTitle};
  margin-bottom: 5px;
`

export const PhoneWrapper = styled.Text`
  color: ${(props) => props.theme.color.primarySubtitle};
  font-size: 18px;
`

export const ButtonWrapper = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
`
