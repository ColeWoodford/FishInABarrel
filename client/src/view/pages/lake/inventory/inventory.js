import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventory, sellItem, buyItem } from '../../../../store/actions/inventory-actions';
import InvSpace from './invSpace';

class Inventory extends Component {
  componentDidMount() {
    const { userId, isNewUser } = this.props;
    if(!isNewUser) {
      this.props.getInventory(userId);
    }
  }

	render() {
    const { size, money, items, fish, sellItem, buyItem, userId } = this.props;
    let allItems = items.concat(fish);
    return (
			<div>
        <InvSpace
        size={size}
        items={allItems}
        sellItem={sellItem}
        buyItem={buyItem}
        userId={userId}
        money={money}
        />
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
      userId: state.LoginReducer.userId,
      size: state.InventoryReducer.size,
      money: state.InventoryReducer.money,
      items: state.InventoryReducer.items,
      fish: state.LakesReducer.caughtFish,
      isNewUser: state.LoginReducer.isNewUser
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
    getInventory: getInventory,
    sellItem: sellItem,
    buyItem: buyItem,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
