import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
};

const Dialogs = (props) => {
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


    let dialogElements = dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );


    let messagesElements = messagesData.map(
        message => <Message message={message.message}/>
    );

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;