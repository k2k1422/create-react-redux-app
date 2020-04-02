import { addAlert } from "../actions/alert"
import { statusCodes, codeMessageMapping } from "../utils/notifications"

export default ({ dispatch }) => (next) => (action) => {
  try {
    console.log(action)
    if (action.type.includes("FAILURE")) {
      var { payload } = action
      try {
        var {
          message: statusMessage,
          response: {
            response_code: responseCode,
            response_message: responseMessage,
          },
        } = payload
        if (statusCodes[responseCode]) {
          // show notifications only if statusCodes[responseCode] is true
          dispatch(
            addAlert({
              alertType: "error",
              alertMessage: codeMessageMapping[responseCode],
            }),
          )
        }
      } catch (error) {
        dispatch(
          addAlert({
            alertType: "error",
            alertMessage: statusMessage,
          }),
        )
      }
    } else if (action.type.includes("SUCCESS")) {
      let { payload } = action
      let {
        response_code: responseCode,
        response_message: responseMessage,
      } = payload
      if (statusCodes[responseCode]) {
        dispatch(
          addAlert({
            alertType: "success",
            alertMessage: codeMessageMapping[responseCode],
          }),
        )
      }
    }
  } catch (err) {
    console.log("Error occurred in responseStatus middleware", err)
    next(action)
  }

  next(action)
}
