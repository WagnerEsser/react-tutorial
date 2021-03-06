import React from 'react'
import TableBody from './TableBody'
import './table.scss'
import { useTranslation } from 'react-i18next'

const Table = (props: any) => {
    const { t } = useTranslation();
    const { characterData, removeCharacter } = props

    return (
        <table>
            <thead>
                <tr>
                    <th>{t('common.name')}</th>
                    <th>{t('common.job')}</th>
                    <th>{t('common.remove')}</th>
                </tr>
            </thead>

            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table