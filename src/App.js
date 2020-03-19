/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./components/layout/Header";
import Submit from "./components/layout/Submit";
import Todos from "./components/Todos";
import deleteAction from "./actions/deleteActions";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Submit />
        <div className="todos--container">
          <Todos
            todos={this.props.todos}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
}

export default connect(mapStateToProps, null)(App);
