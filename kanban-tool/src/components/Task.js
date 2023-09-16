import React from "react";

const Task = (props)=> {
    const {user, name} = props.task
    return(
        <div className="task">
            <h4 className="task__name">{name}</h4>
            <h4 className="task__user">{user}</h4>
        </div>
    )
}

export default Task