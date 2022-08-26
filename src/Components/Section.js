import React from 'react'
import { useTranslation } from 'react-i18next'

const Section = () => {
  const { t } = useTranslation()
  return (
    <div>{t('section')}</div>
  )
}

export default Section