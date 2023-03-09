import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "redux-bundler-react";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);