export default function(state = { users:[]}, action){
    switch(action.type) {
        case 'FETCH_CHANNEL':
            return action.payload

        default:
            return state
    }
}