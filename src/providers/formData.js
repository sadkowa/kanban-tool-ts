const fields = [
    { name: 'name', type: 'text', label: "Task title", required: true, id: '1' },
    { name: 'user', type: 'text', label: "Worker name", required: true, id: '2' },
    { name: 'priority', type: 'select', label: "Task priority", id: '3' },
]
const initData = {
    name: '',
    user: '',
    priority: 'no priority',
    idColumn: 1,
}

const priorityOptions = ['no priority', 'low priority', 'medium priority', 'high priority']

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