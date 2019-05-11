import React, { Component } from 'react';
import ItemForSale from './itemForSale';
import SellItemBlock from './sellItemBlock';
import {bambooRod} from '../../../../store/assets/fishingRods';
import {worms} from '../../../../store/assets/baits';

class ShopTiles extends Component {
	constructor(props) {
		super(props);
	}

	render() {
    return (
      <div>
				<ItemForSale item={bambooRod} />
				<ItemForSale item={worms} />
				<SellItemBlock onDropShop={this.props.onDropShop}/>
      </div>
    );
  }
}

export default ShopTiles;