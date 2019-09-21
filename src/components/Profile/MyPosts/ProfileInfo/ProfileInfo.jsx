import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/User.png";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){  // если есть массив переданных файлов
            savePhoto(e.target.files[0]); // то запушить изображение
        }
    };

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} className={style.mainPhoto} alt=""/>
                {isOwner && // если моя страница, то показать инпут
                <input type="file"
                       onChange={onMainPhotoSelected}
                />}
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};

export default ProfileInfo;