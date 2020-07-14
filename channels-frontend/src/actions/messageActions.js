export function fetchMessages(channel_id) {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/channels/${channel_id}/messages`)
      .then(resp => resp.json())
      .then(messages => dispatch({
          type: 'FETCH_MESSAGES',
          payload: messages
      }))
  }
}

export function sendMessage(message) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/channels/${message.channel_id}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(message),
        })
  }
}

export function displayNewMessage(data) {
    return (dispatch) => {
        dispatch({
            type: 'ADD_NEW_MESSAGE',
            payload: data.message
        })
    }
}