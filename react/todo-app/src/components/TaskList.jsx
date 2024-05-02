import Task from "./Task";

function TaskList({ tasks, handlerFn: { deleteTask } }) {
	console.log(deleteTask);
	return (
		<ul className="TaskList">
			{tasks.map((task) => (
				<Task key={task.id} task={task} handleDelete={deleteTask} />
			))}
		</ul>
	);
}

export default TaskList;
