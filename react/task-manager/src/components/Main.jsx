import { useState } from "react";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { generateMockInCompleteTasks } from "../utils/faker";

import "./Main.css";

const mockIncompleteTasks = generateMockInCompleteTasks();

function Main() {
	const [inCompleteTasks, setInCompleteTasks] = useState(mockIncompleteTasks);

	{
		console.log(inCompleteTasks);
	}

	return (
		<main className="Main">
			<div className="task-list-container">
				<TaskList tasks={inCompleteTasks} />
				<TaskList tasks={[]} />
			</div>
			<TaskForm />
		</main>
	);
}

export default Main;
