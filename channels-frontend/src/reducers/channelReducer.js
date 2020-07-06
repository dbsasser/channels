export default function channelReducer(state = {messages: [], users_channels: []}, action) {

    switch (action.type) {
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}

        case 'SEND_MESSAGE':
            return {...state, messages: action.payload}

        case 'FETCH_USERS_CHANNELS':
            return {...state, users_channels: action.payload}
        
        case 'FETCH_USER':
            return {...state, user: action.payload, loggedIn: true}

            
        default:
            return state
    }
    
}