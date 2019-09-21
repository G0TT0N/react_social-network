import React from "react";
import {createField, Input, TextArea} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            {<div>
                <button>
                    Save
                </button>
            </div>}
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
            {/*<div>
                Contacts: {Object.keys(profile.contacts).map(key => { // итерируем объект и создаем список контактной информации
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>*/}
        </form>
    )
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;