import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage'
import ReadPage from '../components/ReadPage';
import EditPage from '../components/EditPage';
import AddPage from '../components/AddPage';

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/read/:uid/:id" component={ReadPage} />
            <PublicRoute exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/add/:uid/" component={AddPage} />
            <PrivateRoute exact path="/edit/:uid/:id" component={EditPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
)

export default AppRouter