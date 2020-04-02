import React, { useEffect } from "react"
import { Route, Redirect } from "react-router"
import { connect } from "react-redux"
import { isUserAuthenticated, getAccessToken } from "../selectors"


const PublicRoute = ({
    component: Component,
    isAuthenticated,
    access_token,
    // validateToken,
    ...rest
}) => {

    console.log(isAuthenticated)
    return (
        <Route {...rest} render={props => (
            !isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: "/dashboards",
                        state: { from: props.location }
                    }} />
                )
        )} />
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isUserAuthenticated(state),
    access_token: getAccessToken(state),
})

const mapDispatchToProps = (dispatch) => ({
    // validateToken: () => {
    //     dispatch(validateToken())
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)