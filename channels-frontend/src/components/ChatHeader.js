import React from 'react'

const ChatHeader = ({channel, leaveChannel}) => {

    return (
        <>
        <div className="sticky-top m-10 border-bottom">
            <div className="row">
                <div key={channel.id} className="col">
                    <strong># {channel.name}</strong> - <small>{channel.description}</small><br />
                    <small>{channel.users.length} Members</small>
                </div>

                <div className="col text-right">
                    <button className="btn btn-outline-danger btn-sm mt-2" onClick={leaveChannel}>Leave Channel</button>
                </div>
            </div>
        </div>
        </>           
    )
}

export default ChatHeader