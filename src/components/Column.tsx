import { useContext } from "react";
import Task from "./Task";
import TasksContext from "../context/TasksContext";
import { ColumnType } from "../types/types";

type ColumnProps = {
	item: ColumnType;
};
const Column = ({ item }: ColumnProps) => {
	const { name, limit, id } = item;
	const { tasks } = useContext(TasksContext);

	const renderTasks = () => {
		if (tasks === null) return
		
		const currentTasks = tasks.filter((task) => task.idColumn === id);
		return currentTasks.map((item) => <Task key={item.id} task={item} />);
	};

	return (
		<section className="column" data-testid={`column-${id}`}>
			<h3 className="column__header">{name}</h3>
			<p className="column__limit">tasks limit: {limit}</p>
			<ul className="column__class-list">{renderTasks()}</ul>
		</section>
	);
};

export default Column;
