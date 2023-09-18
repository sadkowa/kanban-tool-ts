import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Boarder from './components/Boarder';
import TaskForm from './components/TaskForm';
import TasksContext from './context/TasksContext';
import { useStorage } from './hooks';
import { initTasks } from './providers/initData';


function App() {
    const { Provider } = TasksContext

    const [tasks, setTasks] = useState(initTasks)
    const [getItem, setItem] = useStorage()

    useEffect(() => {
        if (getItem('tasks') === null) {
            setItem('tasks', tasks)
        } else {
            const tasksFromStorage = getItem('tasks')
            setTasks(tasksFromStorage)
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
                        } else alert(`"${columns[item.idColumn - 2].name}" limit exceeded`)
                    }

                    if (action === 'moveRight') {
                        const nextColumnTasks = tasks.filter(task => task.idColumn === item.idColumn + 1)
                        const nextColumnLimit = columns[item.idColumn].limit

                        if (nextColumnTasks.length !== nextColumnLimit) {
                            const newIdColumn = item.idColumn + 1
                            const newTask = { ...item, idColumn: newIdColumn }
                            return newTask
                        } else alert(`"${columns[item.idColumn].name}" limit exceeded`)
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

    return (
        <>
            <Header />
            <Provider value={{ tasks, moveTask, deleteTask, addTask }}>
                <Boarder />
                <TaskForm />
            </Provider>
        </>
    );
}

export default App;
