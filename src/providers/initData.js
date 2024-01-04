const initColumns = [
  { id: 1, name: 'To do', limit: 6 },
  { id: 2, name: 'In progress', limit: 3 },
  { id: 3, name: 'In review', limit: 5 },
  { id: 4, name: 'Done', limit: 5 } 
  ]

  const initTasks = [
    { id: 1, name: 'Appearance of the website', info: 'Define the color scheme and visual style for the webpage.', idColumn: 4, user: 'Ann Rogers', priority: 'high priority' },
    { id: 2, name: 'Project environment', info: "Set up the project repository and version control.", idColumn: 4, user: 'Fred Callahan', priority: 'high priority' },
    { id: 3, name: 'HTML structure', info: 'Develop the HTML structure for the webpage', idColumn: 4, user: 'Shelley Clarke', priority: 'high priority' },
    { id: 4, name: 'CSS styling', info: 'Implement basic CSS styling for the webpage', idColumn: 2, user: 'Anthony Rodgers', priority: 'medium priority' },
    { id: 5, name: 'JS implement', info: 'Create and integrate necessary JavaScript functionality.', idColumn: 2, user: 'Helena Kennedy', priority: 'high priority' },
    { id: 6, name: 'Testing', info: 'Test the webpage for cross-browser compatibility.', idColumn: 1, user: 'Antony Mathis', priority: 'medium priority' },
    { id: 7, name: 'New features', info: 'Add new features to the project.', idColumn: 1, user: 'Antony Mathis', priority: 'low priority' }
  ]

  export {initColumns, initTasks}