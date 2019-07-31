const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
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
    ],
    newPostText: 'add new Post'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: text});


export default profileReducer;