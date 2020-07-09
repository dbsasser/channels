export function fetchChannel(channel_id) {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/channels/${channel_id}`)
      .then(resp => resp.json())
      .then(messages => dispatch({
          type: 'FETCH_CHANNEL',
          payload: messages
      }))
  }
}