import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getCurrentUser} from '../actions/getCurrentUser'
import User from '../components/User'


class SidebarContainer extends Component {

    componentDidMount() {
        this.props.getCurrentUser()
    }

    render() {
        return (
            <>
            <User user={this.props.user}/>
            {this.props.users_channels.map(channel => channel.name)}
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