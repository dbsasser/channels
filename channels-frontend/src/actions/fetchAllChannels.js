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