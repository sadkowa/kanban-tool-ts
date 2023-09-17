import React, { useEffect, useState, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import Boarder from './components/Boarder';
import TaskForm from './components/TaskForm';
import { TasksContext } from './context';
import { useStorage } from './hooks';


function App() {
    const { Provider } = TasksContext
    const initTasks = useContext(TasksContext)

    const [tasks, setTasks] = useState(null)
    const [getItem, setItem] = useStorage()

    useEffect(() => {
        if (getItem('tasks') === null) {
            setItem('tasks', initTasks)
        } else {
            const tasksFromStorage = getItem('tasks')
            setTasks(tasksFromStorage)
        }
        console.log('useEffect')
       
    }, [])

    return (
        <>
            <Header />
            {!tasks && <Boarder />}
            {tasks && <Provider value={tasks}>
                <Boarder />
            </Provider>}
            <TaskForm />
        </>
    );
}

export default App;
