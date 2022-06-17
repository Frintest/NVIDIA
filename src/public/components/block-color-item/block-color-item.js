import React, { Component } from 'react';
import styled from 'styled-components';

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

		const CustomRadio = styled.span`
			border-color: ${colorItem};

			&::before {
				background: ${colorItem};
			}
		`;

		return (
			<label className="block-color__item">
				<input
					type="radio"
					className="block-color__real-radio"
					value={colorItem}
					name="radio-color-backlight"
					onChange={(e) => this.checkColorItem(e)}
					defaultChecked={value === colorItem}
				/>

				<CustomRadio className="block-color__custom-radio"></CustomRadio>
			</label>
		)
	}
}


export default BlockColorItem;