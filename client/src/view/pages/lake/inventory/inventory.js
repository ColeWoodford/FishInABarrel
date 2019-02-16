import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventory } from '../../../../store/actions/inventory-actions';

class Inventory extends Component {
  componentWillMount() {
    const { userId } = this.props;
    this.props.getInventory(userId);
  }

	render() {
    const { size, money } = this.props;
    return (
			<div>
				Inventory<br></br>
        <p>Size: {size}</p>
        <p>Money: {money}</p>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
      userId: state.LoginReducer.userId,
      size: state.InventoryReducer.size,
      money: state.InventoryReducer.money
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getInventory: getInventory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
