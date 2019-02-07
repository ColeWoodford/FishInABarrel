import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLakes } from '../../../store/actions/lake-actions';
import { getUsers } from '../../../store/actions/user-actions';
import LakeTable from './lakeTable';
import UserTable from './userTable';

class Admin extends Component {
	componentDidMount() {
		this.setState({
		})
		this.props.getLakes();
		this.props.getUsers();
	}

  render() {
		const { username } = this.props;
		let admin;
		if (username !== "cole") {
			admin =
			<div>
				No Access
			</div>
		} else {
			admin =
			<div>
				Lakes:
				<LakeTable lakes={this.props.lakes} />
				Users:
				<UserTable users={this.props.users} />
      </div>
		}

    return(
			<div>
				{admin}
			</div>
    )
  }
}

function mapStateToProps(state) {
	return {
		username: state.LoginReducer.username,
		lakes: state.LakesReducer.lakes,
		users: state.UsersReducer.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
		getLakes: getLakes,
		getUsers: getUsers
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);