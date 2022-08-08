import {legacy_createStore, applyMiddleware} from "redux";
import { reducer } from "./AppReducer/reducer";
import thunk from "redux-thunk"

// const rootReducer = combineReducers({
//     app: App
// })

export const store = legacy_createStore(reducer, applyMiddleware(thunk))