/* eslint-disable */
import React, { Component } from "react";

import { connect } from "react-redux";
import addAction from "../../actions/addActions";

class Submit extends Component {
  state = {
    title: ''
  }
  onChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const todo = {
      completed: false,
      title: this.state.title,
      id: e.timeStamp
    };
    console.log(todo)
    this.props.addAction(todo);
    this.setState({ title: "" });
  };

  render() {
    console.log(this.props)
    return (
      <div className="submit--container">
        <form className="forms" onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <input
              type="text"
              name="addToDo"
              required
              placeholder="What needs to be done ?"
              value={this.state.title}
              className="input__text-field"
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, { addAction })(Submit)


