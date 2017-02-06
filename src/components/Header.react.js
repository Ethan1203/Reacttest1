import React from 'react';
import DemoAction from'../components//DemoAction';

let Header = React.createClass({
  	//handle click Increase button, call DemoAction's increase function
	handleIncrease: function(){
		DemoAction.increase();
	},
	//handle click Decrease button, call DemoAction's decrease function
	handleDecrease: function(){
		DemoAction.decrease();
	},
	render: function(){
		return(
			<div>
				<section>
					<button onClick={this.handleIncrease}>Increase</button>
					<button onClick={this.handleDecrease}>Decrease</button>
				</section>
			</div>
		);
	}
});

module.exports = Header;