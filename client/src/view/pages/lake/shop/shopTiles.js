import React, { Component } from 'react';
import ItemForSale from './itemForSale';
import SellItemBlock from './sellItemBlock';
import {itemsForSale} from '../../../../store/assets/itemsForSale';

class ShopTiles extends Component {
	constructor(props) {
		super(props);
  }

	makeShop = () => {
    const {buyItem, userId} = this.props;
    return (
      <div>
        {itemsForSale.map(item => <ItemForSale key={item.name} item={item} buyItem={buyItem} userId={userId} />)}
      </div>
    )
  }

	render() {
    const {onDropShop} = this.props;
    return (
      <div>
				{this.makeShop()}
				<SellItemBlock onDropShop={onDropShop}/>
      </div>
    );
  }
}

export default ShopTiles;