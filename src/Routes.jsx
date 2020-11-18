import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './App';
import pathNames from './utils/pathnames';
import Test from './test';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Products from './pages/ProductsPage';
import EditProduct from './pages/EditProduct';
import Networks from './pages/NetworksPage';
import EditNetwork from './pages/EditNetwork';

function Routes() {
    return (
        <Switch>
            <Route exact path={pathNames.home} component={Home} />
            <Route exact path={"/test"} component={Test} />
            <Route exact path={pathNames.login} component={Login} />
            <Route exact path={pathNames.admin} component={Dashboard} />
            <Route exact path={pathNames.products} component={Products} />
            <Route exact path={pathNames.product_edit} component={EditProduct} />
            <Route exact path={pathNames.networks} component={Networks} />
            <Route exact path={pathNames.network_edit} component={EditNetwork} />
        </Switch>
    );
}

export default Routes;