import React from 'react';
import { IndexRedirect, Route, hashHistory, IndexRoute, Router } from 'react-router';
import app from '../app';
import Landing from '../Landing';

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Landing}>
            <IndexRoute component={Landing} />
        </Route>
    </Router>
    );

export default routes;