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
            ]
        },

        sidebar: {}

    },

    _callSubscriber() {
    },

    getState(){
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST-BLOCK'){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }


};

export default store;