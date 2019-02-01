import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../../components/chat';
import Tile from '../../components/lakeTile';

class Lake extends Component {
  render() {
    console.log("HERE", this.props.username)
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ login: login }, dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Lake);
export default connect(mapStateToProps)(Lake);

