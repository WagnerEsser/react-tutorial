import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss'

const Header: React.FC = () => (
    <header>
        <h1>React Tutorial</h1>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/page'>Page</Link></li>
                <li><Link to='/page/1'>Page (with parameter)</Link></li>
                <li><Link to='/api'>API</Link></li>
                <li className="last-item"><Link to='/about'>About page</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header


