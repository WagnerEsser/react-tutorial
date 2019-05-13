import React, { useState } from 'react'
import Table from './Table'

const App: React.FC = () => {
  const [state, setState] = useState({
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  })

  const removeCharacter = (index: any) => {
    const { characters } = state

    setState({
      characters: characters.filter((character: any, i: any) => {
        return i !== index
      }),
    })
  }

  return (
    <div className="container">
      <Table characterData={state.characters} removeCharacter={removeCharacter}/>
    </div>
  )
}

export default App