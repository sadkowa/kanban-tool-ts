import { render, screen } from "@testing-library/react"
import Board from "../components/Board"

const initColumns = [
    { id: 1, name: 'To do', limit: 6 },
    { id: 2, name: 'In progress', limit: 3 }
]

xdescribe('<Board>', () => {
    it('sholud render 2 headings', async () => {
        render(<Board initColumns={initColumns} />)
        const headingElements = screen.getAllByRole('heading')

        expect(headingElements.length).toBe(2)
    })
})

