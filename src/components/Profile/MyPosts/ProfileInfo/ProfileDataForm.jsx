import React from "react";
import {createField, Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import style from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
            </div>
            {error &&
            <div className={style.formSummaryError}>{error}</div>
            }
            <div>
                Full name: {createField("Full name", "fullName", [], Input)}
            </div>
            <div>
                Looking for a job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                My professional
                skills: {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>
            <div>
                About me: {createField("About me", "aboutMe", [], TextArea)}
            </div>
            <div>
                Contacts: {Object.keys(profile.contacts).map(key => { // итерируем объект и создаем список контактной информации
                return (
                    <div key={key}>
                        {key} : {createField("", "fullName." + key, [], Input)}
                    </div>
                )
            })}
            </div>
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;