import React, { useEffect, useState } from 'react';

import Header from './Header';
import Board from './Board';
import TaskForm from './TaskForm';
import Popup from './Popup';
import Button from './Button';

import TasksContext from '../context/TasksContext';
import { useStorage } from '../hooks';
import { initTasks } from '../providers/initData';
import { messages } from '../providers/popMessageData';

function KanbanBoard() {
    const { Provider } = TasksContext

    const [tasks, setTasks] = useState(initTasks)

    const [popupMessage, setPopupMessage] = useState('')
    const [deleteId, setDeleteId] = useState('')
    console.log(deleteId)
    const [getItem, setItem] = useStorage()

    useEffect(() => {
        const item = getItem('tasks')

        if (item) {
            setTasks(item)
        }
    }, [])

    const moveTask = (id, columns, action) => {
        setTasks(prevTasks => {
            const changedTasks = prevTasks.map(item => {

                if (item.id === id) {
                    if (action === 'moveLeft') {
                        const previousColumnTasks = tasks.filter(task => task.idColumn === item.idColumn - 1)
                        const previousColumnLimit = columns[item.idColumn - 2].limit

                        if (previousColumnTasks.length !== previousColumnLimit) {
                            const newIdColumn = item.idColumn - 1
                            const newTask = { ...item, idColumn: newIdColumn }
                            return newTask
                        } else {
                            setPopupMessage(`"${columns[item.idColumn - 2].name}" ${messages.limit}!`)
                        }
                    }

                    else if (action === 'moveRight') {
                        const nextColumnTasks = tasks.filter(task => task.idColumn === item.idColumn + 1)
                        const nextColumnLimit = columns[item.idColumn].limit

                        if (nextColumnTasks.length !== nextColumnLimit) {
                            const newIdColumn = item.idColumn + 1
                            const newTask = { ...item, idColumn: newIdColumn }
                            return newTask
                        } else setPopupMessage(`"${columns[item.idColumn].name}" ${messages.limit}!`)
                    }
                }
                return item
            })

            setItem('tasks', changedTasks)
            return changedTasks
        })
    }

    const deleteTask = id => {
        setTasks(prevTasks => {
            const changedTasks = prevTasks.filter(task => task.id !== id)
            setItem('tasks', changedTasks)

            return changedTasks
        })
    }

    const addTask = task => {
        setTasks(prevTasks => {
            const changedTasks = [task, ...prevTasks ]
            setItem('tasks', changedTasks)

            return changedTasks
        })
    }

    const openDeletePopup = () => {
        setPopupMessage(messages.delete)
    }

    const exitPopup = () => {
        setPopupMessage('')
    }

    return (
        <>
            <Header />
            <Provider value={
                {
                    tasks,
                    moveTask,
                    addTask,
                    openDeletePopup,
                    setDeleteId
                }}>
                <Board />
                <TaskForm />
                {popupMessage && <Popup
                    id={deleteId}
                    exitPopup={exitPopup}
                    deleteTask={deleteTask}>{popupMessage}
                </Popup>}
                <Button>+ Add task</Button>
            </Provider>
        </>
    );
}

export default KanbanBoard;
