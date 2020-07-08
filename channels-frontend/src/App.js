import React from 'react';
import {connect} from 'react-redux'
import {setChannel} from './actions/setChannel'
import ChannelContainer from './containers/ChannelContainer'
import SidebarContainer from './containers/SidebarContainer'

class App extends React.Component {

  componentWillMount() {
    this.props.setChannel(this.props.match.params.id)
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


export default connect(null, {setChannel})(App);
