import React from 'react'
import './table.scss'
import { useTranslation } from 'react-i18next'

const TableBody = (props: any) => {
  const { t } = useTranslation();
  const rows = props.characterData.map((row: any, index: any) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job || '---'}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>{t('Delete')}</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default TableBody