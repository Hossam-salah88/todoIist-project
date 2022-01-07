import React, { Component, Fragment } from "react";
import "./ListItem.css";

class ListItem extends Component {
  state = {
    isEdit: false,
  };

  // Render Cours Item
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.courseName}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit course
        </button>
        <button
          onClick={() => {
            this.props.deletCourse(this.props.index);
          }}
        >
          Delet Course
        </button>
      </li>
    );
  };

  //toggleState

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.courseName}
        />
        <button>Updata Cours</button>
      </form>
    );
  };

  render() {
    let { isEdit } = this.state;
    return (
      <Fragment>
        {isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}
export default ListItem;
