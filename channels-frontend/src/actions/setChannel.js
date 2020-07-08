export function setChannel(channel_id) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CHANNEL',
            payload: channel_id
        })
    }
}