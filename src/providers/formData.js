const fields = [
    { name: 'name', type: 'text', label: "Task title", required: true, id: '1' },
    { name: 'user', type: 'text', label: "Worker name", required: true, id: '2' },
    { name: 'priority', type: 'select', label: "Task priority", id: '3' },
    { name: 'info', type: 'textarea', label: "Description", id: '4', required: true, },
]
const initData = {
    name: '',
    user: '',
    priority: 'no priority',
    info: '',
    idColumn: 1,
}

const priorityOptions = ['no priority', 'low', 'medium', 'high']

const fieldValidate = (field, value) => {
    let error

    if (field.required) {
        if (value.length === 0) {
            error = 'This field is required.'
        }
    }
    return error
}

const formValidate = state => {
    const errors = {}
    fields.forEach(field => {
        const newError = fieldValidate(field, state[field.name])
        if (newError) {
            errors[field.name] = newError
        }
    })

    return errors
}

export { fields, initData, fieldValidate, formValidate, priorityOptions } 