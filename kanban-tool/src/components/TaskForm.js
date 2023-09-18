import React, { useReducer, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { fields, initData, formValidate } from '../providers/formData'
import TasksContext from '../context/TasksContext';

function TaskForm() {
    const [errorsList, setErrorsList] = useState([])
    const { addTask } = useContext(TasksContext)

    const reducer = (state, action) => {
        if (action.type === 'reset') {
            return initData
        }
        return { ...state, [action.name]: action.value }
    }

    const [state, dispatch] = useReducer(reducer, initData)

    const submitHandler = (e) => {
        e.preventDefault()
        setErrorsList([])

        const formErrors = formValidate(state)

        setErrorsList(formErrors)

        if (formErrors.length === 0) {
            dispatch({ type: 'reset' })
            addTask(state) //nie jestem przekonana czy na pewno w tym miesjcu aktualizować state
        }
    }

    const renderFields = () => fields.map((item) =>
        <label
            key={item.id}
            className="form__label"
            htmlFor={item.name} >{item.label}
            <input
                id={item.name}
                className='form__input'
                type={item.type}
                name={item.name}
                value={state[item.name]}
                onChange={(e) => dispatch(e.target)} />
        </label>)

    const renderErrors = () => {
        const listItems = errorsList.map(err => <li key={uuid()}>{err}</li>)

        return <ul className='form__errors'>{listItems}</ul>
    }

    return (
        <div className='form__box'>
            <form className="form" onSubmit={submitHandler}>
                {renderFields()}
                <label className="form__label" htmlFor='submit'>
                    <input className='form__input form__input--button' id='submit' type="submit" name="submit" value="Add new task" />
                </label>
            </form>
            {errorsList.length !== 0 && renderErrors()}
        </div>
    )
}

export default TaskForm;