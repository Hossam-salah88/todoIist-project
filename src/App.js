import React, { Component } from "react";
import ListItem from "./component/ListItem/ListItem";
import CourseForm from "./component/CourseForm/CourseForm";

class App extends Component {
  state = {
    courses: [
      { id: 1, courseName: "Html" },
      { id: 2, courseName: "Css" },
      { id: 3, courseName: "JavaScript" },
    ],
    current: "",
  };

  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ courseName: current });
    this.setState({ courses: courses, current: "" });
  };

  deletCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses: courses });
  };

  //editCourse
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["courseName"] = value;
    this.setState({
      courses,
    });
  };

  render() {
    const { courses } = this.state;
    const listItems = courses.map((course, index) => {
      return (
        <ListItem
          details={course}
          key={index}
          index={index}
          deletCourse={this.deletCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2> Add Course</h2>
        <CourseForm
          updateCourse={this.updateCourse}
          addCourse={this.addCourse}
          current={this.state.current}
        />
        <ul>{listItems}</ul>
      </section>
    );
  }
}
export default App;
