import React from 'react'
import TableBody from './TableBody'
import './table.scss'

const Table = (props: any) => {
    const { characterData, removeCharacter } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Remove</th>
                </tr>
            </thead>
            
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table