import React from 'react';
import {connect} from 'react-redux'
import {fetchChannel} from './actions/channelActions'
import ChannelContainer from './containers/ChannelContainer'
import SidebarContainer from './containers/SidebarContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.id)
  }

  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <SidebarContainer />
        </div>
        <div className="main">
          <ChannelContainer />
        </div>
      </div>
    );
  }

}


export default connect(null, {fetchChannel})(App);
