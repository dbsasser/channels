export default function(state = [], action){
    switch(action.type) {
        case 'FETCH_MESSAGES':
            return action.payload

        case 'ADD_NEW_MESSAGE':
            return [...state, action.payload]

        default:
            return state
    }
}