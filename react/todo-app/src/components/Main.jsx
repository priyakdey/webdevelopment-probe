import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { Task } from "../types/task";

function Main() {
	const [tasks, setTasks] = useState([]);

	function addTask(title) {
		const newTask = new Task(title);
		setTasks((prev) => [newTask, ...prev]);
	}

	return (
		<div className="Main">
			<TaskForm handleAddNewTask={addTask} />
			{tasks.length === 0 && <p>No Pending Tasks</p>}
			{tasks.length !== 0 && <TaskList />}
		</div>
	);
}

export default Main;
