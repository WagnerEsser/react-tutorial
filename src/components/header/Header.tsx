import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const Traduzir = (lng: string) => i18n.changeLanguage(lng);

    return (
        <header>
            <h1>React Tutorial</h1>
            <nav>
                <ul>
                    <li><Link to='/'><strong>{t('Home')}</strong></Link></li>
                    <li><Link to='/page'>{t('Page')}</Link></li>
                    <li><Link to='/page/1'>{t('Page-param')}</Link></li>
                    <li><Link to='/api'>API</Link></li>
                    <li><Link to='/about'>{t('About')}</Link></li>
                    
                    <li className="nav-divider">
                        <a onClick={() => Traduzir('pt')}>
                            <small>{t('Portuguese')}</small>
                        </a>
                    </li>
                    <li>
                        <a onClick={() => Traduzir('en')}>
                            <small>{t('English')}</small>
                        </a>
                    </li>
                    <li className="last-item">
                        <a onClick={() => Traduzir('es')}>
                            <small>{t('Spanish')}</small>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


