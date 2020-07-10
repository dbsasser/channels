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