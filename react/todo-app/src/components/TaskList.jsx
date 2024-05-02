import Task from "./Task";

function TaskList({
	tasks,
	handlerFn: { editTask, deleteTask, markComplete },
}) {
	return (
		<ul className="TaskList">
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					handleEdit={editTask}
					handleDelete={deleteTask}
					handleComplete={markComplete}
				/>
			))}
		</ul>
	);
}

export default TaskList;
