import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.scss';
import Header from './components/header/Header';
import PageNotFound from './components/page-not-found/404'
import Home from './components/home/Home'
import Page from './components/page/Page'
import Api from './components/api/Api'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import './i18n'

ReactDOM.render((
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/page/' component={Page} />
            <Route path='/page/:parameter' component={Page} />
            <Route path='/api' component={Api} />
            <Route exact path='/about' component={About} />
            <Route path='*' exact={true} component={PageNotFound} />
        </Switch>
        <Footer />
    </BrowserRouter>
), document.getElementById('root'));
