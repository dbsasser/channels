export default function(state={channels: [], memberships: []}, action){
    switch(action.type) {

        case 'FETCH_USER':
            return action.payload

        case 'ADD_CHANNEL': 
            return {...state, channels: [...state.channels, action.payload.channel], memberships: [...state.memberships, action.payload.membership]}

        default:
            return state
    }
}