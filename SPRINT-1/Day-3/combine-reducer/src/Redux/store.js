import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
// import { reducer } from "../../Redux/reducer";
import { authReducer } from "./auth/reducer";
import { reducer } from "./app/reducer";

const rootReducer = combineReducers({
    app: reducer,
    auth: authReducer,
})

const logger1 = (state) => (next) => (action) => {
    console.log("dispatching action", action, next, state);
    const val = next(action);
    console.log("exciting logger1");
    return val
}

const logger2 = (state) => (next) => (action) => {
    console.log("dispatching action from logger 2", action, next, state);
    const val = next(action);
    console.log("exciting logger2");
    return val
}

export const store = legacy_createStore(
    rootReducer, 
    applyMiddleware(logger1, logger2)
    // window.__REDUX_DEVTOOLS_EXTENSION_ || window.__REDUX_DEVTOOLS_EXTENSION__()
    )