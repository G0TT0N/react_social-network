import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = state.messagesData.map(
        message => <Message message={message.message}/>
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };



    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                            placeholder='Enter your message'>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;