import React from 'react';
import {connect} from 'react-redux'
import ChannelContainer from './containers/ChannelContainer'

class App extends React.Component {
  
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/channels/1/messages')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        <ChannelContainer />
      </div>
    );
  }

}


export default connect()(App);
