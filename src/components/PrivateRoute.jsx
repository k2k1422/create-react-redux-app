import React from "react"
import { Route, Redirect } from "react-router"
import { connect } from "react-redux"
import { isUserAuthenticated, getAccessToken } from "../selectors"

const PrivateRoute = ({
    component: Component, isAuthenticated, ...rest
}) => {
    return (
        <Route {...rest} render={props => (
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }} />
                )
        )} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isUserAuthenticated(state)
})

export default connect(mapStateToProps)(PrivateRoute)