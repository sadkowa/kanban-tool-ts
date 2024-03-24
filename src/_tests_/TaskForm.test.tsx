import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskForm from "../components/TaskForm";
import TasksContext from "../context/TasksContext";

const renderComponent = () => {
	const { Provider } = TasksContext;

	return render(
		<Provider
			value={{
				tasks: [],
				moveTask: jest.fn(),
				addTask: jest.fn(),
				openDeletePopup: jest.fn(),
				setDeleteId: jest.fn(),
				formIsActive: false,
				setFormIsActive: jest.fn(),
			}}
		>
			<TaskForm />
		</Provider>
	);
};
describe("<Task>", () => {
	it("should render 3 textboxes", () => {
		renderComponent();

		const inputElements = screen.getAllByRole("textbox");

		expect(inputElements.length).toBe(3);
	});
	it("should render four options in select", () => {
		renderComponent();

		const optionElements = screen.getAllByRole("option");

		expect(optionElements.length).toBe(4);
	});
	it("should render two buttons", () => {
		renderComponent();

		const buttonElements = screen.getAllByRole("button");

		expect(buttonElements.length).toBe(2);
	});
	it("should change Task title input value while typing", () => {
		renderComponent();

		const titleInputElement: HTMLInputElement = screen.getByRole("textbox", {
			name: /task title/i,
		});

		expect(titleInputElement).toBeInTheDocument();

		userEvent.type(titleInputElement, "Task");

		expect(titleInputElement.value).toBe("Task");
	});
	it("should change Worker name input value while typing", () => {
		renderComponent();

		const nameInputElement: HTMLInputElement = screen.getByRole("textbox", {
			name: /worker name/i,
		});

		expect(nameInputElement).toBeInTheDocument();

		userEvent.type(nameInputElement, "Johny");

		expect(nameInputElement.value).toBe("Johny");
	});
	it("should change Task description input value while typing", () => {
		renderComponent();

		const infoInputElement: HTMLInputElement = screen.getByRole("textbox", {
			name: /task description/i,
		});

		expect(infoInputElement).toBeInTheDocument();

		userEvent.type(infoInputElement, "Test the webpage");

		expect(infoInputElement.value).toBe("Test the webpage");
	});
	it("select should have chosen value: medium", () => {
		renderComponent();

		const selectElement = screen.getByRole("combobox", {
			name: /task priority/i,
		});

		userEvent.selectOptions(selectElement, "medium");

		expect(selectElement).toHaveValue("medium");
	});
	it("should show errors when form is submitted with empty fields", async () => {
		renderComponent();

		const submitButtonElement = screen.getByRole("button", {
			name: "Add new task",
		});

		userEvent.click(submitButtonElement);

		const errorElements = await screen.findAllByText("This field is required.");

		expect(errorElements.length).toBe(3);
	});
});
