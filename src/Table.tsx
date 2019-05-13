import React from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = (props: any) => {
    const { characterData } = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} />
        </table>
    )
}

export default Table