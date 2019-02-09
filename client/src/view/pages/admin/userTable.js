import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableEntry, DeleteUserButton } from './admin-sc';
import { deleteUser } from '../../../store/actions/user-actions';

class UserTable extends Component {
  listUsers = () => {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => <TableEntry key={user.id}>{user.username}<DeleteUserButton onClick={() => this.props.deleteUser(user.username)}>delete</DeleteUserButton></TableEntry>)}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.listUsers()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({ deleteUser: deleteUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
