import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            <Posts/>
            <Posts/>
        </div>
    )
};

export default MyPosts;