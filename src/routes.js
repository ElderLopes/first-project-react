import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './page/home'
import Users from './page/users'

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/usuarios' component={Users} />
            </Switch>
        </Router>
    )
}
export default Routes