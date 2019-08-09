const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}],
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;