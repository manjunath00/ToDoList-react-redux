/* eslint-disable */
import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    return this.props.todos.map((todo, index) => (
      <TodoItem
        todo={todo}
      />
    ));
  }
}
