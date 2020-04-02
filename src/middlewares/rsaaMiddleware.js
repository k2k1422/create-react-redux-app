import { isRSAA, apiMiddleware } from "redux-api-middleware"

import { TOKEN_RECEIVED, refreshAccessToken } from "../actions/auth"
import { getRefreshToken, getUserID, isAccessTokenExpired } from "../selectors/auth"

export const createApiMiddleware = () => {
    let postponedRSAAs = []

    return ({ dispatch, getState }) => {
        const rsaaMiddleWare = apiMiddleware({ dispatch, getState })
        return (next) => (action) => {
            const nextCheckPostponed = (nextAction) => {
                if (nextAction.type === TOKEN_RECEIVED) {
                    next(nextAction)
                    postponedRSAAs.forEach((postponed) => {
                        dispatch(postponed)
                    })
                    postponedRSAAs = []
                } else {
                    next(nextAction)
                }
            }
            if (isRSAA(action)) {
                const state = getState(),
                    token = getRefreshToken(state),
                    uid = getUserID(state)

                if (token && isAccessTokenExpired(state)) {
                    postponedRSAAs.push(action)
                    if (postponedRSAAs.length === 1) {
                        const action = refreshAccessToken(uid, token)
                        return rsaaMiddleWare(nextCheckPostponed)(action)
                    } else {
                        return
                    }
                }
                return rsaaMiddleWare(next)(action)
            }
            return next(action)
        }
    }
}

export default createApiMiddleware()
