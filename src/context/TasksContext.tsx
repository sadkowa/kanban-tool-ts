import React from "react";

type ContextType = {
    tasks: [],
	moveTask: ()=> void,
	addTask: (task: object)=> void,
	openDeletePopup: ()=> void,
	setDeleteId: ()=> void,
	formIsActive: false,
	setFormIsActive: (isActive: boolean)=> void,
}

const initContext: ContextType = {
	tasks: [],
	moveTask: ()=> {},
	addTask: (task)=> {},
	openDeletePopup: ()=> {},
	setDeleteId: ()=> {},
	formIsActive: false,
	setFormIsActive: (isActive)=> {},
};

const TasksContext = React.createContext(initContext);




export default TasksContext;

