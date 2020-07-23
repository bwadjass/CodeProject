
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const StatisticsContent = ({text, value}) => {
  return <tr><td>{text}</td><td>{value}</td></tr>;
}

const PositiveValue = ({text, value}) => {
  return <tr><td>{text}</td><td>{value}%</td></tr>;
}


const Statistics = ({good, neutral, bad}) => {
 
  let totalFeedBack = good + neutral + bad;
  let positiveValuePercent = (good/ (totalFeedBack)) * 100;

  

  if(totalFeedBack === 0){

    return <p>No feedback given</p>;

  } else {

  return (
    <table>
      <tbody>
    <StatisticsContent text='good' value={good}/>
    <StatisticsContent text='neutral' value={neutral}/>
    <StatisticsContent text='bad' value={bad}/>
    <StatisticsContent text='average' value={(good - bad)/ (totalFeedBack)}/>
    <PositiveValue text='positive' value={positiveValuePercent}/>
      </tbody>
    </table>
  )
  
  }
}

const Button = ({onClick, text}) => {
return <button onClick={onClick} >{text}</button>
}

const App = () => {
  
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () =>  setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  

  return (
    <div>

      <h1>give feedback</h1>

      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral'/>
      <Button onClick={handleBadClick} text='bad'/>

      <h1>statistics</h1>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) 


//import React from 'react'
//import ReactDOM from 'react-dom'
/*
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const Note = ({ note }) => {
  return (
    <li>{note.id}</li>
  )
}

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

*/