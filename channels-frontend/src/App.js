import React from 'react';
import {connect} from 'react-redux'
import { fetchMessages } from './actions/fetchMessages'

class App extends React.Component {
  
  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/channels/1/messages')
  //     .then(resp => resp.json())
  //     .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }

}


export default connect(null, {fetchMessages})(App);
