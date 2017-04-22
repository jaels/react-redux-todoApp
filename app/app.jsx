var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TodoMain = require('TodoMain');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

store.subscribe(() => {
    var state = store.getState();
    console.log('new state', state);
    TodoAPI.setTodos(state.todos);
})

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos))

$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}>
        <TodoMain/>
    </Provider>,
    document.getElementById('app')
);
