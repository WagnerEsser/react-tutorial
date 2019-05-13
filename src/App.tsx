import React, { useState } from 'react'
import Table from './Table'

const App: React.FC = () => {
  const initialState = {
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
  }

  const removeCharacter = (index: any) => {
    const [state, setState] = useState({})
    const { characters } = initialState

    setState({
      characters: characters.filter((character:any, i:any) => {
        return i !== index
      }),
    })
  }

  return (
    <div className="container">
      <Table characterData={initialState.characters} />
    </div>
  )
}

export default App