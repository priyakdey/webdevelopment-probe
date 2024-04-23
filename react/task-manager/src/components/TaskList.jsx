import TaskItem from "./TaskItem";

import "./TaskList.css";

function TaskList({ tasks }) {
	return (
		<div className="TaskList">
			{tasks.length === 0 && <p>No tasks to display</p>}

			<ul>
				{tasks.map((task) => (
					<TaskItem key={task.id} task={task} />
				))}
			</ul>
		</div>
	);
}

export default TaskList;
