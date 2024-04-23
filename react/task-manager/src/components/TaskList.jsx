import TaskItem from "./TaskItem";

import "./TaskList.css";

function TaskList({ headerName, tasks }) {
	return (
		<div className="TaskList">
			<h3>{headerName}</h3>

			{tasks.length === 0 && (
				<p style={{ textAlign: "center" }}>No tasks to display</p>
			)}

			<ul>
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
}

export default TaskList;
