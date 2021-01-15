import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../css/app.css';
import '../css/all.css';

import Home from './components/Home';
import Details from './components/Post/Details';

function App() {
    return (
        <Switch>
        <Route path='/post/:id' component={Details} />
            <Route path='/' component={Home} />
        </Switch>
    );
}

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
