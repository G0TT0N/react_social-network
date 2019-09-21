import React, {useState} from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/User.png";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formdata) => {
        saveProfile(formdata);
        setEditMode(false);
    };

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {  // если есть массив переданных файлов
            savePhoto(e.target.files[0]); // то запушить изображение
        }
    };

    return (
        <div>
            <div className={style.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} className={style.mainPhoto} alt=""/>

                {isOwner && // если моя страница, то показать инпут загрузки
                <input type="file"
                       onChange={onMainPhotoSelected}
                />}

                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       profile={profile}
                                       onSubmit={onSubmit}
                    />
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true)
                                   }}
                    />
                }

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner &&
            <div>
                <button onClick={goToEditMode}>
                    Edit
                </button>
            </div>}
            <div>
                Full name: {profile.fullName}
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                My professional skills: {profile.lookingForAJobDescription}
            </div>}
            <div>
                About me: {profile.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => { // итерируем объект и создаем список контактной информации
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle}: {contactValue}
    </div>
};

export default ProfileInfo;