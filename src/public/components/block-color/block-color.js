import React, { Component } from 'react';

import './block-color.scss';

import BlockColorItem from '../block-color-item/block-color-item.js';


const dbBacklight =  ['#007bff', '#28a745', '#dc3545', '#17a2b8', '#ffc107'];

const backlightColors = dbBacklight.map(color => (
	<BlockColorItem colorItem={color} key={color.toString()} />
));

class BlockColor extends Component {
	render() {
		return (
			<div className="block-color block-color_backlight">
				{backlightColors}
			</div>
		)
	}
}


export default BlockColor;