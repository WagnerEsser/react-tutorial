import React from 'react'

const TableBody = (props:any) => {
  const rows = props.characterData.map((row: any, index: any) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default TableBody