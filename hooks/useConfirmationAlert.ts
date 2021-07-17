import React, { useState } from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'
import { useTranslation } from 'react-i18next'

interface IConfirmationProps {
  alertTitle: string
  alertMsg?: string
  confirmButtonText?: string
  cancelButtonText?: string
  confirmAction?: (any) => void
  cancelAction?: (any) => any
}

const useConfirmationAlert = ({
  alertTitle,
  alertMsg,
  confirmButtonText,
  cancelButtonText,
  confirmAction,
  cancelAction = () => null
}: IConfirmationProps) => {
  const { t } = useTranslation()

  return (props) =>
    Alert.alert(alertTitle, (alertMsg = t('modal.defaultMessage')), [
      {
        text: cancelButtonText || t('modal.cancel'),
        onPress: () => cancelAction(props),
        style: 'cancel'
      },
      {
        text: confirmButtonText || t('modal.ok'),
        onPress: () => confirmAction(props)
      }
    ])
}

export default useConfirmationAlert
