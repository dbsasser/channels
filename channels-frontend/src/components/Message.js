import React from 'react'

const Message = ({message}) => {

    return (
        <>
        <div key={message.id} className="container">
            <div className="row">
                <div className="col-md-auto">
                    <img src="/default-avatar.jpg" className="rounded" width="38" height="38"></img>
                </div>
                <div className="col">
                <strong>{message.user.name}</strong>   <small>{message.date_and_time}</small><br />
                {message.body}
                </div>
            </div>
        </div>
        </>           
    )
}

export default Message