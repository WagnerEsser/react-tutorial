import React from 'react'
import './footer.scss'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <p>{t('common.footer')}</p>
        </footer>
    )
}

export default Footer


