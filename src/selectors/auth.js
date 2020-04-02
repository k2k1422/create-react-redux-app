import * as auth from "../reducers/auth"

export const getAccessToken = (state) => (
    auth.getAccessToken(state.auth)
)

export const getRefreshToken = (state) => (
    auth.getRefreshToken(state.auth)
)

export const isAccessTokenExpired = (state) => (
    auth.isAccessTokenExpired(state.auth)
)

export const isRefreshTokenExpired = (state) => (
    auth.isRefreshTokenExpired(state.auth)
)

export const isUserAuthenticated = (state) => (
    auth.isAuthenticated(state.auth)
)

export const getUserID = (state) => (
    auth.getUserID(state.auth)
)

export const getUserName = (state) => (
    auth.getUserName(state.auth)
)

export const getLogoutStatus = (state) => (
    auth.getLogoutStatus(state.auth)
)

export const getAuthErrors = (state) => (
    auth.getErrors(state.auth)
)

export const getResetPasswordStatus = (state) => (
    auth.getResetPasswordStatus(state.auth)
)

export const getSetNewPasswordStatus = (state) => (
    auth.getSetNewPasswordStatus(state.auth)
)