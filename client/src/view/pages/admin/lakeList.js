import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LakeButton } from './styledComponents/lakeTile-sc';

import { newLake } from '../../../actions/lake-actions';

class LakeList extends Component {
  
	render() {
    return (
      <div>
        <LakeButton onClick={() => this.props.newLake("Desert Lake")}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
return {
  currentLake: state.LakesReducer.currentLake
};
}

function mapDispatchToProps(dispatch) {
return bindActionCreators({ newLake: newLake }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LakeList);