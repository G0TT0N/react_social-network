import {rerenderEntireTree} from "../render";

let state = {
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
        ]
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

};

export let addPostBlock = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderEntireTree(state);
};

export default state;