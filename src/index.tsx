import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.scss';
import App from './App';
import Page from './Page'
import About from './About'
import Api from './Api';
import PageNotFound from './404';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/page/' component={Page} />
            <Route path='/page/:parameter' component={Page} />
            <Route path='/api' component={Api} />
            <Route exact path='/about' component={About} />
            <Route path='*' exact={true} component={PageNotFound} />
        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
