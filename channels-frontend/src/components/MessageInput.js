import React, { Component } from 'react'
import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage'



class MessageInput extends Component {

    state = {
        body: '',
        channel_id: this.props.channel_id
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sendMessage(this.state)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea name="body" value={this.state.body} onChange={this.handleChange} className="form-control" style={{ height: 125 }}></textarea>
                    <br/>
                    <input type="submit" className="btn btn-outline-info float-right"></input>
                </form>
            </div>
        )
        }
}

export default connect(null, {sendMessage})(MessageInput)