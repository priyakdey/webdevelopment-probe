import { useState } from "react";

// TOOD: Think of something. This is the worst possible solution.
let id = 1;

function TaskForm({ handleAddTask }) {
	const [title, setTitle] = useState("");
	const [dueDate, setDueDate] = useState(null);
	const [priority, setPriority] = useState(1);

	function handleInputChange(event, callback) {
		event.preventDefault();
		console.log(event.target.value);
		callback.call(null, event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		handleAddTask({
			id,
			title,
			status: "incomplete",
			dueDate,
			priority,
		});
		id++;

		// TODO: clean input fields
	}

	return (
		<div className="TaskForm">
			<form className="TaskForm__form" onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					id="title"
					type="text"
					onChange={(e) => handleInputChange(e, setTitle)}
				/>
				<label htmlFor="dueDate">Due Date</label>
				<input
					id="dueDate"
					type="date"
					onChange={(e) => handleInputChange(e, setDueDate)}
				/>
				<label htmlFor="priority">Priority</label>
				<select
					id="priority"
					onChange={(e) => handleInputChange(e, setPriority)}
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
				<button disabled={!title || !dueDate} type="submit">
					Add Task
				</button>
			</form>
		</div>
	);
}

export default TaskForm;
