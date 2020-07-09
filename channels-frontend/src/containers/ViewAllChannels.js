import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChannelListing from '../components/ChannelListing'
import {fetchAllChannels} from '../actions/fetchAllChannels'




class ViewAllChannels extends Component {

    componentDidMount() {
        this.props.fetchAllChannels()
    }

    render() {
        return (
            <ChannelListing channels={this.props.channels} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        channels: state.channels
    }
}

export default connect(mapStateToProps, {fetchAllChannels})(ViewAllChannels)