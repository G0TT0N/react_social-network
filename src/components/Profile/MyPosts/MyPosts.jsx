import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsElement = props.postsData.map (
        elem => <Posts message={elem.message} likeCount={elem.likesCount}/>
    );

    return (
        <div className={style.postsBlock}>
            <div>
                123
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>

        </div>
    )
};

export default MyPosts;