import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postsData = [
    {
        id: 1,
        message: 'qwe',
        likesCount: 10
    },
    {
        id: 2,
        message: 'qwe',
        likesCount: 10
    },
    {
        id: 3,
        message: 'qwe',
        likesCount: 10
    },
    {
        id: 4,
        message: 'qwe',
        likesCount: 10
    },
    {
        id: 5,
        message: 'qwe',
        likesCount: 10
    },
    {
        id: 6,
        message: 'qwe',
        likesCount: 10
    }
];

let dialogsData = [
    {
        id: 1,
        name: 'Andrew'
    },
    {
        id: 2,
        name: 'Sveta'
    },
    {
        id: 3,
        name: 'Maxim'
    },
    {
        id: 4,
        name: 'Igor'
    },
    {
        id: 5,
        name: 'Ivan'
    },
    {
        id: 6,
        name: 'Anton'
    }
];

let messagesData = [
    {
        id: 1,
        message: '111'
    },
    {
        id: 2,
        message: '222'
    },
    {
        id: 3,
        message: '333'
    },
    {
        id: 4,
        message: '444'
    },
    {
        id: 5,
        message: '555'
    },
    {
        id: 6,
        message: '666'
    }
];

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));

serviceWorker.unregister();


