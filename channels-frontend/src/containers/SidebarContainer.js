import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCurrentUser} from '../actions/getCurrentUser'
import User from '../components/User'
import UsersChannelsList from '../components/UsersChannelsList'


class SidebarContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return (
            <>
            <User user={this.props.user}/>
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