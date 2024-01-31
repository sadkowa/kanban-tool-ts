import { render, screen } from "@testing-library/react"
import Board from "../components/Board"
import TasksContext from "../context/TasksContext"

const initColumns = [
    { id: 1, name: 'To do', limit: 6 },
    { id: 2, name: 'In progress', limit: 3 }
]

const initTasks = [{
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
}]

const renderComponent = () => {
    return render(
        <TasksContext.Provider value={{
            tasks: initTasks
        }}>
            <Board initColumns={initColumns} />
        </TasksContext.Provider>
    )
}
describe('<Board>', () => {
    it('should render 2 columns', () => {
        renderComponent()

        const columnElements = screen.getAllByTestId(/column/i)

        expect(columnElements.length).toBe(2)
    })
})

