import React, { Component } from "react";
import Todoitem from "./Todoitem";
import todoData from "../todoData";
import AddTodo from "./AddTodo";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoData: todoData,
      newTodo: "",
      isCompleteNewTodo: false
    };
  }

  handleCheckbox = id => {
    console.log(id);

    this.setState(prevState => {
      const updatedTodo = prevState.todoData.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      });
      return {
        todoData: updatedTodo
      };
    });
  };
  handleNewTodo = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleNewTodoCheckbox = () => {
    this.setState({ isCompleteNewTodo: !this.state.isCompleteNewTodo });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      todo: this.state.newTodo,
      isComplete: this.state.isCompleteNewTodo
    };
    this.state.todoData.push(newTodoItem);
    this.setState({ todoData: todoData });
  };

  deleteItem = id => {
    const filteredTodo = this.state.todoData.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todoData: filteredTodo });
  };

  render() {
    const todo = this.state.todoData.map(todo => (
      <Todoitem
        key={todo.id}
        todo={todo}
        handleCheckbox={this.handleCheckbox}
        deleteItem={this.deleteItem}
      />
    ));
    return (
      <div>
        <AddTodo
          isCompleteNewTodo={this.state.isCompleteNewTodo}
          handleNewTodo={this.handleNewTodo}
          handleNewTodoCheckbox={this.handleNewTodoCheckbox}
          handleSubmit={this.handleSubmit}
        />
        {todo}
      </div>
    );
  }
}

export default Todolist;
