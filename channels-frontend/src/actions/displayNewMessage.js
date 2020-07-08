export function displayNewMessage(data) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_NEW_MESSAGE',
            payload: data.message
        })
    }
}