import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {ShopWrapper, ShopTitle, ShopContent} from './shop-sc';
import ShopTiles from './shopTiles';

class Shop extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showContent: false,
		}
	}

	handleClick = () => {
		if (this.state.showContent === true) {
			this.setState({
				showContent: false
			})
		} else {
			this.setState({
				showContent: true
			})
		}

	}

	render() {
		const {buyItem, userId} = this.props;
		return (
			<div>
				<ShopWrapper>
					<ShopTitle onClick={() => this.handleClick()}>
						{this.props.title}
					</ShopTitle>
					<ShopContent style={{display:this.state.showContent ? "block" : "none"}}>
						<ShopTiles onDropShop={this.props.onDropShop} buyItem={buyItem} userId={userId} />
					</ShopContent>
				</ShopWrapper>
			</div>
		)
	}
}

export default Shop;