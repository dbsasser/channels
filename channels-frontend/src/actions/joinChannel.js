export function joinChannel(membership) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/memberships`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            },
            body: JSON.stringify(membership),
        })
        .then(resp => resp.json())
        .then(result => {
                dispatch({
                    type: 'ADD_CHANNEL',
                    payload: result
                })
            })
    }
}