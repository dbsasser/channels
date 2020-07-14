import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {fetchChannel} from '../actions/channelActions'
import ChatWindow from './ChatWindow'
import MessageWindow from './MessageWindow'



class ChannelContainer extends Component {

    componentDidMount() {
        this.props.fetchChannel(this.props.match.params.id)
    }
    
    render() {
        return (
            <>
            <div className="chat">
                <ChatWindow key={this.props.match.params.id} channel_id={this.props.match.params.id} />
            </div>
            <div>
                <MessageWindow key={this.props.match.params.id} />
            </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default withRouter(connect(mapStateToProps, {fetchChannel} )(ChannelContainer))