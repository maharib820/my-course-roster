# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Question 1: [Add at least 3 Project features]

- In this project we can select necessary courses.
- In this project we set a limitation based on credit or total hour to purchase courses.
- The project doesn't allow to select one project multiple times. It will save from multiple purchase for same course.
- Here we get data from JSON and build project very efficiently.

# Question 2: [Discuss how you managed the state in your assignment project]

To manage the state of the project we use two state management system of react. These are useState and useEffect. By useEffect we get data from the JSON file. Next we use useState to manage if there is any changes. Here we have two prpertiess one for store new value that we got and other one is a function to updade value that we got. It change the other property.