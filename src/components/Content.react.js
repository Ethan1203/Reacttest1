import React from 'react';

let Content = React.createClass({
	render: function(){
		return(
			<div>{this.props.value}</div>
		)
	}
});

module.exports = Content;