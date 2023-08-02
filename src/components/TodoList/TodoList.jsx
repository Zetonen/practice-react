import React, { Component } from "react";
import { ToDo } from "../ToDo/ToDo";
import todo from "../../todo.json";
export class TodoList extends Component {
  state = {
    todoList: todo,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.filter((todo) => todo.id !== todoId),
    }));
  };

  handelCheck = (todoId) => {
    this.setState((prevState) => ({
      todoList: prevState.todoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todoList } = this.state;
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {todoList.map((todo) => {
            return (
              <ToDo
                key={todo.id}
                todo={todo}
                onDeleteTodo={this.deleteTodo}
                onCheckTodo={this.handelCheck}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
