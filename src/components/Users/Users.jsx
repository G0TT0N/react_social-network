import React from 'react';
import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0){
        props.setUsers([
            {
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                followed: false,
                id: 1,
                fullName: 'Andrey',
                status: 'status 1',
                location: {city: 'Povlovo', country: 'Russia'}
            },
            {
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                followed: true,
                id: 2,
                fullName: 'Maxim',
                status: 'status 2',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                followed: false,
                id: 3,
                fullName: 'Alexandr',
                status: 'status 3',
                location: {city: 'Novgorod', country: 'Russia'}
            },
            {
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                followed: true,
                id: 4,
                fullName: 'Oly',
                status: 'status 4',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/220px-User_icon_2.svg.png',
                followed: false,
                id: 5,
                fullName: 'Tatiana',
                status: 'status 5',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }


    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.fullName}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{user.location.country}</div>
                            <div>{user.location.city}</div>
                        </span>


                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;