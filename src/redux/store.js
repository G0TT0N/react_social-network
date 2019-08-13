import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
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
        },

        dialogsPage: {

            messagesData: [
                {
                    id: 1,
                    message: '111'
                },
                {
                    id: 2,
                    message: '222'
                },
                {
                    id: 3,
                    message: '333'
                },
                {
                    id: 4,
                    message: '444'
                },
                {
                    id: 5,
                    message: '555'
                },
                {
                    id: 6,
                    message: '666'
                }
            ],

            dialogsData: [
                {
                    id: 1,
                    name: 'Andrew'
                },
                {
                    id: 2,
                    name: 'Sveta'
                },
                {
                    id: 3,
                    name: 'Maxim'
                },
                {
                    id: 4,
                    name: 'Igor'
                },
                {
                    id: 5,
                    name: 'Ivan'
                },
                {
                    id: 6,
                    name: 'Anton'
                }
            ],

            newMessageBody: ""
        },

        sidebar: {}

    },

    _callSubscriber() {
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state); // функция ререндеринга
    }


};

export default store;