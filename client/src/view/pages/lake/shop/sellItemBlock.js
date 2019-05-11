import React, { Component } from 'react';
import {SellItem} from './shop-sc';

class SellItemBlock extends Component {
  onDragOver = (e) => {
    e.preventDefault();
  }

  onDropSell = (e) => {
    let id = e.dataTransfer.getData("id");
    alert("are you sure you want to sell ", id, "?");
  }

	render() {
    return (
      <SellItem
      onDragOver={(e)=>this.onDragOver(e)}
      onDrop={(e)=>this.onDropSell(e)}
      >
        Drag Item Here to Sell
      </SellItem>
    );
  }
}

export default SellItemBlock;