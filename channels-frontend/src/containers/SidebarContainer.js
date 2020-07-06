import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsersChannels} from '../actions/fetchUsersChannels'
import User from '../components/User'


class SidebarContainer extends Component {

    componentDidMount() {
        this.props.fetchUsersChannels()
    }

    render() {
        return (
            <>
            {this.props.users_channels.map(channel => channel.name)}
            <User user={this.props.user}/>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users_channels: state.users_channels,
        user: state.user
    }

}
export default connect(mapStateToProps, {fetchUsersChannels})(SidebarContainer)