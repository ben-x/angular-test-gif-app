import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux/reducers";
import "./index.css";
import WebRoute from "./routes/webRoute";
import Header from "components/header";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Header />
            <WebRoute />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
