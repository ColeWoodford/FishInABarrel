import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from '../../chat';
import Tile from './lakeTile';

class Lake extends Component {
  render() {
    const { username } = this.props;
    let lake;
    if(username !== null) {
      lake =
      <div>
        <Tile />
        <Chat socket={this.props.socket} />
      </div>
    } else {
      lake =
      <div>
        Please login
      </div>
    }

    return(
      <div>
        {lake}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
      username: state.LoginReducer.username
  };
}

export default connect(mapStateToProps)(Lake);

