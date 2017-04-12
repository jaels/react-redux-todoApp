var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    render: function() {
        var {todos, onToggle} = this.props;
        var renderTodos = () => {
            if(todos.length===0) {
                return (
                    <p className="container__message">Nothing to do</p>
                )
            }
            return todos.map(function(todo) {
                return (
                    <Todo {...todo}
                        key={todo.id}
                        onToggle={onToggle}
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

module.exports = TodoList;
