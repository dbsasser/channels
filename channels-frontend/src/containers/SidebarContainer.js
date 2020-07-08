import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCurrentUser} from '../actions/getCurrentUser'
import User from '../components/User'
import UsersChannelsList from '../components/UsersChannelsList'


class SidebarContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    handleSignOut = event => {
        event.preventDefault()
        localStorage.removeItem('token')
        console.log('signed out')
        window.location.replace("http://localhost:3001/login");

    }

    render() {
        return (
            <>
            <User user={this.props.user}/>
            <a onClick={this.handleSignOut}>Sign Out</a>
            <UsersChannelsList channels={this.props.users_channels}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users_channels: state.user.channels,
        user: state.user
    }

}
export default connect(mapStateToProps, {getCurrentUser})(SidebarContainer)