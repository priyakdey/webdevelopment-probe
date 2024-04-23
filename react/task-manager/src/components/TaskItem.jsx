import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";

import "./TaskItem.css";

function styleListItem(color) {
	return {
		color: color,
		margin: "2px",
		padding: "2px",
		border: "1px ridge gray",
	};
}

function TaskItem({ task }) {
	return (
		<div className="TaskItem">
			<div className="content">
				<h3>{task.title}</h3>
				<p>{task.dueDate}</p>
			</div>
			<div className="control">
				<MdEdit
					style={styleListItem("#3970ff")}
					size={20}
					onClick={(e) => console.log("Edit")}
				/>
				<RiDeleteBin6Fill
					style={styleListItem("#ff0066")}
					size={20}
					onClick={(e) => console.log("Delete")}
				/>
				<IoIosCheckmarkCircle
					style={styleListItem("#13bf58")}
					size={20}
					onClick={(e) => console.log("Mark Completed")}
				/>
			</div>
		</div>
	);
}

export default TaskItem;
