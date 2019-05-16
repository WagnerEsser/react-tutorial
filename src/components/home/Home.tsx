import React, { useState } from 'react'
import Table from '../table/Table'
import Form from '../form/Form'
import './home.scss'
import { withTranslation } from 'react-i18next';

interface Character {
  name: string
  job?: string
}

interface CharacterArray {
  characters: Array<Character>
}

const Home: React.FC = ({ t }: any) => {

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

      <p>{t('home.add_character')}</p>

      <Table characterData={state.characters} removeCharacter={removeCharacter} />

      <h3>{t('home.add_new')}</h3>
      <Form handleSubmit={handleSubmit} />
    </div>
  )
}

export default withTranslation()(Home)