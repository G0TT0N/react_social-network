const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
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
    ],

    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messagesData.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;