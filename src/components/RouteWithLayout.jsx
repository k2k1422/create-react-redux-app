import React,{ useEffect } from 'react';
import PropTypes from 'prop-types';
import { isUserAuthenticated, getAccessToken, isAccessTokenExpired } from "../selectors"
import { Route, Redirect } from "react-router"
import { connect } from "react-redux"

const RouteWithLayout = props => {
    const { layout: Layout, component: Component, isAuthenticated, isExpired, access_token, ...rest } = props

    console.log(isAuthenticated)

        return (
            <Route {...rest} 
                render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
            )} />
        )
}

const mapStateToProps = (state) => ({
    isAuthenticated: isUserAuthenticated(state),
    access_token: getAccessToken(state),
    isExpired: isAccessTokenExpired(state)
})

const mapDispatchToProps = (dispatch) => ({
    // validateToken: () => {
    //     dispatch(validateToken())
    // }
})

export default connect(mapStateToProps, mapDispatchToProps)(RouteWithLayout);