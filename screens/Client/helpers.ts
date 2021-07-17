import * as yup from 'yup'
import i18n from '../../locales/index'

export const clientSchema = yup.object().shape({
  firstName: yup.string().required().max(14),
  lastName: yup.string().max(14),
  phone: yup.string().required().max(14),
  mail_phone: yup.string().required().max(14),
  additional_info: yup.string().max(200, i18n.t('errors.textarea_too_long')),
  delivery_info: yup.string().max(200, i18n.t('errors.textarea_too_long'))
})

export const defaultValues = {
  firstName: '',
  lastName: '',
  additional_info: '',
  delivery_info: '',
  phone: '',
  messenger: 'TELEGRAM',
  phoneCountry: 'RU',
  phoneCountryCode: '7',
  mailPhone: '',
  mailPhoneCountry: 'RU',
  mailPhoneCountryCode: '7'
}

export const messengerListOptions = [
  {
    value: 'TELEGRAM',
    label: 'TELEGRAM'
  },
  {
    value: 'VIBER',
    label: 'VIBER'
  },
  {
    value: 'WHATSAPP',
    label: 'WHATSAPP'
  }
]
