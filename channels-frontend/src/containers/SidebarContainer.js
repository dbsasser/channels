import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsersChannels} from '../actions/fetchUsersChannels'


class SidebarContainer extends Component {

    componentDidMount() {
        this.props.fetchUsersChannels()
    }

    render() {
        return (
            <>
            <div>

            </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        users_channels: state.users_channels
    }

}
export default connect(mapStateToProps, {fetchUsersChannels})(SidebarContainer)