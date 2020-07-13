import { combineReducers } from 'redux';
import user from './user'
import channel from './channel'
import messages from './messages'
import allChannels from './allChannels'

const rootReducer = combineReducers({
    user, 
    channel, 
    messages,
    allChannels
})

export default rootReducer