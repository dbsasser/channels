export default function channelReducer(state = {messages: []}, action) {

    switch (action.type) {
        case 'FETCH_MESSAGES':
            return {messages: action.payload}

        case 'SEND_MESSAGE':
            return {messages: action.payload}
            
        default:
            return state
    }
    
}