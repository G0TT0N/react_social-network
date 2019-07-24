import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = (props) => {
    let postsElement = props.postsData.map(
        elem => <Posts message={elem.message} likeCount={elem.likesCount}/>
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST-BLOCK'
        });
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {
            type: 'UPDATE-NEW-POST-TEXT',
            newPostText: text
        };
        props.dispatch (action);

    };

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

export default MyPosts;