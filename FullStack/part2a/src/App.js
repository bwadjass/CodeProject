import React, { useState, useEffect} from "react";
import axios from 'axios';

const App = () => {
const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  

  const addName = e => {
    e.preventDefault();

    const filterDuplicateName = persons.filter(
      person => person.name === newName
    );

    if (filterDuplicateName.length > 0) {
      alert(`${newName} ${newNumber} is already added to phonebook`);
      setNewName("");
      setNewNumber('');

      return;
    };


    const newEntry = {
      name: newName,
      number: newNumber
    };
  

    
    axios
    .post('api/persons', newEntry)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('');
      setNewNumber('');
    }) 

    
  }; 
  

  

  const handleNewName = e => {
    setNewName(e.target.value);
  };


  const handleNewNumber = e => {
    setNewNumber(e.target.value)
  }

  
  


  useEffect(() => {
    axios
      .get('api/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []) 


  
  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, i) => (
        <li key={i}>{person.name} {person.number} </li>
      ))}
    </div>
  );
};

export default App; 
