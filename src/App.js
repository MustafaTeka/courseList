import React, { Component } from 'react';
import CourseForm from './Components/CourseForm/CourseForm';
import CourseList from './Components/CourseList/CourseList';

class App extends Component {
  state={
    courses:[],
    current :''
  }
  updateCouese=(e)=>{
    this.setState({
      current:e.target.value
    })
  }
  addCouese=(e)=>{
    e.preventDefault();
    let {current}=this.state;
    let {courses}=this.state;
    if(current){
      courses.push({name:current})
      this.setState({
        courses,
        current:''
      })
    }
  }
  deleteCourse=(index)=>{
    let {courses}=this.state;
    courses.splice(index,1)
    this.setState({courses})
  }
  editCourse=(index,value)=>{
    let {courses}=this.state;
    let course=courses[index];
    course['name']=value;
    this.setState({courses})
  }
  render() {
    const {courses}=this.state;
    const length=courses.length;
    const coursesList = length ?(
    courses.map((course,index)=>{
      return <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index}  editCourse={this.editCourse}/>
    })
    ):(<p>There is no courses to show</p>)
    return (
      <section className="App">
        <h1>Add Course</h1>
        <CourseForm updateCouese={this.updateCouese} addCouese={this.addCouese} current={this.state.current} />
        <ul>{coursesList}</ul>
      </section>
    );
  }
}

export default App;
