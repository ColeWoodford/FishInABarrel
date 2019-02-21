import React, { Component } from 'react';
import { RodContainer, Item, BaitContainer, BagContainer, InventoryContainer } from './inventory-sc';

class InvSpace extends Component {

  state = {
    items: [
      {
        name: "fishing rod",
        category: "equipedRod",
        type: "rod",
        cost: 100,
        bgcolor: "yellow"
      },
      {
        name: "bait",
        category: "equipedBait",
        type: "bait",
        cost: 10,
        bgcolor: "pink"
      },
      {
        name: "trout1",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout2",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout3",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout4",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout5",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout6",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout7",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout8",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      },
      {
        name: "trout9",
        category: "inBag",
        type: "fish",
        cost: 50,
        bgcolor: "skyblue"
      }
    ]
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  onDragStart = (e, id) => {
    console.log('dragstart', id);
    e.dataTransfer.setData("id", id);
  }

  onDropBag = (e, cat, bag, size) => {
    let id = e.dataTransfer.getData("id");

    let items = this.state.items;

    if (bag !== size) {
      items = this.state.items.filter((item) => {
        if (item.name === id) {
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
        if (item.name === id && item.type === "rod") {
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
        if (item.name === id && item.type === "bait") {
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

	render() {
    const { size } = this.props;
    let items = {
      equipedRod: [],
      equipedBait: [],
      inBag: [],
    }
    this.state.items.forEach ((t) => {
      items[t.category].push(
      <Item
        key={t.name}
        onDragStart={(e)=>this.onDragStart(e, t.name)}
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
