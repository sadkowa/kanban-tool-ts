const fields = [
    { name: 'task', type: 'text', label: "Task", required: true, id: '1' },
    { name: 'workerName', type: 'text', label: "Worker name", required: true, id: '2' },
]
const initData = {
    task: '',
    workerName: '',
    idColumn: 1
}

const formValidate = (state) => {
    const errors = []
    fields.forEach(field => {
        const value = state[field.name]

        if (field.required) {
            if (value.length === 0) {
                const newError = `Pole ${field.label} jest wymagane.`
                errors.push(newError)
            }
        }
    })
    return errors
}


export { fields, initData, formValidate } 