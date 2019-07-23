import React from 'react';
import style from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={style.item}>
            <img src="https://cdn2.img.inosmi.ru/images/24413/79/244137985.jpg" alt="tramp"/>
            <p>{props.message}</p>
        </div>
    )
};

export default Posts;