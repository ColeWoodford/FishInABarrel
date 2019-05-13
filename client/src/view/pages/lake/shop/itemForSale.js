import React, { Component } from 'react';
import {ShopItem} from './shop-sc';

class ItemForSale extends Component {
	constructor(props) {
		super(props);
  }
  
  handleClick = (itemName, itemValue, money) => {
    const {buyItem, userId} = this.props;
    if (itemValue > money) {
      alert("You do not have enough money to buy that.")
    } else {
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
  }

	render() {
    const { item, money } = this.props;
    return (
      <ShopItem onClick={() => this.handleClick(item.name, item.value, money)}>
        {item.name}<br/>
        {item.value}
      </ShopItem>
    );
  }
}

export default ItemForSale;