import { screen, render } from "@testing-library/react";
import Button from "../components/Button";
import TasksContext from "../context/TasksContext";

describe("<Button/>", () => {
	it("should render the same text as passed into prop", () => {
		render(
			<TasksContext.Provider
				value={{
					setFormIsActive: jest.fn(),
					tasks: [],
					moveTask: jest.fn(),
					addTask: jest.fn(),
					openDeletePopup: jest.fn(),
					setDeleteId: jest.fn(),
					formIsActive: false,
				}}
			>
				<Button>Add task</Button>
			</TasksContext.Provider>
		);

		const buttonElement = screen.getByText("Add task");

		expect(buttonElement).toBeInTheDocument();
	});
});
