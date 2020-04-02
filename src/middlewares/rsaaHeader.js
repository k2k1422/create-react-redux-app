import { isRSAA, RSAA } from "redux-api-middleware"

import { getAccessToken, getUserID } from "../selectors/auth"

export default ({ getState }) => next => (action) => {
    if (isRSAA(action)) {
        setTimeout(() => {
            let state = getState()
            let accessToken = getAccessToken(state),
                userID = getUserID(state)

            if (accessToken && userID) {
                action[RSAA].headers = {
                    ...action[RSAA].headers,
                    access_token: accessToken,
                    uid: userID
                }
            }
            next(action)
        }, 10)  // wait for the state to get initialized
    } else {
        next(action)
    }
}