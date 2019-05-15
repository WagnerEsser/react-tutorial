import React from 'react'
import './table.scss'

const TableBody = (props: any) => {
  const rows = props.characterData.map((row: any, index: any) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job || '---'}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default TableBody