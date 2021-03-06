﻿import React from 'react';
import { IndexRedirect, Route, hashHistory, IndexRoute, Router } from 'react-router';
import app from '../app';
import Landing from '../Landing';
import Main from '../chatcontainer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from '../reducers/index';
import {setUsername} from '../actions/index';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(logger)
);

const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Landing}>
                <IndexRoute component={Landing} />
            </Route>
            <Route path="/main" component={Main} />
        </Router>
    </Provider>
    );

export default routes;