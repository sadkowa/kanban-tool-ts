import { useContext } from "react";
import TasksContext from "../context/TasksContext";
import { initColumns } from "../providers/initData";
import { TaskType } from "../types/types";

type TaskProps = {
	task: TaskType;
};

const Task = ({ task }: TaskProps) => {

	const { user, name, info, idColumn, id, priority } = task;

	const { moveTask, openDeletePopup, setDeleteId, setFormIsActive } =
		useContext(TasksContext);

	const handleMoveRightClick = () => {
		setFormIsActive(false);
		moveTask(id, initColumns, "moveRight");
	};

	const handleMoveLeftClick = () => {
		setFormIsActive(false);
		moveTask(id, initColumns, "moveLeft");
	};

	const handleDeleteClick = () => {
		setFormIsActive(false);
		openDeletePopup();
		setDeleteId(id);
	};

	return (
		<div className="task" data-testid={`task-${id}`}>
			{priority !== "no priority" && (
				<p className={`task__priority task__priority--${priority}`}>
					{priority} priority
				</p>
			)}
			<h4 className="task__name">{name}</h4>
			<p className="task__description">{info}</p>
			<h4 className="task__user">{user} </h4>
			<div className="task__buttons">
				<button
					onClick={handleMoveLeftClick}
					className={`task__previous task--button ${
						idColumn === 1 ? "task__previous--none" : null
					}`}
				>
					&#8249;
				</button>
				<button
					onClick={handleDeleteClick}
					className="task__delete task--button "
				>
					&#x00d7;
				</button>
				<button
					onClick={handleMoveRightClick}
					className={`task__next task--button ${
						idColumn === initColumns.length ? "task__next--none" : null
					}`}
				>
					&#8250;
				</button>
			</div>
		</div>
	);
};

export default Task;
