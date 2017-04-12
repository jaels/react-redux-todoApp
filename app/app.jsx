var React = require('react');
var ReactDOM = require('react-dom');
var TodoMain = require('TodoMain');

$(document).foundation();

require('style!css!sass!applicationStyles');


ReactDOM.render(
    <TodoMain/>,
    document.getElementById('app')
);
