import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content name={course.parts[0].name} exercises={course.parts[0].exercises} /> 
      <Content name={course.parts[1].name} exercises={course.parts[1].exercises} /> 
      <Content name={course.parts[2].name} exercises={course.parts[2].exercises} /> 
      <Total exercises={course.parts[0].exercises}  exercises1={course.parts[1].exercises} exercises2={course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
)

*/
import { useState } from 'react';
/*const App = () => {
  const [ counter, setCounter ] = useState(0);

  setTimeout(
    () => setCounter(counter + 1),
    4000
  )
  
  console.log('rendering...', counter);

  return (
    <div>{counter}</div>
  )
} */

/*
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1);
  const setToZero = () => setCounter(0);
  const reduceByOne = () => setCounter(counter - 1);

  return (
    <div>
      <div>{counter}</div>
      <button  onClick={increaseByOne}>
        plus
      </button>
      <button  onClick={reduceByOne}>
        ninus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}
*/
/*
const App = (props) => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks, 
      left: clicks.left +1 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <br />
        {clicks.right}
        <button onClick={handleRightClick}>right</button>
      </div>
    </div>
  )
}

*/

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
        <p>total: {left}</p>
      </div>
    </div>
  )
}

/*
const History = (props) => {
  console.log(props);
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}
*/
ReactDOM.render(
  <App />, 
  document.getElementById('root')
)