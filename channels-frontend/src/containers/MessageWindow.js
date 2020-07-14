import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import MessageInput from '../components/MessageInput'
import AddChannel from '../components/AddChannel'
import {joinChannel} from '../actions/userActions'



class ChannelContainer extends Component {

    handleJoinChannel = (event) => {
        event.preventDefault();
        this.props.joinChannel({channel_id: this.props.channel_id})
    }

    
    render() {
        let channel_member = this.props.user.channels.some( channel => channel['id'] === this.props.channel_id )
        return (
            <>
            <div className="message-input">
                { channel_member
                ? <MessageInput key={this.props.match.params.id} channel_id={this.props.match.params.id} />
                : <div><AddChannel handleJoinChannel={this.handleJoinChannel} key={this.props.match.params.id} /></div>
                }
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channel_id: state.channel.id,
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, {joinChannel} )(ChannelContainer))