import ListGroup from "react-bootstrap/ListGroup";
import TaskItem from "./TaskItem";

function TaskList({ taskList }) {
	return (
		<ListGroup as="ul">
			{taskList.map((task) => (
				<TaskItem key={task.id} task={task} />
			))}
		</ListGroup>
	);
}

export default TaskList;
