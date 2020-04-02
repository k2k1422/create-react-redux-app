import { logout } from "../actions/auth"

export default ({ dispatch }) => next => action => {

    if (action.type.includes("FAILURE")) {

        console.log(action)

        try {
            var {
                message: statusMessage,
                response: {
                    response_code: responseCode,
                    response_message: responseMessage
                },
                statusText: statusText,
                status: status
            } = action.payload

            console.log(statusText)
            if (status == 401){
                dispatch(logout())
            }

        } catch (error) {
        }
    }

    next(action)
}