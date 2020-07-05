export function fetchMessages() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/channels/1/messages')
      .then(resp => resp.json())
      .then(messages => dispatch({
          type: 'FETCH_MESSAGES',
          payload: messages
      }))
  }
}