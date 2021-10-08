import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Characters from './components/Character'
import Details from './components/Detail'
import { BASE_URL } from './constants'
import './App.css';




console.log(BASE_URL)



const App = (id) => {
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState('1')
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const openDetails = id => {
    setCurrentCharacterId(id)
  }
  console.log(currentCharacterId)
  const closeDetails = () => {
    setCurrentCharacterId(null)
  }

  console.log(`https://swapi.dev/api/people/`)
  console.log(`${BASE_URL}/people/`)
  useEffect(() => {
    axios.get(`${BASE_URL}/people/`)
      .then(res => {
        console.log(res.data)
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">REACT WARS </h1>
      {
        characters.map((ch) => {
            return <Characters key={ch.id} info={ch} action={openDetails} />
        })
      }
      {
        
        currentCharacterId && <Details characterId={currentCharacterId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
