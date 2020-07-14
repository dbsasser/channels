import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {setChannel} from '../actions/channelActions'
import ChatWindow from './ChatWindow'
import MessageWindow from './MessageWindow'



class ChannelContainer extends Component {

    componentDidMount() {
        
    }
    
    render() {
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