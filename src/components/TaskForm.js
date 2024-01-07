import React, { useReducer, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { fields, initData, formValidate, priorityOptions } from '../providers/formData'
import TasksContext from '../context/TasksContext';

function TaskForm() {
    const [errorsList, setErrorsList] = useState([])
    const { addTask, formIsActive, setFormIsActive } = useContext(TasksContext)

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
            addTask({...state, id: uuid()}) 
        }
    }

    const renderOptions = () => {
       
        return priorityOptions.map((item, index) => <option
            key={index}
            value={item}
        >
            {item}
        </option>)
    }

    const changeHandler = e => {
        dispatch(e.target) 
    }

    const closeHandler = () => {
        setFormIsActive(false)
    }
    const renderFields = () => fields.map((item) => {
        
        if (item.type === 'select') {
            return (
                <label
                    key={item.id}
                    className="form__label">
                    Task priority
                    <select
                        className='form__input'
                        name={item.name}
                        value={state[item.name]}
                        onChange={changeHandler} >
                        {renderOptions()}
                    </select>
                </label>)
        }  else  if (item.type === 'textarea') {
            return (
                <label
                    key={item.id}
                    className="form__label">
                    Task description
                    <textarea
                        className='form__input form__input--textarea'
                        name={item.name}
                        value={state[item.name]}
                        onChange={changeHandler} >
                        {renderOptions()}
                    </textarea>
                </label>)
        }
        else {
            return <label
                key={item.id}
                className="form__label"
                htmlFor={item.name} >{item.label}
            <input
                id={item.name}
                className='form__input'
                type={item.type}
                name={item.name}
                value={state[item.name]}
                onChange={changeHandler} />
            </label>
        }
    }
    )

    const renderErrors = () => {
        const listItems = errorsList.map(err => <li key={uuid()}>{err}</li>)

        return <ul className='form__errors'>{listItems}</ul>
    }

    return (
        <section className={formIsActive ? 'form__box form__box--active' : 'form__box'}>
            <form className="form" onSubmit={submitHandler}>
                {renderFields()}
                <label className="form__label" htmlFor='submit'>
                    <input className='form__input form__input--button' id='submit' type="submit" name="submit" value="Add new task" />
                </label>
            </form>
            {errorsList.length !== 0 && renderErrors()}
                <button
                    onClick={closeHandler}
                    className="form__button task--button ">
                    &#x00d7;
                </button>
        </section>
    )
}

export default TaskForm;