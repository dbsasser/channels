import React from 'react'
import { NavLink } from 'react-router-dom'

const UsersChannelsList = ({channels}) => {

    return (
       <div>
           {channels.map(channel=>(
                <div key={channel.id}>
                    <NavLink to={`${channel.id}`} activeClassName="activenav"># {channel.name}</NavLink>
                </div>
           ))}
       </div>
    )
}

export default UsersChannelsList