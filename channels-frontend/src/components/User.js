import React from 'react'

const User = ({user}) => {

    return (
        <div key={user.id}>
            {user.name}<br></br>
            {user.email}
        </div>
    )
}

export default User