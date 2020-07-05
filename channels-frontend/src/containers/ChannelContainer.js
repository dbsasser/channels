import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import {fetchMessages} from '../actions/fetchMessages'


class ChannelContainer extends Component {

    componentDidMount() {
        this.props.fetchMessages()
    }

    render() {
        return (
            <div>
                {this.props.messages.map(message => <Message message={message} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }

}
export default connect(mapStateToProps, {fetchMessages} )(ChannelContainer)