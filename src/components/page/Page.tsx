import React from 'react'
import './page.scss'
import { useTranslation } from 'react-i18next'

const Page: React.FC = (props: any) => {
  const { t } = useTranslation();
  const param = props.match.params.parameter

  return (
    <div className="container">
      <div>
        {param ?
          <p>{t('Page')} - {t('Parameter')}: {param}</p>
          :
          <p>{t('Param-not-found')}</p>
        }
      </div>
    </div>
  )
}

export default Page