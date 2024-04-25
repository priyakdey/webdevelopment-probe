import { useState, createContext } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import "./Main.css";

export const HandleCompleteTaskContext = createContext(null);

function Main() {
	const [incompleteTasks, setIncompleteTasks] = useState([]);
	const [completeTasks, setCompleteTasks] = useState([]);

	function handleCompleteTask(id) {
		const idx = incompleteTasks.findIndex((el) => el.id === id);
		const task = incompleteTasks[idx];
		task.status = "complete"; // TODO: not great. use enums

		setCompleteTasks((prev) => [...prev, task]);
		setIncompleteTasks((prev) => [
			...prev.slice(0, idx),
			...prev.slice(idx + 1),
		]);
	}

	function handleDeleteTask(id) {
		const idx = incompleteTasks.findIndex((el) => el.id === id);

		setIncompleteTasks((prev) => [
			...prev.slice(0, idx),
			...prev.slice(idx + 1),
		]);
	}

	function handleAddTask(task) {
		setIncompleteTasks((prev) => [...prev, task]);
	}

	return (
		<HandleCompleteTaskContext.Provider
			value={{ handleCompleteTask, handleDeleteTask }}
		>
			<main className="Main">
				<div className="Main__TaskList">
					<TaskList headerName="Incomplete Tasks" tasks={incompleteTasks} />
					<TaskList headerName="Completed Tasks" tasks={completeTasks} />
				</div>
				<TaskForm handleAddTask={handleAddTask} />
			</main>
		</HandleCompleteTaskContext.Provider>
	);
}

export default Main;
