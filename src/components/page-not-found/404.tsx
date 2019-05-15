import React from 'react'
import './404.scss'
import { useTranslation } from 'react-i18next';

const PageNotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <p>{t('Page-not-found')}</p>
    </div>
  )
}

export default PageNotFound