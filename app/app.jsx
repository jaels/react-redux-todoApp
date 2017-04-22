var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TodoMain = require('TodoMain');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
    console.log('new state', store.getState())
})


$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}>
        <TodoMain/>
    </Provider>,
    document.getElementById('app')
);
