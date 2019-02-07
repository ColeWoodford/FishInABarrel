import React, { Component } from 'react';
import { TableEntry } from './admin-sc';

class UserTable extends Component {
  listUsers = () => {
    const { users } = this.props;
    return (
      <div>
        {users.map(user => <TableEntry key={user.id}>{user.username}</TableEntry>)}
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

export default UserTable;
