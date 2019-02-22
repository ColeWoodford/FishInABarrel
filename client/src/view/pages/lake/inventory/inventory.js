import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventory } from '../../../../store/actions/inventory-actions';
import InvSpace from './invSpace';

class Inventory extends Component {
  componentWillMount() {
    const { userId } = this.props;
    this.props.getInventory(userId);
  }

	render() {
    const { size, money, items } = this.props;
    return (
			<div>
        <p>Money: {money}</p>
        Inventory<br></br>
        <InvSpace size={size} items={items}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
      userId: state.LoginReducer.userId,
      size: state.InventoryReducer.size,
      money: state.InventoryReducer.money,
      items: state.InventoryReducer.items
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getInventory: getInventory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);