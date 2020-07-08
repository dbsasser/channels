export default function channelReducer(state = {channel_id: '', messages: [], users_channels: [], user: { channels:[] }}, action) {

    switch (action.type) {
        case 'FETCH_MESSAGES':
            return {...state, messages: action.payload}

        case 'SEND_MESSAGE':
            return {...state, messages: action.payload}

        case 'FETCH_USERS_CHANNELS':
            return {...state, users_channels: action.payload}
        
        case 'FETCH_USER':
            return {...state, user: action.payload, loggedIn: true}

        case 'RECIEVE_MESSAGE':

            return{...state, messages: [...state, action.payload]}
        
        case 'SET_CHANNEL':
        
            return{...state, channel_id: action.payload}
        
        case 'ADD_NEW_MESSAGE':
    
            return{...state, messages: [...state.messages, action.payload]}

            
        default:
            return state
    }
    
}