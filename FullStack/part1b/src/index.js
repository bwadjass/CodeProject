import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {

    return <h1>{this.props.course}</h1>;

  }
}

class Content extends React.Component {
  render(){
    return (
      <div>
      <p>{this.props.name} {this.props.exercises} </p>
      </div>
    );
  }
}


class Total extends React.Component {
  render(){
    return <p>Number of exercises {this.props.exercises + this.props.exercises1 + this.props.exercises2}</p>;
    
  }
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } 

  return (
    <div>
      <Header course= {course} />
      <Content name= {part1.name} exercises={part1.exercises} />
      <Content name= {part2.name} exercises={part2.exercises} />
      <Content name= {part3.name} exercises={part3.exercises} />  
      <Total exercises={part1.exercises} exercises1={part2.exercises} exercises2={part3.exercises} /> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))