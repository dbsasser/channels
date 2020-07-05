import React from 'react'

const Message = ({message}) => {

    return (
        <div key={message.id}>
            {message.user.name} {message.date_and_time} <br></br>
            {message.body}
        </div>
    )
}

export default Message