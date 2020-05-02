import React, {Component} from "react";
import Input from "./input";
import TodosList from "./todosList";
import DoneTodosList from "./doneTodosList";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {todos: [], doneTodos: []};
  }
  handleOnSend = (message) => {
    const todos = [...this.state.todos];
    todos.push(message);
    this.setState({todos});
  };

  handleDoneTodo = (todo) => {
    const todos = this.state.todos.filter((td) => td !== todo);
    const doneTodos = [...this.state.doneTodos];
    doneTodos.push(todo);
    this.setState({todos, doneTodos});
  };

  handleDeleteTodo = (index) => {
    const todos = this.state.todos.filter(
      (td) => this.state.todos.indexOf(td) !== index
    );
    this.setState({todos});
  };

  handleDeleteDoneTodo = (index) => {
    const doneTodos = this.state.doneTodos.filter(
      (td) => this.state.doneTodos.indexOf(td) !== index
    );
    this.setState({doneTodos});
  };

  render() {
    return (
      <div className="container mt-4">
        <Input onSend={this.handleOnSend} />
        <div className="row">
          <div className="col">
            <TodosList
              todos={this.state.todos}
              onDone={this.handleDoneTodo}
              onDelete={this.handleDeleteTodo}
            />
          </div>
          <div className="col">
            <DoneTodosList
              doneTodos={this.state.doneTodos}
              onDelete={this.handleDeleteDoneTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
