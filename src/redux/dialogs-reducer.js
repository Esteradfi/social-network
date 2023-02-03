const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE ='SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Ann'},
        {id: 3, name: 'Joe'},
        {id: 4, name: 'Joseph'},
        {id: 5, name: 'Mike'},
        {id: 6, name: 'Bob'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are u?'},
        {id: 3, message: 'What\'s up?'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: 4, message: body});
            return stateCopy;
        }
    }

    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body,});

export default dialogsReducer;