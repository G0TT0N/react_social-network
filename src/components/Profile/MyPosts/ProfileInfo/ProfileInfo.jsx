import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""
                    height="100px"
                    width='100%'
                />
            </div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.small} alt=""/>
                <p>{props.profile.contacts.instagram}</p>
            </div>
        </div>
    )
};

export default ProfileInfo;