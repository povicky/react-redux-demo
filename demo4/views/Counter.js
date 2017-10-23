import React,{ Component } from 'react';

import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';

const buttonStyle = {
	margin : '10px'
}

class Counter extends Component {
	render () {
		const { caption } = this.props;
		return (
			<div>
				<button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
				<button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
				<span>{caption} count : {this.state.count}</span>
			</div>
		)
	}
}

export default Counter;