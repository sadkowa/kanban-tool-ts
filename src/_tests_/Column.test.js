import { render, screen } from "@testing-library/react"
import Column from "../components/Column"
import TasksContext from "../context/TasksContext"

const initTasks = [
    {
        id: 1,
        name: 'JS implement',
        info: 'Create and integrate necessary JavaScript functionality.',
        idColumn: 2,
        user: 'Helena Kennedy',
        priority: 'high'
    },
    {
        id: 2,
        name: 'Testing',
        info: 'Test the webpage for cross-browser compatibility.',
        idColumn: 1,
        user: 'Antony Mathis',
        priority: 'high'
    },
    {
        id: 3,
        name: 'New features',
        info: 'Add new features to the project.',
        idColumn: 2,
        user: 'John Perry',
        priority: 'low'
    }
]

const renderComponent = () => {
    const { Provider } = TasksContext

    return render(
        <Provider value={{
            tasks: initTasks
        }}>
            <Column item={{ name: "In progress", limit: "3", id: 2 }} />
        </Provider>
    )
}
describe('<Column>', () => {
    it('should render heading: in progress', () => {
        renderComponent()

        const headingElement = screen.getByRole('heading', {
            name: /in progress/i
        })

        expect(headingElement).toBeInTheDocument()
    })
    it('should render paragraph containing tasks limit: 3', () => {
        renderComponent()

        const paragraphElement = screen.getByText(/3/i)

        expect(paragraphElement).toBeInTheDocument()
    })
    it('should render two paragraphs containing: priority', () => {
        renderComponent()

        const headingElements = screen.getAllByText(/priority/i)

        expect(headingElements.length).toBe(2)
    })
})

