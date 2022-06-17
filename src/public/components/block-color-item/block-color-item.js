import React, { Component } from 'react';

import './block-color-item.scss';


class BlockColorItem extends Component {
	state = {
		value: '#007bff'
	}

	checkColorItem = (e) => {
		this.setState(() => ({
			value: e.target.value
		}));
	}

	render() {
		const { colorItem } = this.props;
		const { value } = this.state;

		return (
			<div className="block-color__item">
				<input
					type="radio"
					className="block-color__btn"
					value={colorItem}
					name="radio-color-backlight"
					onChange={(e) => this.checkColorItem(e)}
					defaultChecked={value === colorItem}
				/>
			</div>
		)
	}
}


export default BlockColorItem;