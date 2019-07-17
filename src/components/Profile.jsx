import React from 'react';
import style from './Profile.module.css'


const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile