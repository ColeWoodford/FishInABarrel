import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getInventory, sellItem } from '../../../../store/actions/inventory-actions';
import InvSpace from './invSpace';

class Inventory extends Component {
  componentDidMount() {
    const { userId } = this.props;
    this.props.getInventory(userId);
  }

	render() {
    const { size, money, items, fish } = this.props;
    console.log("Adding: ",items," and ", fish);
    let allItems = items.concat(fish);
    console.log("result: ", allItems);
    return (
			<div>
        <p>Money: {money}</p>
        Inventory<br></br>
        <InvSpace
        size={size}
        items={allItems}
        sellItem={this.props.sellItem}
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
      fish: state.LakesReducer.caughtFish
  };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ 
    getInventory: getInventory,
    sellItem: sellItem,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
