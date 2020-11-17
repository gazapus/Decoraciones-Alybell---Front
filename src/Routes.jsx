import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './App';
import pathNames from './utils/pathnames';
import Test from './test';
import Login from './components/Login';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={"/test"} component={Test} />
            <Route exact path={"/login"} component={Login} />
            
        </Switch>
    );
}

export default Routes;