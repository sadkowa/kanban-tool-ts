import { v4 as uuid } from 'uuid';


const fields = [
    { name: 'name', type: 'text', label: "Task", required: true, id: '1' },
    { name: 'user', type: 'text', label: "Worker name", required: true, id: '2' },
]
const initData = {
    name: '',
    user: '',
    idColumn: 1,
    id: uuid()
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