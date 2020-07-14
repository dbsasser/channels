export function setChannel(channel_id) {
    return (dispatch) => {
        dispatch({
            type: 'SET_CHANNEL',
            payload: channel_id
        })
    }
}

export function fetchChannel(channel_id) {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/channels/${channel_id}`)
      .then(resp => resp.json())
      .then(channel => dispatch({
          type: 'FETCH_CHANNEL',
          payload: channel
      }))
  }
}

export function fetchAllChannels() {
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/channels/`)
      .then(resp => resp.json())
      .then(channels => dispatch({
          type: 'FETCH_ALL_CHANNELS',
          payload: channels
      }))
    }
}