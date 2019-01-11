import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeTile } from './styledComponents/lakeTile-sc';

import { getLakes } from '../actions/lake-actions';

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
		this.props.getLakes();
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
			this.setState({
				count: ++this.state.count,
				display: this.state.count,
			})
		}
	}

	getLakeName = () => {
		if (this.props.lakes.length) {
			return this.props.lakes[0].lakeName;
		}
	}

	render() {
    	return (
			<div>
				<div>
					{this.getLakeName()}
				</div>
				<LakeTile onClick={this.handleClick} onFocus={this.handleFocus} onBlur={this.handleBlur}>
					{this.state.display}
				</LakeTile>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		lakes: state.LakesReducer.lakes
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getLakes: getLakes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);