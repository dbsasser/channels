import React from 'react'

const Message = ({message}) => {

    return (
        <>
        <div key={message.id} className="container">
            <div className="row">
                <div className="col-md-auto mt-1">
                    <img src="/default-avatar.jpg" className="rounded" width="38" height="38"></img>
                </div>
                <div className="col pl-0">
                <strong>{message.user.name}</strong>   <small>{message.date_and_time}</small>
                <p className="message-body">{message.body}</p>
                </div>
            </div>
        </div>
        </>           
    )
}

export default Message