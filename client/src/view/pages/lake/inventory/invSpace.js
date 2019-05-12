import React, { Component } from 'react';
import { RodContainer, Item, BaitContainer, BagContainer, InventoryContainer } from './inventory-sc';
import Shop from '../shop/shop';
import { sellItem } from '../../../../store/actions/inventory-actions';

class InvSpace extends Component {
  constructor(props) {
		super(props);

		this.state = {
			items: this.props.items,
		}
	}

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.items!==prevState.items){
      return {items: nextProps.items}
    } else {
      return null;
    }
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragStart = (e, id, name) => {
    // console.log('dragstart', id);
    e.dataTransfer.setData("id", id);
    e.dataTransfer.setData("name", name);
  }

  onDropBag = (e, cat, bag, size) => {
    let id = e.dataTransfer.getData("id");

    let items = this.state.items;

    if (bag !== size) {
      items = this.state.items.filter((item) => {
        if (item.id === id) {
          item.category = cat;
        }
        return item;
      });
    }

    this.setState({
      ...this.state,
      items
    })
  }

  onDropRod = (e, cat, full) => {
    let id = e.dataTransfer.getData("id");

    let items = this.state.items;

    if (full === 0) {
      items = this.state.items.filter((item) => {
        if (item.id === id && item.type === "rod") {
          item.category = cat;
        }
        return item;
      });
    }

    this.setState({
      ...this.state,
      items
    })
  }

  onDropBait = (e, cat, full) => {
    let id = e.dataTransfer.getData("id");

    let items = this.state.items;

    if (full === 0) {
      items = this.state.items.filter((item) => {
        if (item.id === id && item.type === "bait") {
          item.category = cat;
        }
        return item;
      });
    }

    this.setState({
      ...this.state,
      items
    })
  }

  onDropShop = (e) => {
    const {sellItem} = this.props;
    let id = e.dataTransfer.getData("id");
    let name = e.dataTransfer.getData("name");
    // console.log("id:",id);
    if(window.confirm("Are you sure you want to sell " + name + "?")) {
      sellItem(id);
    } else {
      // console.log("nothing happens.");
    }
  }

	render() {
    const { size, buyItem, userId } = this.props;
    let items = {
      equipedRod: [],
      equipedBait: [],
      inBag: [],
    }
    this.state.items.forEach ((t) => {
      items[t.category].push(
      <Item
        key={t.id}
        onDragStart={(e)=>this.onDragStart(e, t.id, t.name)}
        draggable
        className="draggable"
        style={{backgroundColor: t.bgcolor}}>
          {t.name}
      </Item>);
    });
    let bagFull = items.inBag.length;
    let rodFull = items.equipedRod.length;
    let baitFull = items.equipedBait.length;
    return (
      <div>
        <Shop title="Shop" onDropShop={(e)=>this.onDropShop(e)} buyItem={buyItem} userId={userId} />
        {bagFull}/{size}
        <InventoryContainer>
          <RodContainer
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDropRod(e, "equipedRod", rodFull)}>
          {items.equipedRod}
          </RodContainer>

          <BaitContainer className="equipedBait"
          onDragOver={(e)=>this.onDragOver(e)}
          onDrop={(e)=>this.onDropBait(e, "equipedBait", baitFull)}>
          {items.equipedBait}
          </BaitContainer>

          <BagContainer className="inBag"
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>{this.onDropBag(e, "inBag", bagFull, size)}}>
          {items.inBag}
          </BagContainer>
        </InventoryContainer>
      </div>
    );
  }
}

export default InvSpace;