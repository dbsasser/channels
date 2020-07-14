export function signup(user) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })      
            .then(resp => resp.json())
            .then(result => {
                    localStorage.setItem('token', result.jwt)
                    dispatch({
                        type: 'FETCH_USER',
                        payload: result.user 
                    })
                })
    }
}


export function login(user) {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })      
            .then(resp => resp.json())
            .then(result => {
                    localStorage.setItem('token', result.jwt)
                    dispatch({
                        type: 'FETCH_USER',
                        payload: result.user
                    })
                    
                })
            
    }
}

export function getCurrentUser() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/current_user', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            }
        })
          .then(resp => resp.json())
          .then(user => dispatch({
            type: 'FETCH_USER',
            payload: user
        }))
    }
}

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

export function deleteMembership(membership_id) {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/memberships/${membership_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.token}`,
            }
        })
        .then(
            window.location.href = "http://localhost:3001/channels/1"
        )
    }
}