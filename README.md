# Kanban Tool

[Click to find out how it works!](https://youtu.be/dOaGbPwpJBU)

This task involved implementing a Kanban system based on the MVP (Minimum Viable Product) concept.

Basic elements:

- A board with defined columns and task limits
- Tasks with information such as:
    - Task name
    - Current column
    - User (person responsible)
- Ability to move tasks between columns
- A form (with validation) that allows adding new tasks to the board

<img src="./src/assets/Capture - app.JPG"/>

---

### Solutions

In this project, I used:

- LocalStorage - to save information about tasks:
    - Moving a task to another column
    - Deleting a task
    - Adding a task
- Hooks:
    - useState
    - useContext
    - useStorage (Custom Hook - provides methods for storing and retrieving data from localStorage)
- Context Api - passing data within the application

When the task limit in a specific column is reached, a pop-up window with information about exceeding the limit appears.

<img src="./src/assets/Capture - limit exceeded.JPG"/>

---

## The technologies used

![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![BEM Methodology](https://img.shields.io/badge/BEM%20Methodology-29BDfD?style=for-the-badge&logo=BEM&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/GIT-ADB188?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/-Visual%20Studio%20Code-0A1A2F?style=for-the-badge&logo=visual-studio-code&logoColor=007ACC)

## Installation and configuration

In the project, [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) have been used. If you have them installed, enter the following in the terminal:

````
npm i
````

To open the application in developer mode, use the following command:

````
npm start
````


The application is available at the following address: 

````
http://localhost:3000
`````

---