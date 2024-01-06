const fields = [
    { name: 'name', type: 'text', label: "Task title", required: true, id: '1' },
    { name: 'user', type: 'text', label: "Worker name", required: true, id: '2' },
    { name: 'priority', type: 'select', label: "Task priority", id: '3' },
    { name: 'info', type: 'textarea', label: "Description", id: '4' },
]
const initData = {
    name: '',
    user: '',
    priority: 'no priority',
    info: '',
    idColumn: 1,
}

const priorityOptions = ['no priority', 'low', 'medium', 'high']

const formValidate = (state) => {
    const errors = []
    fields.forEach(field => {
        const value = state[field.name]

        if (field.required) {
            if (value.length === 0) {
                const newError = `"${field.label}" field is required.`
                errors.push(newError)
            }
        }
    })

    return errors
}

export { fields, initData, formValidate, priorityOptions } 