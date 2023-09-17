import React from "react";

const Task = (props)=> {
    const {user, name, idColumn} = props.task

    const handleClick = ()=> {
        console.log(idColumn)
    }
    return(
        <div className="task" onClick={handleClick}>
            <h4 className="task__name">{name}</h4>
            <h4 className="task__user">{user}</h4>
        </div>
    )
}

export default Task