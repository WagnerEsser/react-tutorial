import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss'
import { Trans } from 'react-i18next';

const Header: React.FC = () => {
    return (
        <header>
            <h1>React Tutorial</h1>
            <nav>
                <ul>
                    <li><Link to='/'><Trans><strong>Home</strong></Trans></Link></li>
                    <li><Link to='/page'><Trans>Page</Trans></Link></li>
                    <li><Link to='/page/1'><Trans>Page-param</Trans></Link></li>
                    <li><Link to='/api'>API</Link></li>
                    <li className="last-item"><Link to='/about'><Trans>About</Trans></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


