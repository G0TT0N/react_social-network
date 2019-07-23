import React from 'react';
import style from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );

    let messagesElements = props.state.messagesData.map(
        message => <Message message={message.message}/>
    );

    let messageText = React.createRef();

    let addNewMessage = () => {
      let text = messageText.current.value;
      alert(text);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={messageText}></textarea>
                <button onClick={addNewMessage}>Add message</button>
            </div>
        </div>
    )
};

export default Dialogs;