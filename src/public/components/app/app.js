import React, { Component } from 'react';

import BlockColor from '../block-color/block-color.js';


class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="app__container">
					<BlockColor />
				</div>
			</div>
		);
	}
}


export default App;