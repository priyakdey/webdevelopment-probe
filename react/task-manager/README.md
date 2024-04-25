# Task Manager

This application would allow users to manage their to-do tasks.

## Core Features

- `Add Tasks`: Users can add new tasks with a title.
- `View Tasks`: Users can see a list of their tasks.
- `Complete Tasks`: Users can mark tasks as completed.
- `Delete Tasks`: Users can delete tasks they no longer need.

## Advanced Features

- `Edit Tasks`: Users can edit the text of existing tasks.
- `Categorize Tasks`: Users can assign categories or priorities to tasks.
- `Filter/Sort Tasks`: Users can filter tasks by status (complete/incomplete) or
  sort them by priority or due date.
- `Persist Tasks`: Integrate with local storage or a backend to save tasks across
  sessions.

## Learning Focus

- Deepen your understanding of state management and component lifecycle.
- Get more comfortable with conditional rendering and forms in React.
- Practice designing a simple user interface and maybe use a UI library like
  Material-UI or Ant Design to help with the layout.
- Learn to manage a list of items in state, which is a very common pattern in
  React apps.
- If you decide to persist tasks, you could learn to use the browser's
  LocalStorage API or integrate with a backend service like Firebase.

## Components:

- `App`: The main component that holds the state and logic for the task list.
- `TaskForm`: A component to add new tasks.
- `TaskList`: A component to render the list of tasks.
- `TaskItem`: A component to render each task.

### Example App Structure (Pseudocode)

```jsx
// App.jsx
import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (taskTitle) => {
		// logic to add task
	};

	const deleteTask = (taskId) => {
		// logic to delete task
	};

	const toggleTaskStatus = (taskId) => {
		// logic to toggle the status
	};

	return (
		<div>
			<h1>Task Manager</h1>
			<TaskForm onAddTask={addTask} />
			<TaskList
				tasks={tasks}
				onDeleteTask={deleteTask}
				onToggleTaskStatus={toggleTaskStatus}
			/>
		</div>
	);
}

export default App;
```
## TODO:

- [X] Add Task Component
- [X] Delete Task Handler
- [ ] Edit Task Handler
- [ ] Think of displaying priority
- [ ] Filter And Sort Component
