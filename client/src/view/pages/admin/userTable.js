import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TableEntry, DeleteUserButton, ViewUserInfoButton } from './admin-sc';
import { deleteUser, getUserInfo } from '../../../store/actions/user-actions';

class UserTable extends Component {
  deleteUserAndClearInfo = (user) => {
    this.props.deleteUser(user);
    this.props.getUserInfo(1);
  }

  listUsers = () => {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => 
          <TableEntry key={user.id}>
          {user.username}
          <DeleteUserButton onClick={() => this.props.deleteUser(user)}>delete</DeleteUserButton>
          <ViewUserInfoButton onClick={() => this.props.getUserInfo(user.id)}>view info</ViewUserInfoButton>
          </TableEntry>)
        }
        <p>
          Message: {this.props.adminMessage}
        </p>
      </div>
    )
  }

  showUserInfo = () => {
    const { selectedUserInfo } = this.props;
    let info;
    if (selectedUserInfo === null) {
      info =
      <div>
        No User Selected
      </div>
    } else {
      info =
      <div>
        <p>Size: {selectedUserInfo.size}</p>
        <p>Money: {selectedUserInfo.money}</p>
      </div>
    }
    return (
      <div>
        {info}
      </div>
    )
  }

  render() {
    return(
      <div>
        {this.listUsers()}
        {this.showUserInfo()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedUserInfo: state.UsersReducer.selectedUserInfo,
    adminMessage: state.UsersReducer.adminMessage
  };
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({ 
  deleteUser: deleteUser,
  getUserInfo: getUserInfo,
}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
