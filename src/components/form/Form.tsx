import React, { useState } from 'react'
import './form.scss'
import { useTranslation } from 'react-i18next'

const Form = (props: any) => {
    const { t } = useTranslation();
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
            <label>{t('Name')}</label><br />
            <input value={state.name || ''} type="text" onChange={handleChange('name')} required /><br /><br />

            <label>{t('Job')}</label><br />
            <input value={state.job || ''} type="text" onChange={handleChange('job')} /><br /><br />

            <button type="submit">
                {t('Submit')}
            </button>
        </form>
    );
}

export default Form;