import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import {
	generateMockIncompleteTasks,
	generateMockCompleteTasks,
} from "../utils/faker";

import "./Main.css";

const mockIncompleteTasks = generateMockIncompleteTasks();
const mockCompleteTasks = generateMockCompleteTasks();

function Main() {
	const [incompleteTasks, setIncompleteTasks] = useState(mockIncompleteTasks);
	const [completeTasks, setCompleteTasks] = useState(mockCompleteTasks);

	{
		console.log(incompleteTasks);
	}

	return (
		<main className="Main">
			<div className="task-list-container">
				<TaskList headerName="Incomplete Tasks" tasks={incompleteTasks} />
				<TaskList headerName="Completed Tasks" tasks={completeTasks} />
			</div>
			<TaskForm />
		</main>
	);
}

export default Main;
