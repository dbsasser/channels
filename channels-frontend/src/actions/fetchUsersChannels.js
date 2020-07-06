export function fetchUsersChannels() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/1/channels')
      .then(resp => resp.json())
      .then(channels => dispatch({
          type: 'FETCH_USERS_CHANNELS',
          payload: channels
      }))
  }
}