import { createStore } from "redux";
import { AllReducer } from "./AllReducer";

export const store = createStore(AllReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())