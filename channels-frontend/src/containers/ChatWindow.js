import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatHeader from '../components/ChatHeader'
import Message from '../components/Message'
import {fetchChannel} from '../actions/fetchChannel'
import {fetchMessages} from '../actions/fetchMessages'
import {displayNewMessage} from '../actions/displayNewMessage'
import ActionCable from 'actioncable'
import {deleteMembership} from '../actions/deleteMembership'


class ChatWindow extends Component {

    componentDidMount() {
        this.props.fetchChannel(this.props.channel_id)
        this.props.fetchMessages(this.props.channel_id)
        this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");

        this.ChatChannel = this.cable.subscriptions.create({
            channel: `ChatChannel`, 
            channel_id: this.props.channel_id
        },{
            connected: () => {
                // console.log("connected!")
            },
            disconnected: () => {
                // console.log("disconnected!")
            },
            received: data => {
                // console.log("data recieved!")
                this.props.displayNewMessage(data)
            }
        })

        this.scrollToBottom();
    }

    leaveChannel = (event) => {
       event.preventDefault(); 
       const membership = this.props.user.memberships.find(membership => membership.channel_id == this.props.channel.id )
       this.props.deleteMembership(membership.id)


    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        this.ChatChannel.unsubscribe();
    }

    scrollToBottom = () => {
        this.endOfMessages.scrollIntoView();
      }

    render() {
        
        return (
            <>
            <div>
                <ChatHeader channel={this.props.channel} leaveChannel={this.leaveChannel} />
            </div>
            <div className="chat-window">
                {this.props.messages.map(message => <Message key={message.id} message={message} />)}
                <div style={{ float:"left", clear: "both" }}
                   ref={(el) => { this.endOfMessages = el; }}>
                </div>            
            </div>
           
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        channel: state.channel,
        messages: state.messages
    }
}


const mapDispatchToProps =  {
            fetchChannel,
            fetchMessages,
            displayNewMessage,
            deleteMembership
        }

export default connect(mapStateToProps, mapDispatchToProps )(ChatWindow)