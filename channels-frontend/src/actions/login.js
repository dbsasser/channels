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