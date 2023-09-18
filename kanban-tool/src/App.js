import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Boarder from './components/Boarder';
import TaskForm from './components/TaskForm';
import { TasksContext } from './context';
import { useStorage } from './hooks';
import { initTasks } from './providers/initData';


function App() {
    const { Provider } = TasksContext


    const [tasks, setTasks] = useState(initTasks)
    const [getItem, setItem] = useStorage()

    useEffect(() => {

        const tasksFromStorage = getItem('tasks')
        setTasks(tasksFromStorage)


    }, [])

    const moveRight = (id, columns) => {
        const changedTasks = tasks.map(item => {
            if (item.id === id) {
                const nextColumnTasks = tasks.filter(task => task.idColumn === item.idColumn + 1)
                const nextColumnLimit = columns[item.idColumn].limit

                if (nextColumnTasks.length !== nextColumnLimit) {
                    const newIdColumn = item.idColumn++
                    const newTask = { ...item, newIdColumn }
                    return newTask
                } else alert(`"${columns[item.idColumn].name}" limit exceeded`)
            }

            return item
        })
        setTasks(changedTasks)
    }

    const moveLeft = (id, columns) => {
        const changedTasks = tasks.map(item => {
            if (item.id === id) {
                console.log(item)
                const previousColumnTasks = tasks.filter(task => task.idColumn === item.idColumn - 1)
                const previousColumnLimit = columns[item.idColumn - 2].limit

                if (previousColumnTasks.length !== previousColumnLimit) {
                    const newIdColumn = item.idColumn--
                    const newTask = { ...item, newIdColumn }
                    return newTask
                } else alert(`"${columns[item.idColumn].name}" limit exceeded`)
            }

            return item
        })
        setTasks(changedTasks)
    }

    // const deleteTask = (id) => {
    //     const changedTasks = tasks.filter(task => task.id !== id)
    //     setTasks(changedTasks)
    // } Która wersja deleteTask jest bardziej poprawna? Czy muszę się odnosić do prevTasks czy mogę korzystać z tasks?

    const deleteTask = (id) => {
        setTasks(prevTasks => {
            return prevTasks.filter(task => task.id !== id)
        })
    }

    const addTask = (task) => {
        setTasks(prevTasks => [...prevTasks, task])
    }

    return (
        <>
            <Header />
            <Provider value={{ tasks, moveRight, moveLeft, deleteTask, addTask }}>
                <Boarder />
                <TaskForm />
            </Provider>
        </>
    );
}

export default App;
