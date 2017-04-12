var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var TodoAPI = require('TodoAPI');

var TodoMain = React.createClass({
    getInitialState: function() {
        return {
            todos:TodoAPI.getTodos(),
            showCompleted: false,
            searchText: ''
        }
    },
    componentDidUpdate:function() {
        TodoAPI.setTodos(this.state.todos);
    },
    handleAddTodo: function(text) {
    var {todos} = this.state;
    this.setState({
        todos: [...todos, {
            text: text,
            id: uuid(),
            completed:false,
            createdAt: moment.unix(),
            completedAt: undefined
        }]
    })
},
handleSearch: function (showCompleted, searchText) {
this.setState({
    showCompleted: showCompleted,
    searchText: searchText.toLowerCase()
})
},
handleToggle: function(id) {
var updatedTodos = this.state.todos.map((todo)=>{
    if(todo.id===id) {
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
    }
    return todo;
})
this.setState({
    todos: updatedTodos
})
},
    render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch onSearch={this.handleSearch}/>
                            <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
                            <AddTodo onAddTodo={this.handleAddTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TodoMain;