import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus,isOwner, savePhoto}) => {
    return (
        <div>
            <ProfileInfo
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