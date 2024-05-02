import { useState } from "react";

function TaskForm({ handleAddNewTask }) {
	const [isDisplay, setIsDisplay] = useState(false);
	const [taskTitle, setTaskTitle] = useState("");

	function handleClick(event) {
		event.stopPropagation();
		setIsDisplay(toggleDisplay);
	}

	function handleInput(event) {
		setTaskTitle(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		handleAddNewTask(taskTitle);
		setTaskTitle("");
	}

	function toggleDisplay(prev) {
		return !prev;
	}

	return (
		<div className="TaskForm">
			<button className="NewTaskFormButton" onClick={handleClick}>
				New Task
			</button>
			{isDisplay && (
				<form className="NewTaskForm" onSubmit={handleSubmit}>
					<label htmlFor="taskTitle">Task Name</label>
					<input
						id="taskTitle"
						type="text"
						value={taskTitle}
						onChange={handleInput}
					/>
					<div className="container">
						<button type="submit" disabled={taskTitle.length === 0}>
							Add
						</button>
						<button onClick={handleClick}>Close</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default TaskForm;
