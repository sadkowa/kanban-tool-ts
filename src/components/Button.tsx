import { ReactNode, useContext } from "react";
import TasksContext from "../context/TasksContext";

type ButtonProps = {
	children: ReactNode;
}

const Button = ({ children }: ButtonProps) => {
	const { setFormIsActive } = useContext(TasksContext);

	const clickHandler = () => {
		setFormIsActive(true);
	};
	return (
		<button onClick={clickHandler} className="button--add-task">
			{children}
		</button>
	);
};

export default Button;
