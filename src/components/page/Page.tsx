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
          <p>{t('common.page')} - {t('common.parameter')}: {param}</p>
          :
          <p>{t('others.param_not_found')}</p>
        }
      </div>
    </div>
  )
}

export default Page