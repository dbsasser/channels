import React from 'react'
import { Link } from 'react-router-dom';


const ChannelListing = ({channels}) => {

    
    return (

        <>
        <div className="card w-50 mx-auto mt-5">
        <div className="card-header">
            All Channels
        </div>
        <div className="card-body">
        {channels.map(channel => (
                <div key={channel.id} className='my-2'>
                <Link to={`/channels/${channel.id}`} className="card-link"># {channel.name}</Link> | <small>{channel.users.length} Members</small><br />
                {channel.description}
            </div>
        ))}
        </div>
        </div>
        </>
    )
}

export default ChannelListing