import React, { useEffect, useState } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { connect } from "react-redux"
import  Demo from "./Demo"
import {
    Login as LoginView,
    SelectTable as SelectTableView,
    WelcomePage as WelcomePageView
} from "./views"
import { Main as MainLayout } from "./layouts"

import { RouteWithLayout } from "./components"

const Routes = (props) => {

    return (
        <div>
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/selectTable"
                />
                <RouteWithLayout
                    component={Demo}
                    exact
                    layout={MainLayout}
                    path="/demo"
                />
                <RouteWithLayout
                    component={SelectTableView}
                    exact
                    layout={MainLayout}
                    path="/selectTable"
                />
                <Route
                    component={LoginView}
                    exact
                    path="/login"
                />
                <Route
                    component={WelcomePageView}
                    exact
                    path="/home"
                />
            </Switch>
        </div>
    )
}


export default Routes;