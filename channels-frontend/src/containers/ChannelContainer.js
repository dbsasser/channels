import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import MessageInput from '../components/MessageInput'
import SidebarContainer from '../containers/SidebarContainer'
import {fetchMessages} from '../actions/fetchMessages'


class ChannelContainer extends Component {

    componentDidMount() {
        this.props.fetchMessages()
    }

    render() {
        return (
            <>
            <div className="sidenav">
                <SidebarContainer />
            </div>
            <div className="main">
                <div>
                    {this.props.messages.map(message => <Message message={message} />)}
                </div>
                <div>
                    <MessageInput />
                </div>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }

}
export default connect(mapStateToProps, {fetchMessages} )(ChannelContainer)