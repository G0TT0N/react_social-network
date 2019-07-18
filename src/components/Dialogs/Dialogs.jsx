import React from 'react';
import style from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog + ' ' + style.active}>
                    123
                </div>
                <div className={style.dialog}>
                    123
                </div>
                <div className={style.dialog}>
                    123
                </div>
                <div className={style.dialog}>
                    123
                </div>
                <div className={style.dialog}>
                    123
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>
                    321
                </div>
                <div className={style.message}>
                    321
                </div>
                <div className={style.message}>
                    321
                </div>
            </div>
        </div>
    )
};

export default Dialogs;