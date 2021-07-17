import * as R from 'ramda'
import React, { useCallback, useRef, useEffect } from 'react'
import { Controller } from 'react-hook-form'
import PhoneInput from 'react-native-phone-number-input'
import styled, { css } from 'styled-components/native'
import Condition from '../Condition'

const InputContainer = styled.TouchableHighlight<{ isError: boolean; isFocused?: boolean }>`
  width: 100%;
  border-bottom-color: ${(props) => props.theme.border.input};
  border-bottom-width: 1px;
  margin-top: 25px;
  margin-bottom: 10px;
  padding-bottom: 5px;

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

interface ICommonInput {
  nameSpace: string
  setError: any
  clearErrors: any
  errors: any
  country?: any
  countryCode?: string
  control: any
  placeholder: string
  setValue?: (...props: any) => void
  rules?: any
  label?: string
}

export const CommonPhoneInput = ({
  setValue,
  setError,
  clearErrors,
  errors,
  placeholder,
  control,
  rules,
  label = '',
  nameSpace,
  countryCode,
  country = 'RU'
}: ICommonInput) => {
  const phoneInput = useRef<PhoneInput>(null)

  const forceError = (name) =>
    setError(name, {
      type: 'manual',
      message: 'Incorect phone number'
    })

  const onChangeNumber = useCallback(
    (value: any, onChange: (v: string) => void, name: string) => {
      const isInValid = !phoneInput.current.isValidNumber(value)
      if (isInValid) {
        forceError(name)
      } else {
        clearErrors(name)
      }

      onChange(value)
    },
    [setValue, clearErrors]
  )

  const onChangeHandler = (value: any) => {
    setValue(`${nameSpace}CountryCode`, R.pathOr('RU', ['callingCode', 0], value))
    setValue(`${nameSpace}Country`, R.pathOr('RU', ['cca2'], value))
  }

  return (
    <Controller
      name={nameSpace}
      control={control}
      rules={rules}
      render={({ field: { onChange, value, name } }) => {
        return (
          <InputContainer isError={!!errors[name]}>
            <React.Fragment>
              <Condition when={!R.isEmpty(label)}>
                <LabelText>{label}</LabelText>
              </Condition>
              <PhoneInput
                codeTextStyle={{ fontSize: 20 }}
                textInputStyle={{ fontSize: 20 }}
                textContainerStyle={{
                  backgroundColor: 'transparent'
                }}
                defaultCode={country}
                placeholder={placeholder}
                ref={phoneInput}
                defaultValue={value}
                onChangeText={(text) => {
                  onChangeNumber(text, onChange, name)
                }}
                onChangeCountry={(country) => onChangeHandler(country)}
                layout="first"
              />
            </React.Fragment>
          </InputContainer>
        )
      }}
    />
  )
}

export default CommonPhoneInput
