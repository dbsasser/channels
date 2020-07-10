import React from 'react'
import { NavLink } from 'react-router-dom'

const UsersChannelsList = ({channels}) => {

    return (
       <div>
           <strong className="ml-2">Channels</strong>
           {channels.map(channel=>(
                <div key={channel.id}>
                    <NavLink to={`${channel.id}`} activeClassName="activenav"># {channel.name}</NavLink>
                </div>
           ))}
           <NavLink to="/channels/all" activeClassName="activenav">+ More Channels</NavLink>
       </div>
    )
}

export default UsersChannelsList