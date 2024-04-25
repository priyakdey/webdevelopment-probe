import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import "./Main.css";

function Main() {
	const [incompleteTasks, setIncompleteTasks] = useState([]);
	const [completeTasks, setCompleteTasks] = useState([]);

	function handleAddTask(task) {
		setIncompleteTasks((prev) => [...prev, task]);
	}

	return (
		<main className="Main">
			<div className="Main__TaskList">
				<TaskList headerName="Incomplete Tasks" tasks={incompleteTasks} />
				<TaskList headerName="Completed Tasks" tasks={completeTasks} />
			</div>
			<TaskForm handleAddTask={handleAddTask} />
		</main>
	);
}

export default Main;
