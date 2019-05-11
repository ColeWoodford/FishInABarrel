import React, { Component } from 'react';
import {SellItem} from './shop-sc';

class SellItemBlock extends Component {
  constructor(props) {
		super(props);
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

	render() {
    return (
      <SellItem
      onDragOver={(e)=>this.onDragOver(e)}
      onDrop={this.props.onDropShop}
      >
        Drag Item Here to Sell
      </SellItem>
    );
  }
}

export default SellItemBlock;