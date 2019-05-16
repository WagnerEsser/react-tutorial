import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss'
import { useTranslation } from 'react-i18next'

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();

    return (
        <header>
            <h1>React Tutorial</h1>
            <nav>
                <ul>
                    <li><Link to='/'><strong>{t('common.home')}</strong></Link></li>
                    <li><Link to='/page'>{t('common.page')}</Link></li>
                    <li><Link to='/page/1'>{t('others.page_param')}</Link></li>
                    <li><Link to='/api'>API</Link></li>
                    <li><Link to='/about'>{t('common.about')}</Link></li>

                    <li className="nav-divider">
                        <a onClick={() => i18n.changeLanguage('pt-BR')}>
                            <small>{t('common.portuguese')}</small>
                        </a>
                    </li>
                    <li className="last-item">
                        <a onClick={() => i18n.changeLanguage('en-US')}>
                            <small>{t('common.english')}</small>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


