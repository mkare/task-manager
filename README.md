# Task Manager

This is a simple task manager app built with React, Redux Toolkit, and styled-components

## Firebase

firebase config
src/utils/firebase.ts

```bash
export const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
```

This project was created with Vite and is built with React and TypeScript.

## Getting Started

Install dependencies: npm install
Run the development server: npm run dev
Available Scripts

### `npm run dev`

Runs the development server.

### `npm run build`

Builds the app for production. The build artifacts will be located in the dist/ directory.

### `npm run lint`

Lints the code using ESLint.

## Folder structure

```bash
src/
├── assets/
├── components/
│ ├── base/
│ ├── block/
│ └── feature/
├── layouts/
├── routes/
├── store/
├── types/
└── utils/
```

## Project Structure

src/ - the main source directory

components/ - reusable UI components used throughout the app

base/ - basic building block components

feature/ - more complex components that combine base components

layouts/ - top-level layouts for different pages in the app

routes/ - route definitions for the app

store/ - Redux store setup and slice definitions

utils/ - utility functions used throughout the app

App.tsx - the main app component

index.tsx - the entry point for the app

public/ - public assets directory

tsconfig.json - TypeScript configuration

vite.config.js - Vite configuration

package.json - project dependencies and scripts

## Dependencies

This project uses the following dependencies:

React,
React Router,
Redux Toolkit,
Chroma.js,
Classnames,
Styled Components,
Firebase

# Using Firestore Functions

Firestore functions are used to interact with the Firebase Firestore database. Below are examples explaining how to use Firestore functions.

## `fetchTasks` - Fetch All Tasks

Used to fetch all tasks from the Firestore database.

```javascript
import { fetchTasks } from "firebase-utils"

const getAllTasks = async () => {
  const tasks = await fetchTasks()
  console.log("All tasks:", tasks)
}

getAllTasks()
```

## `addTask` - Add a New Task

Used to add a new task. It takes a task object as data and returns the added task.

```javascript
import { addTask } from "firebase-utils"

const newTask = {
  title: "New Task",
  description: "This is a new task.",
}

const addNewTask = async () => {
  const addedTask = await addTask(newTask)
  if (addedTask) {
    console.log("New task added:", addedTask)
  } else {
    console.error("Task couldn't be added.")
  }
}

addNewTask()
```

## `updateTaskById` - Update a Task

Used to update a task with a specific ID. It returns the updated task.

```javascript
import { updateTaskById } from "firebase-utils"

const updatedTaskData = {
  id: "TASK_ID_TO_UPDATE",
  title: "Updated Task",
  description: "This task has been updated.",
}

const updateTask = async () => {
  const updatedTask = await updateTaskById(updatedTaskData)
  if (updatedTask) {
    console.log("Task updated:", updatedTask)
  } else {
    console.error("Task couldn't be updated.")
  }
}

updateTask()
```

## `removeTaskById` - Remove a Task

Used to remove a task with a specific ID. It returns the ID of the removed task.

```javascript
import { removeTaskById } from "firebase-utils"

const taskIdToRemove = "TASK_ID_TO_REMOVE"

const removeTask = async () => {
  const removedTaskId = await removeTaskById(taskIdToRemove)
  if (removedTaskId) {
    console.log("Task removed:", removedTaskId)
  } else {
    console.error("Task couldn't be removed.")
  }
}

removeTask()
```

# Using Firebase Authentication Functions

Firebase Authentication functions are used to manage user registration, sign-in, and sign-out. Below are examples explaining how to use Firebase Authentication functions.

## `signUp` - User Registration

Used to register a new user. It takes an email and password and returns the user's UID upon successful registration.

```javascript
import { signUp } from "firebase-auth-utils"

const email = "user@example.com"
const password = "securePassword"

const registerUser = async () => {
  const userUID = await signUp(email, password)
  if (userUID) {
    console.log("User registered with UID:", userUID)
  } else {
    console.error("Registration failed.")
  }
}

registerUser()
```

