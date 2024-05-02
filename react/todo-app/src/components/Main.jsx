import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import { Task, TaskStatus } from "../types/task";

function Main() {
	const [tasks, setTasks] = useState([]);

	function addTask(title) {
		const newTask = new Task(title);
		setTasks((prev) => [newTask, ...prev]);
	}

	function editTask(id) {
		console.log("EDIT TASK:", id);
	}

	function deleteTask(id) {
		const idx = tasks.findIndex((task) => task.id === id);
		setTasks((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
	}

	function markComplete(id) {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, status: TaskStatus.COMPLETE } : { ...task }
			)
		);
	}

	return (
		<div className="Main">
			<TaskForm handleAddNewTask={addTask} />
			{tasks.length === 0 && <p>No Tasks Added</p>}
			{tasks.length !== 0 && (
				<TaskList
					tasks={tasks}
					handlerFn={{ editTask, deleteTask, markComplete }}
				/>
			)}
		</div>
	);
}

export default Main;
