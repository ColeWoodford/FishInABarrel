import React, { Component } from 'react';
import {ShopItem} from './shop-sc';

class ItemForSale extends Component {
	constructor(props) {
		super(props);
  }
  
	render() {
    const { item } = this.props;
    return (
      <ShopItem>
        {item.name}<br/>
        {item.value}
      </ShopItem>
    );
  }
}

export default ItemForSale;