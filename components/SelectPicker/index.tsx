import React, { useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import styled, { useTheme } from 'styled-components/native'
import { Picker } from '@react-native-picker/picker'
import * as R from 'ramda'
import Condition from '../Condition'
import Layout from '../../constants/Layout'

const SelectContainer = styled(Picker)<{ isError?: boolean }>`
  flex: 1;
  height: 30px;
`

const LabelText = styled.Text`
  color: ${(props) => props.theme.color.labelText};
  font-size: 20px;
`

const Wrapper = styled.View`
  display: flex;
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

type Option = {
  label: string
  value: string
}

interface ISelectPicker {
  name: string
  control: any
  label?: string
  options: Array<Option>
  setValues?: (props: any) => void
  rules?: any
}

const SelectPicker = ({ name, control, label, options }: ISelectPicker) => {
  const theme = useTheme()
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name } }) => {
        return (
          <Wrapper>
            <LabelText>{label}</LabelText>
            <SelectContainer enabled={true} mode="dialog" onValueChange={(v, i) => onChange(v)} selectedValue={value}>
              {R.map(
                (option: Option) => (
                  <Picker.Item color={theme.color.primaryTitle} label={option.label} value={option.value} key={option.label} />
                ),
                options
              )}
            </SelectContainer>
          </Wrapper>
        )
      }}
    />
  )
}

export default SelectPicker
