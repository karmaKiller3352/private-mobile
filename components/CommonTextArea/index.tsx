import React, { useCallback, useState } from 'react'
import { Controller } from 'react-hook-form'
import styled, { css } from 'styled-components/native'
import * as R from 'ramda'
import Condition from '../Condition'

const InputContainer = styled.TouchableHighlight<{ isFocused: boolean; isError?: boolean }>`
  position: relative;
  width: 100%;
  padding: 10px;
  border-color: ${(props) => props.theme.border.input};
  border-width: 1px;
  margin-bottom: 35px;
  margin-top: 35px;
  ${(props) =>
    props.isError &&
    css`
      border-color: ${(props) => props.theme.border.error};
      border-width: 2px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${(props) => props.theme.border.focused};
      border-width: 2px;
    `}
`

const LabelText = styled.Text`
  position: absolute;
  top: -35px;

  color: ${(props) => props.theme.color.labelText};
  font-size: 20px;
`

const ErrorText = styled.Text`
  position: absolute;
  bottom: -25px;
  color: ${(props) => props.theme.border.error};
  font-size: 14px;
`

const TextInput = styled.TextInput`
  width: 100%;
  height: 100px;
  font-size: 20px;
  border: none;
`

interface ICommonTextArea {
  name: string
  errors: any
  control: any
  label?: string
  placeholder?: string
  setValues?: (props: any) => void
  rules?: any
}

export const CommonTextArea = ({
  setValues,
  placeholder = '',
  control,
  rules,
  name,
  errors,
  label = ''
}: ICommonTextArea) => {
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
                multiline
                numberOfLines={4}
              />
              <Condition when={!!errors[name]}>
                <ErrorText>{errors[name]?.message}</ErrorText>
              </Condition>
            </React.Fragment>
          </InputContainer>
        )
      }}
    />
  )
}

export default CommonTextArea
