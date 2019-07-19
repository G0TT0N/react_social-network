import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    let postsData = [
        {
            id: 1,
            message: 'qwe',
            likesCount: 10
        },
        {
            id: 2,
            message: 'qwe',
            likesCount: 10
        },
        {
            id: 3,
            message: 'qwe',
            likesCount: 10
        },
        {
            id: 4,
            message: 'qwe',
            likesCount: 10
        },
        {
            id: 5,
            message: 'qwe',
            likesCount: 10
        },
        {
            id: 6,
            message: 'qwe',
            likesCount: 10
        }
    ];

    let postsElement = postsData.map (
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