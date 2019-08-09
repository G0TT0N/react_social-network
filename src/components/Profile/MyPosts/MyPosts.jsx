import React from 'react';
import style from './MyPosts.module.css';
import Posts from "./Post/Posts";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElement = props.postsData.map(elem =>
        <Posts
            message={elem.message}
            likeCount={elem.likesCount}
        />
    );

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={style.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newPostText'
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

let AddNewPostFormRedux = reduxForm({
    form: "ProfileAddNewPostForm"
})(AddNewPostForm);

export default MyPosts;