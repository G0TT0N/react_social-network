import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();


