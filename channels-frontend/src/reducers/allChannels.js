export default function(state = [], action){
    switch(action.type) {
        case 'FETCH_ALL_CHANNELS':
            return action.payload

        default:
            return state
    }
}