import React, { useContext } from "react";
import Task from "./Task";
import TasksContext from "../context/TasksContext";


const Column = (props) => {
    const { name, limit, id } = props.item
    const {tasks} = useContext(TasksContext)
    
    const renderTasks = () => {
        const currentTasks = tasks.filter(task => task.idColumn === id)
        return currentTasks.map(item => <Task key={item.id} task={item} />)
    }

    return (
        <section className="column">
            <p className="column__limit">tasks limit: {limit}</p>
            <h3 className="column__header">{name}</h3>
            <ul className="column__class-list">
                {renderTasks()}
            </ul>
        </section>

    )
}

export default Column