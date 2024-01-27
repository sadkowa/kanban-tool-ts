import { render, screen } from "@testing-library/react"
import Header from "../components/Header"

it('sholud render "kanban tool" heading', async () => {
    render(<Header />)
    const headingElement = screen.getByRole('heading', {
        name: /kanban tool/i
    })

    expect(headingElement).toBeInTheDocument()
})
