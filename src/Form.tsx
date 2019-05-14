import React, { useState } from 'react'

const Form = (props: any) => {
    const { handleSubmit } = props
    const [state, setState] = useState({ name: '', job: '' } as any)

    const handleChange = (name: any) => (event: any) => {
        setState({
            ...state, [name]: event.target.value,
        })
    }

    const onFormSubmit = (event: any) => {
        event.preventDefault();

        handleSubmit(state);
        setState({});
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label>Name</label>
            <input
                type="text"
                onChange={handleChange('name')} />
            <label>Job</label>
            <input
                type="text"
                onChange={handleChange('job')} />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;