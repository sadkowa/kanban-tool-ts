import { render, screen, within, waitFor } from "@testing-library/react"
import KanbanBoard from "../components/KanbanBoard"
import userEvent from "@testing-library/user-event"

const renderComponent = () => {
    return render(
        <KanbanBoard />
    )
}
describe('<KanbanBoard>', () => {
    it('should render 4 columns', () => {
        renderComponent()

        const columnElements = screen.getAllByTestId(/column/i)

        expect(columnElements.length).toBe(4)
    })
    it('should render 2 tasks in column: In progress', () => {
        renderComponent()

        const columnElement = screen.getByTestId('column-2')
        const taskElements = within(columnElement).getAllByTestId(/task/i)

        expect(taskElements.length).toBe(2)
    })
    it('should render 7 init tasks', () => {
        renderComponent()

        const taskElements = screen.getAllByTestId(/task/i)

        expect(taskElements.length).toBe(7)
    })
    it('should render add task button', () => {
        renderComponent()

        const addTaskButtonElement = screen.getByRole('button', {
            name: /add task/i
        })

        expect(addTaskButtonElement).toBeInTheDocument()
    })
    it('should render errors when form submitted with empty fields', async () => {
        renderComponent()

        const submitButtonElement = screen.getByRole('button', {
            name: /add new task/i
        })

        userEvent.click(submitButtonElement)

        await waitFor(() => {
            expect(screen.getAllByText(/is required/i).length).toBe(3)
        })
    })
    it('should add new task to the first column', async () => {
        renderComponent()

        const titleField = screen.getByRole('textbox', {
            name: "Task title"
        })
        const workerNameField = screen.getByRole('textbox', {
            name: "Worker name"
        })
        const descriptionField = screen.getByRole('textbox', {
            name: "Task description"
        })
        const submitButtonElement = screen.getByRole('button', {
            name: /add new task/i
        })

        const firstColumn = screen.getByTestId('column-1')

        userEvent.type(titleField, 'Give feedback')
        userEvent.type(workerNameField, 'Johny')
        userEvent.type(descriptionField, 'Give feedback for students in their first project')

        userEvent.click(submitButtonElement)

        await waitFor(() => {
            expect(within(firstColumn).getByText('Give feedback')).toBeInTheDocument()
        })
    })
})

