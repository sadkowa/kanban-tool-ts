import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Board from './components/Board';
import TaskForm from './components/TaskForm';
import PopUp from './components/Popup';
import TasksContext from './context/TasksContext';
import { useStorage } from './hooks';
import { initTasks } from './providers/initData';


function App() {
    const { Provider } = TasksContext

    const [tasks, setTasks] = useState(initTasks)
    const [limitMessage, setLimitMessage] = useState('')

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
                            setLimitMessage(`"${columns[item.idColumn - 2].name}" limit exceeded!`)
                        }
                    }

                    else if (action === 'moveRight') {
                        const nextColumnTasks = tasks.filter(task => task.idColumn === item.idColumn + 1)
                        const nextColumnLimit = columns[item.idColumn].limit

                        if (nextColumnTasks.length !== nextColumnLimit) {
                            const newIdColumn = item.idColumn + 1
                            const newTask = { ...item, idColumn: newIdColumn }
                            return newTask
                        } else setLimitMessage(`"${columns[item.idColumn].name}" limit exceeded!`)
                    }
                }
                return item
            })

            setItem('tasks', changedTasks)
            return changedTasks
        })
    }

    const deleteTask = (id) => {
        setTasks(prevTasks => {
            const changedTasks = prevTasks.filter(task => task.id !== id)
            setItem('tasks', changedTasks)

            return changedTasks
        })
    }

    const addTask = (task) => {
        setTasks(prevTasks => {
            const changedTasks = [...prevTasks, task]
            setItem('tasks', changedTasks)

            return changedTasks
        })
    }

    const exitPopUp = () => {
        setLimitMessage('')
    }

    return (
        <>
            <Header />
            {limitMessage && <PopUp exitPopUp={exitPopUp}>{limitMessage}</PopUp>}
            <Provider value={{ tasks, moveTask, deleteTask, addTask }}>
                <Board />
                <TaskForm />
            </Provider>
        </>
    );
}

export default App;
