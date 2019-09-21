import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
        <div>
            <ProfileInfo
                saveProfile={saveProfile}
                savePhoto={savePhoto}
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
};

export default Profile