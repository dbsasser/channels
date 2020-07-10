import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'
import AddChannel from '../components/AddChannel'
import {joinChannel} from '../actions/joinChannel'
import SidebarContainer from '../containers/SidebarContainer'
import {setChannel} from '../actions/setChannel'
import ActionCable from 'actioncable'
import ChatWindow from './ChatWindow'
import MessageWindow from './MessageWindow'



class ChannelContainer extends Component {

    componentDidMount() {
        this.props.setChannel()
    }
    
    render() {
        let channel_member = this.props.user.channels.some( channel => channel['id'] == this.props.channel_id )
        return (
            <>
            <div className="chat">
                <ChatWindow key={this.props.match.params.id} channel_id={this.props.match.params.id} />
            </div>
            <div>
                <MessageWindow key={window.location.pathname} />
            </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channel_id: state.channel_id,
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps, {setChannel} )(ChannelContainer))