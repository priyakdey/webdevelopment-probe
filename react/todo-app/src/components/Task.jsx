import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Task({ task, handleDelete }) {
	return (
		<li className="Task">
			<div>{task.title}</div>
			<div className="Controls">
				<span className="Control">
					<FaRegEdit fill="#181818" />
				</span>
				<span className="Control">
					<MdDeleteForever fill="red" onClick={(_) => handleDelete(task.id)} />
				</span>
				<span className="Control">
					<IoIosCheckmarkCircle fill="green" />
				</span>
			</div>
		</li>
	);
}

export default Task;
