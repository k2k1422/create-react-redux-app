import { RSAA } from "redux-api-middleware"

export const LOGIN_REQUEST = "@@auth/LOGIN_REQUEST"
export const LOGIN_SUCCESS = "@@auth/LOGIN_SUCCESS"
export const LOGIN_FAILURE = "@@auth/LOGIN_FAILURE"
export const TOKEN_REQUEST = "@@auth/TOKEN_REQUEST"
export const TOKEN_RECEIVED = "@@auth/TOKEN_RECEIVED"
export const TOKEN_FAILURE = "@@auth/TOKEN_FAILURE"

export const LOGOUT = "LOGOUT"

export const login = (username, password) => ({
    [RSAA]: {
        endpoint: "/api/token/",
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
        headers: { "Content-Type": "application/json" },
        types: [
            LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
        ]
    }
})

export const refreshAccessToken = (uid, token) => ({
    [RSAA]: {
        endpoint: '/api/token/refresh/',
        method: 'POST',
        body: JSON.stringify({ uid, refresh_token: token }),
        headers: { 'Content-Type': 'application/json' },
        types: [
            TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
        ]
    }
})


export const logout = () => ({
    type: LOGOUT
})