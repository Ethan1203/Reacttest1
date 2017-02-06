import React from 'react';
import Header from './Header.react';
import Comtent from './Content.react';
import DemoStore from '../tempstore/DemoStore';

class DemoApp extends React.Component({
    getInitialState: function(){
		return{
			value: DemoStore.getValue()
		};
	},
	componentDidMount: function() {
	    //listen up an event from Store, if value in Store changed, _onChange function will be triggered
    		DemoStore.addChangeListener(this._onChange);
	},

  	componentWillUnmount: function() {
    		DemoStore.removeChangeListener(this._onChange);
  	},

	render: function(){
		return(
			<div>
				<Header />
				<Content value={this.state.value}/>			
			</div>
		);
	},
  	// If value in Store change, this function will be triggered
  	// so we need to reset the state
	_onChange: function(){
		this.setState({
			value: DemoStore.getValue()
		});
	}
});

export default DemoApp;

