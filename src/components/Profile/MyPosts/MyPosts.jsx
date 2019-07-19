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

    return (
        <div className={style.postsBlock}>
            <div>
                123
            </div>
            <div className={style.posts}>
                <Posts message={postsData[0].message} likeCount={postsData[0].likesCount}/>
                <Posts message={postsData[1].message} likeCount={postsData[1].likesCount}/>
                <Posts message={postsData[2].message} likeCount={postsData[2].likesCount}/>
                <Posts message={postsData[3].message} likeCount={postsData[3].likesCount}/>
                <Posts message={postsData[4].message} likeCount={postsData[4].likesCount}/>
                <Posts message={postsData[5].message} likeCount={postsData[5].likesCount}/>
            </div>

        </div>
    )
};

export default MyPosts;