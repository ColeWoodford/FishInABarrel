import React, { Component } from 'react';
import ItemForSale from './itemForSale';
import SellItemBlock from './sellItemBlock';
import {bambooRod} from '../../../../store/assets/fishingRods';
import {worms} from '../../../../store/assets/baits';

class ShopTiles extends Component {

	render() {
    return (
      <div>
				<ItemForSale item={bambooRod} />
				<ItemForSale item={worms} />
				<SellItemBlock />
      </div>
    );
  }
}

export default ShopTiles;