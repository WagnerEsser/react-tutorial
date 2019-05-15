import React, { useState } from 'react'
import Table from '../table/Table'
import Form from '../form/Form'
import './home.scss'

interface Character {
  name: string
  job?: string
}

interface CharacterArray {
  characters: Array<Character>
}

const Home: React.FC = () => {
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
      <p>Add a character with a name and a job to the table.</p>

      <Table characterData={state.characters} removeCharacter={removeCharacter} />

      <h3>Add New</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home