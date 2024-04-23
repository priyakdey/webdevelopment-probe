import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";

import "./TaskItem.css";

function styleListItem(color, disabled) {
	return {
		color: !disabled ? color : "#708090",
		margin: "2px",
		padding: "2px",
		border: "1px ridge gray",
		pointerEvents: !disabled ? "auto" : "none",
	};
}

function TaskItem({ task }) {
	const disabled = task.status === "complete";

	return (
		<div className="TaskItem">
			<div className="content">
				<h3>{task.title}</h3>
				<p>Complete By: {task.dueDate}</p>
			</div>

			<div className="control">
				<MdEdit
					// style={{
					// 	color: "#3970ff",
					// 	margin: "2px",
					// 	padding: "2px",
					// 	pointerEvents: disabled ? "none" : "auto",
					// 	border: "1px ridge gray",
					// }}
					style={{ ...styleListItem("#3970ff", disabled) }}
					size={20}
					onClick={() => console.log("EDIT", JSON.stringify(task), disabled)}
				/>
				<RiDeleteBin6Fill
					style={styleListItem("#ff0066", disabled)}
					size={20}
					onClick={() => console.log("DELETE", JSON.stringify(task), disabled)}
				/>
				<IoIosCheckmarkCircle
					style={styleListItem("#13bf58", disabled)}
					size={20}
					onClick={() =>
						console.log("MARK COMPLETE", JSON.stringify(task), disabled)
					}
				/>
			</div>
		</div>
	);
}

export default TaskItem;
