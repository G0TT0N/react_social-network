import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPostBlock} from './redux/state'

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostBlock={addPostBlock}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};