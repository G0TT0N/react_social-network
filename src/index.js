import React from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <BrowserRouter>   {/* позволяет использовать рендер компонент по ссылкам согласно их URL пути */}
        <Provider store={store}> {/* контекст от реакт-редакса */}
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);


serviceWorker.unregister();


