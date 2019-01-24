import React, { Component } from 'react';
import Tile from './components/lakeTile';
import LakeList from './components/lakeList';
import Chat from './components/chat';

class App extends Component {
  render() {
    return (
      <div>
        {/* <LakeList>Add Desert Lake</LakeList> */}
        <Tile></Tile>
        <Chat socket={this.props.socket} />
      </div>
    );
  }
}

export default App;
