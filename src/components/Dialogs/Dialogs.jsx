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
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sveta' id='3'/>
                <DialogItem name='Katy' id='4'/>
                <DialogItem name='Igor' id='5'/>
                <DialogItem name='Ivan' id='6'/>
            </div>
            <div className={style.messages}>
                <Message message='111'/>
                <Message message='222'/>
                <Message message='333'/>
            </div>
        </div>
    )
};

export default Dialogs;