import React from "react";
import { ColumnType, TaskIdType, TaskType } from "../types/types";

type ContextType = {
	tasks: TaskType[] | null;
	moveTask: (
		id: TaskIdType,
		initColumns: ColumnType[],
		action: string
	) => void;
	addTask: (task: TaskType) => void;
	openDeletePopup: () => void;
	setDeleteId: (id: TaskIdType) => void;
	formIsActive: boolean;
	setFormIsActive: (isActive: boolean) => void;
};

const initContext: ContextType = {
	tasks: [],
	moveTask: () => {},
	addTask: () => {},
	openDeletePopup: () => {},
	setDeleteId: () => {},
	formIsActive: false,
	setFormIsActive: () => {},
};

const TasksContext = React.createContext(initContext);




export default TasksContext;

