/* eslint-disable default-case */
import produce from "immer"
import * as auth from "../../actions/auth"

const initialState = {
    uid: undefined,
    access: undefined,
    refresh: undefined,
    activity: undefined,
    errors: {},
    resetPassword: undefined,
    newPassword: undefined,
    userName:undefined,
    logout: undefined
}

export default produce(
    (draftState, action) => {
        switch (action.type) {
            case auth.LOGIN_SUCCESS:
                draftState.uid = action.payload.data.uid
                draftState.access = {
                    token: action.payload.data.access_token,
                    expiryTime: action.payload.data.access_token_expiry_time
                }
                draftState.refresh = {
                    token: action.payload.data.refresh_token,
                    expiryTime: action.payload.data.refresh_token_expiry_time
                }
                draftState.activity = action.payload.data.activity
                draftState.errors = {}
                draftState.userName = action.payload.data.user_name
                draftState.logout = false
                break

            case auth.TOKEN_RECEIVED:
                draftState.access = {
                    token: action.payload.data.access_token,
                    expiryTime: action.payload.data.access_token_expiry_time
                }
                break

            case auth.LOGOUT:
                draftState.uid = undefined
                draftState.access = undefined
                draftState.refresh = undefined
                draftState.activity = undefined
                draftState.errors = { }
                draftState.resetPassword = undefined
                draftState.newPassword = undefined
                draftState.userName = undefined
                draftState.logout = true
                break
            case auth.LOGIN_FAILURE:
            case auth.TOKEN_FAILURE:
                draftState.access = undefined
                draftState.refresh = undefined
                draftState.errors = action.payload.response ||
                    { 'non_field_errors': action.payload.statusText }
                break
        }

    }, initialState
)

export const getAccessToken = (state) => {
    if (state.access) {
        return state.access.token
    }
}

export const getRefreshToken = (state) => {
    if (state.refresh) {
        return state.refresh.token
    }
}

export const isAccessTokenExpired = (state) => {
    if (state.access && state.access.expiryTime) {
        return 1000 * state.access.expiryTime - (new Date()).getTime() < 5000
    }
    return true
}

export const isRefreshTokenExpired = (state) => {
    if (state.refresh && state.refresh.expiryTime) {
        return (new Date()).getTime() > state.refresh.expiryTime * 1000
    }
    return true
}

export const isAuthenticated = (state) => {
    return !isRefreshTokenExpired(state)
}

export const getUserID = (state) => (
    state.uid
)

export const getUserName = (state) => (
    state.userName
)

export const getErrors = (state) => (
    state.errors
)

export const getResetPasswordStatus = (state) => {
    return state.resetPassword
}

export const getSetNewPasswordStatus = (state) => {
    return state.newPassword
}

export const getLogoutStatus = (state) => {
    return state.logout
}