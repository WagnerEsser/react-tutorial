import React from 'react'
import './about.scss'
import { useTranslation } from 'react-i18next'

const Page: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <p>{t('common.about')}</p>
    </div>
  )
}

export default Page