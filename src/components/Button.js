import React, { useContext } from "react";
import TasksContext from "../context/TasksContext";

const Button = props => {
    const { setFormIsActive } = useContext(TasksContext)

    const clickHandler = () => {
        setFormIsActive(true)
    }
    return <button onClick={clickHandler} className="button--add-task">{props.children}</button>
}

export default Button