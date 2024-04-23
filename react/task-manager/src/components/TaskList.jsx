import TaskItem from "./TaskItem";

import "./TaskList.css";

function TaskList() {
	return (
		<div className="TaskList">
			<ul>
				<TaskItem />
				<TaskItem />
				<TaskItem />
				<TaskItem />
			</ul>
		</div>
	);
}

export default TaskList;
