import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import HomePage from '../components/HomePage'
import ReadPage from '../components/ReadPage';
import EditPage from '../components/EditPage';

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>
        <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute exact path="/read/:id" component={ReadPage} />
            <PublicRoute exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/edit/:id" component={EditPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
</Router>
)

export default AppRouter