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