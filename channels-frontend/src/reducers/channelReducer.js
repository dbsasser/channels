export default function channelReducer(state = {messages: [], users_channels: []}, action) {

    switch (action.type) {
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}

        case 'SEND_MESSAGE':
            return {messages: action.payload}

        case 'FETCH_USERS_CHANNELS':
            return {...state, users_channels: action.payload}
            
        default:
            return state
    }
    
}