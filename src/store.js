import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import storage from "redux-persist/es/storage"
import { createFilter } from "redux-persist-transform-filter"
import { persistReducer, persistStore } from "redux-persist"
import { routerMiddleware } from "connected-react-router"
import { apiMiddleware } from "redux-api-middleware"

import rootReducer from "./reducers"

export default (history) => {
    const persistFilter = createFilter(
    )

    const reducer = persistReducer(
        {
            key: "mom",
            storage: storage,
            whitelist: ["auth", "permissions"],
            transforms: [persistFilter]
        },
        rootReducer(history)
    )


    const store = createStore(
        reducer, {},
        composeWithDevTools(
            { trace: true, traceLimit: 25 }
        )(
            applyMiddleware(
                apiMiddleware,
                routerMiddleware(history),
            ),

        )
    )
    persistStore(store)
    return store
}