export function sendMessage(message) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/channels/${message.channel_id}/messages`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(message),
        })
    // fetch('http://localhost:3000/api/v1/channels/1/messages', {
    //     // header: {
    //     //     'Content-Type': 'application/json',
    //     //     'Accept':'application/json'
    //     // },
    //     method: 'POST',
    //     body: JSON.stringify(message)
    // })
    //   .then(resp => resp.json())
    //   .then(messages => dispatch({
    //       type: 'FETCH_MESSAGES',
    //       payload: messages
    //   }))
  }
}