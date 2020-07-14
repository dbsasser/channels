import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChannelListing from '../components/ChannelListing'
import {fetchAllChannels} from '../actions/channelActions'




class ViewAllChannels extends Component {

    componentDidMount() {
        this.props.fetchAllChannels()
    }

    render() {
        return (
            <ChannelListing channels={this.props.allChannels} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        allChannels: state.allChannels
    }
}

export default connect(mapStateToProps, {fetchAllChannels})(ViewAllChannels)