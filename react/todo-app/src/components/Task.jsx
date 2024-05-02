import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Task({ task }) {
	return (
		<li className="Task">
			<div>{task.title}</div>
			<div className="Controls">
				<FaRegEdit fill="#181818" />
				<MdDeleteForever fill="red" />
				<IoIosCheckmarkCircle fill="green" />
			</div>
		</li>
	);
}

export default Task;
