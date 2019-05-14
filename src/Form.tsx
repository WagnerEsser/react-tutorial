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
            <label>Name </label><br />
            <input value={state.name || ''} type="text" onChange={handleChange('name')} required /><br /><br />

            <label>Job </label><br />
            <input value={state.job || ''} type="text" onChange={handleChange('job')} /><br /><br />

            <input type="submit" value="Submit" />
        </form>
    );
}

export default Form;