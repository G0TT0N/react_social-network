const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        /*{
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
        }*/
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};


        default:
            return state;
    }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;