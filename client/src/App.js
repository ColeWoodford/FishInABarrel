import React, { Component } from 'react';
import Tile from './components/lakeTile';
import LakeList from './components/lakeList';

class App extends Component {
  render() {
    return (
      <div>
        <LakeList>Add Desert Lake</LakeList>
        <Tile></Tile>
      </div>
    );
  }
}

export default App;
