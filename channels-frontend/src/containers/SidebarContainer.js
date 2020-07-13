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
            <User user={this.props.user} handleSignOut={this.handleSignOut} />
            <UsersChannelsList channels={this.props.user.channels}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }

}
export default connect(mapStateToProps, {getCurrentUser})(SidebarContainer)