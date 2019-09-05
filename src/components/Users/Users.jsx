import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
                 totalUsersCount,
                 pageSize,
                 currentPage,
                 onPageChanged,
                 users,
                 followingInProgress,
                 unfollow,
                 follow
             }) => {
    return (
        <div>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
            />
            <div>
                {users.map(user =>
                    <User
                        user={user}
                        followingInProgress={followingInProgress}
                        unfollow={unfollow}
                        follow={follow}
                        key={user.id}
                    />)}
            </div>
        </div>
    )
};

export default Users;