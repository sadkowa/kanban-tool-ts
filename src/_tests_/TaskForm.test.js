import { render, screen } from "@testing-library/react"
import TaskForm from "../components/TaskForm"
import TasksContext from "../context/TasksContext"

const contextValues = {
    addTask: () => { },
    formIsActive: () => { },
    setFormIsActive: () => { }
}

const renderComponent = value => {
    const { Provider } = TasksContext

    return render(
        <Provider value={value}>
            <TaskForm />
        </Provider>
    )
}
describe('<Task>', () => {
    it('should render 3 textboxes', async () => {
        renderComponent(contextValues)

        const inputElements = screen.getAllByRole('textbox')

        expect(inputElements.length).toBe(3) 
    })
    it('should render four options in select', async () => {
        renderComponent(contextValues)

        const optionElements = screen.getAllByRole('option')

        expect(optionElements.length).toBe(4)
    })
    it('should render two buttons', async () => {
        renderComponent(contextValues)

        const buttonElements = screen.getAllByRole('button')

        expect(buttonElements.length).toBe(2)
    })
    
})

