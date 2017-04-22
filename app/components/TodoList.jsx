var React = require('react');
var {connect} = require('react-redux');

var Todo = require('Todo');

var TodoAPI = require('TodoAPI');

var TodoList = React.createClass({
    render: function() {
        var {todos, showCompleted, searchText} = this.props;
        var renderTodos = () => {
            if(todos.length===0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return TodoAPI.filterTodos(todos, showCompleted, searchText).map(function(todo) {
                return (
                    <Todo {...todo}
                        key={todo.id}

                        />
                )
            })
        }
        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
})

module.exports = connect(
    (state) => {
        return state;
    }
)(TodoList);
