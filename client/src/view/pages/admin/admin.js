import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLakes } from '../../../store/actions/lake-actions';
import LakeTable from './lakeTable';

class Admin extends Component {
	componentDidMount() {
		this.setState({
		})
		this.props.getLakes();
	}

  render() {
    return(
      <div>
				<LakeTable lakes={this.props.lakes} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);