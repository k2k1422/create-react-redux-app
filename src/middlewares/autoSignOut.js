import { isRSAA, RSAA } from "redux-api-middleware"

import { getAccessToken, getUserID } from "../selectors/auth"

export default ({ getState }) => next => (action) => {
    if (!isRSAA(action)){
        if (action.type.includes("FAILED")) {
            console.log(action)
            if (action.payload.statusText === "Unauthorized") {
                console.log("SIGN OUT")
            }
        }
    }
    next(action)
}