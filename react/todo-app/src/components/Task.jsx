import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { TaskStatus } from "../types/task";

function Task(props) {
	const task = props.task;
	const isComplete = task.status === TaskStatus.COMPLETE;

	return (
		<li className="Task">
			<div
				style={{
					textDecoration: isComplete ? "line-through" : "",
				}}
			>
				{task.title}
			</div>
			<Controls {...props} />
		</li>
	);
}

function Controls({ task, handleEdit, handleDelete, handleComplete }) {
	const isComplete = task.status === TaskStatus.COMPLETE;

	return (
		<div className="Controls">
			<button
				onClick={() => handleEdit(task.id)}
				aria-label="Edit Task"
				className="Control"
				disabled={isComplete}
			>
				<FaRegEdit fill={!isComplete ? "#181818" : "gray"} />
			</button>
			<button
				onClick={() => handleDelete(task.id)}
				aria-label="Delete task"
				className="Control"
			>
				<MdDeleteForever fill="red" />
			</button>
			<button
				onClick={() => handleComplete(task.id)}
				aria-label="Complete task"
				className="Control"
				disabled={isComplete}
			>
				<IoIosCheckmarkCircle fill={!isComplete ? "green" : "gray"} />
			</button>
		</div>
	);
}

export default Task;
