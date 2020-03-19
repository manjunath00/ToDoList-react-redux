/* eslint-disable */
import React, { Component } from 'react';
import { connect } from "react-redux";

import deleteAction from "../actions/deleteActions";
import toggleAction from "../actions/toggleActions";

class TodoItem extends Component {
  render() {
    console.log(this.props)
    const { title, id, completed } = this.props.todo
    const status = completed ? 'checked' : '';
    // console.log(title, id)
    return (
      <div className={`todo ${status}`} key={id} >
        <div className="todo-status">
          <input type="checkbox" className="checkbox" onClick={() => this.props.toggleAction(id)} />
        </div>
        <div className="todo-text">{title}</div>
        <div className="todo-action">
          <button onClick={() => this.props.deleteAction(id)}><span>&times;</span></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, { deleteAction, toggleAction })(TodoItem)
