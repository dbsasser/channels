import React from 'react'

const ChatHeader = ({channel}) => {

    return (
        <>
        <div key={channel.id} className="sticky-top m-10 border-bottom">
                <h6># {channel.name}</h6>
                {channel.users.length} Users - {channel.description}
        </div>
        </>           
    )
}

export default ChatHeader