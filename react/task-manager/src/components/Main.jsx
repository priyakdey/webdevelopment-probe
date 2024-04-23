import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

import "./Main.css";

function Main() {
	return (
		<main class="Main">
			<TaskList />
			<TaskForm />
		</main>
	);
}

export default Main;
