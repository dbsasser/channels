import React from 'react';
import ChannelContainer from './containers/ChannelContainer'
import SidebarContainer from './containers/SidebarContainer'

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <div className="sidenav">
          <SidebarContainer />
        </div>
        <div className="main">
          <ChannelContainer key={this.props.match.params.id} />
        </div>
      </div>
    );
  }

}


export default App;
