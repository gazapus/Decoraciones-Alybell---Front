import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './App';
import pathNames from './utils/pathnames';
import Test from './test';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={"/test"} component={Test} />
            <Route exact path={pathNames.login} component={Login} />
            <Route exact path={pathNames.admin} component={Dashboard} />

        </Switch>
    );
}

export default Routes;