import React from 'react';
import style from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""/>
            </div>
            <div className={style.descriptionBlock}>
                ava + desc
            </div>
        </div>
    )
};

export default ProfileInfo;