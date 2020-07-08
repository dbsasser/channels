import React, { Component } from 'react'
import { connect } from 'react-redux'
import Message from '../components/Message'
import {fetchMessages} from '../actions/fetchMessages'
import {displayNewMessage} from '../actions/displayNewMessage'
import ActionCable from 'actioncable'


class ChatWindow extends Component {

    componentDidMount() {
        this.props.fetchMessages(this.props.channel_id)
        this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");

        this.ChatChannel = this.cable.subscriptions.create({
            channel: `ChatChannel`, 
            channel_id: this.props.channel_id
        },{
            connected: () => {
                console.log("connected!")
            },
            disconnected: () => {
                console.log("disconnected!")
            },
            received: data => {
                console.log("data recieved!")
                {this.props.displayNewMessage(data)}
            }
        })
    }

    componentWillUnmount() {
        this.ChatChannel.unsubscribe();
    }


    render() {
        return (
            <div>
                {this.props.messages.map(message => <Message key={message.id} message={message} />)}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}


const mapDispatchToProps =  {
            fetchMessages,
            displayNewMessage
        }

export default connect(mapStateToProps, mapDispatchToProps )(ChatWindow)