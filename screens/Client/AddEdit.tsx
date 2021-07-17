import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { StackScreenProps } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components/native'
import { LogBox } from 'react-native'
import * as R from 'ramda'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ClientStackParamList } from '../../types'
import NativeIcon from '../../components/NativeIcon'
import GUI from '../../styles/global'
import Avatar from '../../components/Avatar'
import CommonInput from '../../components/CommonInput'
import CommonTextArea from '../../components/CommonTextArea'
import CommonPhoneInput from '../../components/CommonPhoneInput'
import { TopSection, InputSection, AvatarSection } from './ui'
import { defaultValues, clientSchema, messengerListOptions } from './helpers'
import SelectPicker from '../../components/SelectPicker'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const AddEdit = ({ navigation, route }: StackScreenProps<ClientStackParamList, 'Add' | 'Edit'>) => {
  const {
    params: { addEdit, clientInfo = {} },
    name: routeName
  } = route

  const initValues = R.mergeDeepLeft(clientInfo, defaultValues)
  const { color } = useTheme()
  const { t } = useTranslation()

  const [values, setValues] = useState(initValues)

  const {
    control,
    setError,
    getValues,
    setValue,
    clearErrors,
    formState: { errors, isDirty }
  } = useForm({
    resolver: yupResolver(clientSchema),
    mode: 'onTouched',
    shouldFocusError: true,
    reValidateMode: 'onChange',
    defaultValues: initValues
  })

  const isValid = isDirty && R.isEmpty(errors) && !R.isEmpty(values.phone.number)

  const saveHandler = () => {
    const curentValues = getValues()

    switch (routeName) {
      case 'Add': {
        return addEdit(curentValues)
      }
      case 'Edit': {
        return addEdit(curentValues, false)
      }
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        right: 10
      },
      headerRight: () =>
        isValid && <NativeIcon onPress={saveHandler} touchable iconType="MaterialIcons" iconName="check" color={color.third} size={30} />
    })
  }, [isValid])

  return (
    <GUI.ScreenWrapper isNotTransparent>
      <TopSection>
        <AvatarSection>
          <Avatar size={80} firstName={values.firstName} lastName={values.lastName} />
        </AvatarSection>

        <InputSection>
          <CommonInput
            errors={errors}
            name="firstName"
            setValues={setValues}
            placeholder={t('form.firstName')}
            control={control}
            rules={{
              required: true
            }}
          />
          <CommonInput errors={errors} name="lastName" setValues={setValues} placeholder={t('form.lastName')} control={control} />
        </InputSection>
      </TopSection>
      <CommonPhoneInput
        label={t('form.contact_phone')}
        errors={errors}
        clearErrors={clearErrors}
        setError={setError}
        country={values.phoneCountry}
        countryCode={values.phoneCountryCode}
        nameSpace="phone"
        setValue={setValue}
        control={control}
        placeholder="(___) ___ __-__"
      />
      <CommonPhoneInput
        label={t('form.account_number')}
        errors={errors}
        clearErrors={clearErrors}
        setError={setError}
        country={values.mailPhone.mailPhoneCountry}
        countryCode={values.mailPhone.mailPhoneCountryCode}
        setValue={setValue}
        nameSpace="mailPhone"
        control={control}
        placeholder="(___) ___ __-__"
      />
      <CommonTextArea
        label={t('form.additional_info')}
        errors={errors}
        name="additional_info"
        setValues={setValues}
        control={control}
        rules={{
          required: true
        }}
      />
      <CommonTextArea
        label={t('form.delivery_info')}
        errors={errors}
        name="delivery_info"
        setValues={setValues}
        control={control}
        rules={{
          required: true
        }}
      />
      <SelectPicker
        options={messengerListOptions}
        rules={{
          required: true
        }}
        label={t('form.preferred_messenger')}
        name="messenger"
        control={control}
      />
    </GUI.ScreenWrapper>
  )
}

export default AddEdit
