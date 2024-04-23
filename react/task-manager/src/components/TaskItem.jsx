import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import "./ListItem.css";

function TaskItem({ task }) {
	return (
		<ListGroup.Item
			as="li"
			className="d-flex justify-content-between align-items-start ListGroupItem"
		>
			<div className="m-8 me-auto">
				<div className="fw-bold">{task.title}</div>
				{task.description}
			</div>
			<div className="ListGroupItem__Badge">
				<Badge bg={task.priority === 1 ? "danger" : "primary"} pill>
					{task.priority}
				</Badge>
			</div>
			<div className="ListGroupItem__Badge">
				<Badge bg="primary" pill>
					<MdOutlineEdit />
				</Badge>
			</div>
			<div className="ListGroupItem__Badge">
				<Badge bg="danger" pill>
					<RiDeleteBin6Line />
				</Badge>
			</div>
		</ListGroup.Item>
	);
}

export default TaskItem;
