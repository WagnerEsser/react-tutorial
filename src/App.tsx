import React, { useState } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api';

interface Character {
  name: string
  job?: string
}

interface CharacterArray {
  characters: Array<Character>
}

const App: React.FC = () => {
  const [state, setState] = useState({
    characters: []
  } as CharacterArray)

  const removeCharacter = (index: number) => {
    const { characters } = state

    setState({
      characters: characters.filter((character: any, i: any) => i !== index),
    })
  }

  const handleSubmit = (character: Character) => {
    setState({
      characters: [...state.characters, character]
    })
  }

  return (
    <div className="container">
      <h1>React Tutorial</h1>
      <p>Add a character with a name and a job to the table.</p>

      <Table characterData={state.characters} removeCharacter={removeCharacter} />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />

      <hr className="divider" />

      <h3>API</h3>
      <Api />
    </div>
  )
}

export default App