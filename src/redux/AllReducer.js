import { combineReducers } from "redux";
import operationsReducer from "./todoapp/reducers/Operations";

export const AllReducer = combineReducers({
    operationsReducer
})