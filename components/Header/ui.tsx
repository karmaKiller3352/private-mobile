import styled, { css } from 'styled-components/native'

export const HeaderWrapper = styled.View`
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  text-align: center;
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`

export const TextWrapper = styled.Text`
  font-size: 20px;
  font-weight: bold;
`

export const ViewZone = styled.View<IViewZone>`
  width: 33%;
  flex-grow: 1;

  ${(props) => {
		switch (props.align) {
		case 'left':
			return css`
          text-align: left;
        `
		case 'right':
			return css`
          text-align: right;
        `
		default:
			return css`
          text-align: center;
        `
		}
	}}
`

interface IViewZone {
  align?: string
}
