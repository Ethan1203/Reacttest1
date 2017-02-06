import DemoDispatcher from '/src/components/DemoDispacher';
import EventEmitter from 'events.EventEmitter';
import assign from 'object-assign';

let CHANGE_EVENT = 'change';
// Our value show on the view
let _value = 0;

// increase logic
function _increase(){
	_value++;
}
// decrease logic
function _decrease(){
	_value--;
}
// define a Store object the extends EventEmitter from node.js event lib
let DemoStore = assign({}, EventEmitter.prototype, {
	getValue: function(){
		return _value;
	},

  // trigger a value changed event!!
	emitChange: function() {
    	this.emit(CHANGE_EVENT);
  },
  
  // the callback function will be defined and be passed from view 
  // in our example, the callback function be defined in DemoApp.react.js and named _onChange
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

//Use dispatcher to listen some events
DemoDispatcher.register(function(action){
	switch(action.actionType){
		case "Increase":
			_increase(); // do increase logic
			DemoStore.emitChange();  // after value change, trigger a event
			break;
		case "Decrease":
			_decrease(); // do decrease logic
			DemoStore.emitChange(); // after value change, trigger a event
			break;
		default:
	}
});

export default DemoStore;