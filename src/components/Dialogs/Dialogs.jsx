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

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={style.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    )
};

export default Dialogs;