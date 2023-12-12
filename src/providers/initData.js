const initColumns = [
  { id: 1, name: 'To do', limit: 6 },
  { id: 2, name: 'In progress', limit: 3 },
  { id: 3, name: 'In review', limit: 5 },
  { id: 4, name: 'Done', limit: 3 } 
  ]

  const initTasks = [
    {id: 1, name: 'Task1', idColumn: 1, user: 'Anna'},
    {id: 2, name: 'Task2', idColumn: 1, user: 'Anna'},
    {id: 3, name: 'Task3', idColumn: 1, user: 'Anna'},
    {id: 4, name: 'Task4', idColumn: 2, user: 'Stefan'},
    {id: 5, name: 'Task5', idColumn: 2, user: 'Marek'},
    {id: 6, name: 'Task6', idColumn: 2, user: 'Stefan'},
    {id: 7, name: 'Task7', idColumn: 3, user: 'Marek'},
    {id: 8, name: 'Task8', idColumn: 3, user: 'Stefan'},
    {id: 10, name: 'Task10', idColumn: 4, user: 'Jakub'},
    {id: 11, name: 'Task11', idColumn: 4, user: 'Iwona'}
  ]

  export {initColumns, initTasks}