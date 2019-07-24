import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPostBlock={store.addPostBlock.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();


