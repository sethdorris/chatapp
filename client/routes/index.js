import React from 'react';
import { IndexRedirect, Route, hashHistory, IndexRoute, Router } from 'react-router';
import app from '../app';
import Landing from '../Landing';
import Main from '../chatcontainer';
import {Provider} from 'react-redux';

let store = createStore();

const routes = (
    <Provider store={}>
        <Router history={hashHistory}>
            <Route path="/" component={Landing}>
                <IndexRoute component={Landing} />
            </Route>
            <Route path="/main" component={Main} />
        </Router>
    </Provider>
    );

export default routes;