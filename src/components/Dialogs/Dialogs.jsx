import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.messagesData.map(
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