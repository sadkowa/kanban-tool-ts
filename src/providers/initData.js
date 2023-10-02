const initColumns = [
    {id: 1, name: 'Pending', limit: 6},
    {id: 2, name: 'Analysis Doing', limit: 3},
    {id: 3, name: 'Analysis Done', limit: 3},
    {id: 4, name: 'Development Doing', limit: 5},
    {id: 5, name: 'Development Done', limit: 5},
    {id: 6, name: 'Test', limit: 3},
    {id: 7, name: 'Deploy', limit: 5},
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
    {id: 11, name: 'Task11', idColumn: 4, user: 'Iwona'},
    {id: 12, name: 'Task12', idColumn: 4, user: 'Mateusz'},
    {id: 13, name: 'Task13', idColumn: 4, user: 'Jakub'},
    {id: 16, name: 'Task16', idColumn: 5, user: 'Iwona'},
    {id: 17, name: 'Task17', idColumn: 6, user: 'Łukasz'},
    {id: 18, name: 'Task18', idColumn: 6, user: 'Paweł'},
    {id: 19, name: 'Task19', idColumn: 6, user: 'Łukasz'},
    {id: 20, name: 'Task20', idColumn: 7, user: 'Karol'},
    {id: 21, name: 'Task21', idColumn: 7, user: 'Joanna'},
    {id: 22, name: 'Task22', idColumn: 7, user: 'Joanna'},
    {id: 23, name: 'Task23', idColumn: 7, user: 'Karol'},
  ]

  export {initColumns, initTasks}