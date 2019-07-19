import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (
        <div className={style.postsBlock}>
            <div>
                123
            </div>
            <div className={style.posts}>
                <Posts/>
                <Posts/>
            </div>

        </div>
    )
};

export default MyPosts;