import styled from 'styled-components/native'
import { BOTTOM_MENU_HEIGHT } from '../../constants/common'

export const MenuWrapper = styled.View`
  height: ${BOTTOM_MENU_HEIGHT}px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  background: #fff;
  padding: 20px;
`

export const ItemTitle = styled.Text<{ active?: boolean }>`
  color: ${(props) => (props.active ? '#f4c772' : 'black')};
  font-size: 10px;
  text-transform: uppercase;
  margin-top: 5px;
  font-weight: bold;
`

export const MenuItem = styled.Pressable`
  width: 50px;
  height: 50px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`
