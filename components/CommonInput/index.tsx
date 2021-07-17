import React, { useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import styled, { css } from 'styled-components/native'
import * as R from 'ramda'
import Condition from '../Condition'

const InputContainer = styled.TouchableHighlight<{ isFocused: boolean; isError?: boolean }>`
  width: 100%;
  border-bottom-color: ${(props) => props.theme.border.input};
  border-bottom-width: 1px;
  margin-bottom: 10px;

  ${(props) =>
    props.isError &&
    css`
      border-bottom-color: ${(props) => props.theme.border.error};
      border-bottom-width: 2px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-bottom-color: ${(props) => props.theme.border.focused};
      border-bottom-width: 2px;
    `}
`

const LabelText = styled.Text`
  color: ${(props) => props.theme.color.labelText};
  font-size: 20px;
`

const TextInput = styled.TextInput`
  width: 100%;
  font-size: 20px;
  padding-bottom: 3px;
  border: none;
`

interface ICommonInput {
  name: string
  errors: any
  control: any
  label?: string
  placeholder: string
  setValues?: (props: any) => void
  rules?: any
}

export const CommonInput = ({
  setValues,
  placeholder,
  control,
  rules,
  name,
  errors,
  label = ''
}: ICommonInput) => {
  const [isFocused, setFocused] = useState<boolean>(false)

  const setFocusHandler = useCallback(() => {
    setFocused(true)
  }, [])

  const unFocusHandler = useCallback((e, onBlur) => {
    onBlur(e)
    setFocused(false)
  }, [])

  const onChangeHandler = (value: string, onChange: (v: string) => void, name: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
    onChange(value)
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value, name } }) => {
        return (
          <InputContainer isFocused={isFocused} isError={!!errors[name]}>
            <React.Fragment>
              <Condition when={!R.isEmpty(label)}>
                <LabelText>{label}</LabelText>
              </Condition>
              <TextInput
                onBlur={(e) => unFocusHandler(e, onBlur)}
                onFocus={setFocusHandler}
                placeholder={placeholder}
                onChangeText={(v) => onChangeHandler(v, onChange, name)}
                value={value}
              />
            </React.Fragment>
          </InputContainer>
        )
      }}
    />
  )
}

export default CommonInput
