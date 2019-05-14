import React, { useState, useEffect } from 'react'
import gif from './assets/loading.gif'
import Header from './Header';

const Api: React.FC = () => {
    const [state, setState] = useState({
        data: [],
    })

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    useEffect(() => {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        setTimeout(() => {
            fetch(url)
                .then(result => result.json())
                .then(result => {
                    setState({
                        data: result,
                    })
                })
        }, 1000);
    }, [])

    const result = state.data.map((entry, index) => {
        return <li key={index}>{entry}</li>
    })

    return (
        <div className="container">
            <Header />
            <div className="list-api">
                {state.data.length !== 0 ?
                    <>
                        <ul> {result} </ul>
                    </>
                    : <img src={gif} alt="Loading..." />
                }
            </div>
        </div>
    )
}

export default Api