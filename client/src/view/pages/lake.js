import React, { Component } from 'react';
import Chat from '../../components/chat';
import Tile from '../../components/lakeTile';

class Lake extends Component {
  render() {
    return(
      <div>
        <Tile />
        <Chat socket={this.props.socket} />
      </div>
    )
  }
}

export default Lake;
