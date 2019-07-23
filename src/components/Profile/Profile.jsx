import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}
                     addPostBlock={props.addPostBlock}/>
        </div>
    )
};

export default Profile