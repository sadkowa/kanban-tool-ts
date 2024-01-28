import { render, screen } from "@testing-library/react"
import Popup from "../components/Popup"
import TasksContext from "../context/TasksContext"

const renderComponent = id => {
    const { Provider } = TasksContext

    return render(
        <Provider value={{
            setDeleteId: jest.fn()
        }}>
            <Popup id={id}>Do you want to delete it?</Popup>
        </Provider>
    )
}
describe('<Popup>', () => {
    it('should render same message as props.children', () => {
        const deleteId = ''

        renderComponent(deleteId)

        const messageElement = screen.getByText('Do you want to delete it?')

        expect(messageElement).toBeInTheDocument()
    })
    it('should render one button', () => {
        const deleteId = ''

        renderComponent(deleteId)

        const buttonElement = screen.getByRole('button')

        expect(buttonElement).toBeInTheDocument()
    })
    it('should render three buttons', () => {
        const deleteId = 2

        renderComponent(deleteId)

        const buttonElements = screen.getAllByRole('button')

        expect(buttonElements.length).toBe(3)
    })
})

