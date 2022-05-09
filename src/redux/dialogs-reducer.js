import userPhoto from '../assets/images/user4.png'

const SEND_MESSAGE = 'SEND-MESSAGE'

export const sendMessage = (chatMessage) => {
    return {type: SEND_MESSAGE, chatMessage}
}


let initialState = {
    messages: [
        {id:0, message:'Hi'},
        {id:1, message:'How is your doin?'},


    ],
    dialogs: [
        {id:0, name:'Masha', img:userPhoto},
        {id:1, name:'Sasha', img:userPhoto},
        {id:2, name:'Dima', img:userPhoto},
        {id:3, name:'Artem', img:userPhoto},
        {id:4, name:'Viktor', img:userPhoto},
        {id:5, name:'Valera', img:userPhoto},
        {id:6, name:'Sveta', img:userPhoto},
        {id:7, name:'Egor', img:userPhoto},
        {id:8, name:'Zhenya', img:userPhoto},
        {id:9, name:'Julia', img:userPhoto}
    ],
}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case (SEND_MESSAGE):
            
            return (
                {
                    ...state,
                    messages: [...state.messages, {id: 5, message: action.chatMessage,}],
                }
            )

        default:
            return state
    }

}

export default dialogsReducer