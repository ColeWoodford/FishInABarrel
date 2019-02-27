import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeTile } from './lakeTile-sc';
import { catchFish } from '../../../store/actions/lake-actions';

class Tile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		}
	}

	componentDidMount() {
		this.setState({
			display: "><>",
			firstFlag: false,
		})
	}

	handleFocus = () => {
		this.setState({
			display: this.state.count,
			firstFlag: true,
		})
	}

	handleBlur = () => {
		this.setState({
			display: "><>"
		})
	}

	handleClick = () => {
		if (this.state.firstFlag === true) {
			this.setState({
				display: this.state.count,
				firstFlag: false,
			})
		} else {
			//Get a fish for the user!
			const { username } = this.props;
			this.props.catchFish(username);
			this.setState({
				count: ++this.state.count,
				display: this.state.count,
			})
		}
	}

	render() {
    	return (
			<div>
				<LakeTile onClick={this.handleClick} onFocus={this.handleFocus} onBlur={this.handleBlur}>
					{this.state.display}
				</LakeTile>
			</div>
		)
	}
}


function mapStateToProps(state) {
  return {
		username: state.LoginReducer.username,
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ catchFish: catchFish }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);
