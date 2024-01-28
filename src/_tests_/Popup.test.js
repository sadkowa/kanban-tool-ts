import { render, screen } from "@testing-library/react"
import Popup from "../components/Popup"
import TasksContext from "../context/TasksContext"

const contextValues = {
    setDeleteId: () => { }
}

const renderComponent = (value, id) => {
    const { Provider } = TasksContext

    return render(
        <Provider value={value}>
            <Popup id={id}>Do you want to delete it?</Popup>
        </Provider>
    )
}
describe('<Popup>', () => {
    it('should render same message as props.children', () => {
        const deleteId = ''

        renderComponent(contextValues, deleteId)

        const messageElement = screen.getByText('Do you want to delete it?')

        expect(messageElement).toBeInTheDocument()
    })
    it('should render one button', () => {
        const deleteId = ''

        renderComponent(contextValues, deleteId)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })
    it('should render three buttons', () => {
        const deleteId = 2
        renderComponent(contextValues, { deleteId })

        const buttonElements = screen.getAllByRole('button')

        expect(buttonElements.length).toBe(3)
    })
})

