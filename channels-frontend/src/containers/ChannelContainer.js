import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'
import SidebarContainer from '../containers/SidebarContainer'
import {fetchMessages} from '../actions/fetchMessages'
import ActionCable from 'actioncable'
import ChatWindow from './ChatWindow'


class ChannelContainer extends Component {

    render() {
        return (
            <>
            <div className="chat">
                <ChatWindow key={this.props.match.params.id} channel_id={this.props.match.params.id} />
            </div>
            <div className="message-input">
                <MessageInput key={this.props.match.params.id} channel_id={this.props.match.params.id} />
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channel_id: state.channel_id
    }
}

export default withRouter(connect(mapStateToProps)(ChannelContainer))