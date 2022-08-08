import { legacy_createStore, combineReducers } from "redux";
import { reducer } from "./app/reducer";

export const store = legacy_createStore(reducer)