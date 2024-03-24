import { render, screen } from "@testing-library/react";
import Task from "../components/Task";
import TasksContext from "../context/TasksContext";

const initTask = {
	id: 1,
	name: "Appearance of the website",
	info: "Define the color scheme and visual style for the webpage.",
	idColumn: 1,
	user: "Ann Rogers",
	priority: "high",
};

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
			<Task task={initTask} />
		</Provider>
	);
};
describe("<Task>", () => {
	it("should render heading: appearance of the website", async () => {
		renderComponent();

		const headingElement = screen.getByRole("heading", {
			name: /appearance of the website/i,
		});

		expect(headingElement).toBeInTheDocument();
	});
	it("should render heading: Ann Rogers", async () => {
		renderComponent();

		const headingElement = screen.getByRole("heading", {
			name: /Ann Rogers/i,
		});

		expect(headingElement).toBeInTheDocument();
	});
	it("should render text: high", async () => {
		renderComponent();

		const textElement = screen.getByText(/high/i);

		expect(textElement).toBeInTheDocument();
	});
	it("should render text description", async () => {
		renderComponent();

		const textElement = screen.getByText(/Define the color/i);

		expect(textElement).toBeInTheDocument();
	});
	it("should render 3 buttons", async () => {
		renderComponent();

		const buttonElements = screen.getAllByRole("button");

		expect(buttonElements.length).toBe(3);
	});
});