## `signIn` - User Sign-In

Used to sign in an existing user. It takes an email and password and returns the user's UID upon successful sign-in.

```javascript
import { signIn } from "firebase-auth-utils"

const email = "user@example.com"
const password = "securePassword"

const loginUser = async () => {
  const userUID = await signIn(email, password)
  if (userUID) {
    console.log("User signed in with UID:", userUID)
  } else {
    console.error("Sign-in failed.")
  }
}

loginUser()
```

## `signOut` - User Sign-Out

Used to sign out the current user. It returns true upon successful sign-out.

```javascript
import { signOutUser } from "firebase-auth-utils"

const logoutUser = async () => {
  await signOutUser()
  console.log("User signed out successfully.")
}

logoutUser()
```

### Styled Components

In your project, you are using `styled-components` to manage your styles. To define styles for different screen sizes, you can use the `media` object defined in `breakpoints.ts`.

```javascript
import styled from "styled-components"
import { media } from "./styled/breakpoints"

const MyComponent = styled.div`
  font-size: 16px;

  ${media.mobile} {
    font-size: 14px;
  }

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.laptop} {
    font-size: 18px;
  }

  ${media.desktop} {
    font-size: 20px;
  }
`
```

In the above example, we're using the media object to define different font sizes for different screen sizes.

Breakpoints
The breakpoints.ts file provides predefined screen size breakpoints. You can use these in your styled-components as shown above. Here are the predefined breakpoints:

mobile for screens with a minimum width of 480px.
tablet for screens with a minimum width of 768px.
laptop for screens with a minimum width of 1024px.
desktop for screens with a minimum width of 1200px.
You can easily customize these breakpoints in the breakpoints.ts file if needed.

###CSS Functions:

These are CSS utility functions that you can use to apply consistent styles across your project. Import these functions wherever you need to apply the defined styles. For example:

```javascript
import { validationMessage, dangerBorder } from "./path/to/functions"

const MyStyledComponent = styled.div`
  /* Other styles here */
  ${validationMessage}
`

const MyInputField = styled.input`
  /* Other styles here */
  ${dangerBorder}
`
```

In the above example, you import the `validationMessage` and `dangerBorder` CSS functions and use them within your styled components to apply the defined styles.

### Global Styles

The `GlobalStyles` component is used to apply global styles to your entire application. You usually include this component at the top level of your component tree to ensure these styles are applied globally.

Here's how you can use it in your application:

```javascript
import React from "react"
import { GlobalStyles } from "./path/to/globalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Other components */}
    </>
  )
}

export default App
```

y including `<GlobalStyles />` at the top level of your application, you ensure that the global styles like normalizing CSS, body background color, font families, and other styles defined in the `GlobalStyles` component are applied to your entire application.

Make sure to adjust the import paths to match your project's file structure, and customize the styles as needed based on your project's requirements.

### Theme Colors

You have defined a set of colors in your theme. You can use these colors by importing them in your components and applying them to various elements. For example:

```javascript
import { themeColors } from "./path/to/theme"

const MyStyledComponent = styled.div`
  background-color: ${themeColors.primary};
  color: ${themeColors.secondary};
`
```

You can use the color variables from themeColors to maintain a consistent color scheme throughout your project.

### Variables

You have defined various variables for fonts, font sizes, font families, spacing, and more. You can use these variables in your styled-components and other parts of your project. For example:

```javascript
import { fontSizes, fontFamilies, spacer } from "./path/to/variables"

const MyText = styled.p`
  font-family: ${fontFamilies.primary};
  font-size: ${fontSizes.md};
  margin: ${spacer.md};
`
```

By importing and using these variables, you ensure consistent typography and spacing across your project.

Remember to adjust the import paths to match your project's file structure. These variables and theme values provide a way to maintain a consistent and easily customizable design throughout your application.
