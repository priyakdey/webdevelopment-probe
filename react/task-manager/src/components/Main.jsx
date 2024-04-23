import { Task } from "../types/task";
import TaskList from "./TaskList";
import { useState } from "react";
import "./Main.css";

function Main() {
	const [inCompleteTaskList, setInCompleteTaskList] = useState([
		new Task("id1", "title1", "description1", 1),
		new Task("id2", "title2", "description2", 2),
		new Task("id3", "title3", "description3", 5),
	]);

	const [completeTaskList, setCompleteTaskList] = useState([
		new Task("id4", "title4", "description4", 1),
		new Task("id5", "title5", "description5", 2),
	]);

	return (
		<div className="Main">
			<TaskList id="incomplete-task-list" taskList={inCompleteTaskList} />
			<TaskList id="complete-task-list" taskList={completeTaskList} />
		</div>
	);
}

export default Main;
