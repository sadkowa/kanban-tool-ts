import React, { useContext } from "react";
import TasksContext from "../context/TasksContext";

const Popup = props => {
    const { id, deleteTask, exitPopup } = props
    const {setDeleteId} = useContext(TasksContext)

    const confirmHandler = () => {
        deleteTask(id)
        exitPopup()
        setDeleteId('')
    }

    const skipHandler = () => {
        exitPopup()
        setDeleteId('')

    }
    return (
        <div className="popup__box">
            <div className="popup">
                <p className="popup__message">{props.children}</p>
                <button onClick={skipHandler} className="popup__exit task--button">&#x00d7;</button>
                {id && <div className="popup__buttons">
                    <button
                        onClick={confirmHandler}
                        className="popup__button popup__button--confirm">
                        yes
                    </button>
                    <button
                        onClick={skipHandler}
                        className="popup__button popup__button--skip ">
                        no
                    </button>
                </div>}
            </div>
        </div>
    )
}

export default Popup