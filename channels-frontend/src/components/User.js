import React from 'react'

const User = ({user, handleSignOut}) => {

    return (
        <div key={user.id}>
            
            <div className='row'>
                <div className='col-md-auto ml-2 mt-1'>
                    <img src='/default-avatar.jpg'></img>
                </div>
                <div className='col ml-0 pl-0'>
                    <strong>{user.name}</strong><br />
                    {user.email}<br />
                    <small><a onClick={handleSignOut}>Sign Out</a></small>
                </div>
            </div>
        </div>
    )
}

export default User