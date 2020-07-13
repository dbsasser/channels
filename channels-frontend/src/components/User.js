import React from 'react'

const User = ({user, handleSignOut}) => {

    return (
        <div key={user.id}>
            
            <div className='row'>
                <div className='col-md-auto ml-2 mt-1'>
                    <img src='/default-avatar.jpg' alt="default user avatar"></img>
                </div>
                <div className='col ml-0 pl-0'>
                    <strong>{user.name}</strong><br />
                    {user.email}<br />
                    <small><button onClick={handleSignOut} className="btn btn-link">Sign Out</button></small>
                </div>
            </div>
        </div>
    )
}

export default User