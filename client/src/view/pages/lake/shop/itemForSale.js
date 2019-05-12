import React, { Component } from 'react';
import {ShopItem} from './shop-sc';

class ItemForSale extends Component {
	constructor(props) {
		super(props);
  }
  
  handleClick = (itemName) => {
    const {buyItem, userId} = this.props;
    if(window.confirm("Do you want to buy " + itemName + "?")) {
      const buyItemPayload = {
        itemName,
        userId
      }
      buyItem(buyItemPayload);
    } else {
      // console.log("nothing happens.");
    }
  }

	render() {
    const { item } = this.props;
    return (
      <ShopItem onClick={() => this.handleClick(item.name)}>
        {item.name}<br/>
        {item.value}
      </ShopItem>
    );
  }
}

export default ItemForSale;