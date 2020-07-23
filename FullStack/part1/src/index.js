
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends React.Component {
  render() {

    return <h1>{this.props.course}</h1>;

  }
}

class Content extends React.Component {
  render(){
    return (
      <div>
      <p>{this.props.part} {this.props.exercises} </p>
      </div>
    );
  }
}


class Total extends React.Component {
  render(){
    return <p>Number of exercises {this.props.exercises1 + this.props.exercises2 + this.props.exercises3}</p>;
    
  }
}

class App extends React.Component {

  render() {

    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14


    return (
        <div>

          <Header course= {course}/>
          <Content part={part1} exercises={exercises1} />
          <Content part={part2} exercises={exercises2} />
          <Content part={part3} exercises={exercises3} />
          <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>

        </div>
    )
    }
  }

ReactDOM.render(<App />, document.getElementById('root'))



