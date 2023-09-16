import React from "react"

const initColumns = [
    {id: 1, name: 'Pending', limit: 6},
    {id: 2, name: 'Analysis Doing', limit: 3},
    {id: 3, name: 'Analysis Done', limit: 3},
    {id: 4, name: 'Development Doing', limit: 5},
    {id: 5, name: 'Development Done', limit: 5},
    {id: 6, name: 'Test', limit: 3},
    {id: 7, name: 'Deploy', limit: 5},
  ]

const ColumnsContext = React.createContext(initColumns)

export default ColumnsContext