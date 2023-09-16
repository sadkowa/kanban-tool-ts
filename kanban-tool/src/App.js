import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Boarder from './components/Boarder';
import TaskForm from './components/TaskForm';
import { ColumnsContext, TasksContext } from './context';

function App() {
    const { Provider: ColumnsProvider } = ColumnsContext
    const { Provider: TasksProvider } = TasksContext


    const [columns, setColumns] = useState(null)
    const [tasks, setTasks] = useState(null)

    // useEffect(() => {
    //     setColumns(ColumnsProvider)
    // })

    return (
        <>
            <Header />
            {!columns ? <Boarder /> : null}
            {/* <ColumnsProvider value={columns}>
                <TasksProvider value={tasks}>
                    <Boarder />
                </TasksProvider>
            </ColumnsProvider> */}
            <TaskForm />
        </>
    );
}

export default App;
