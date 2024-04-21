import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
	return (
		<FaStar color={selected ? "#ffff55" : "#808080"} onClick={onSelect} />
	);
};

export default Star;
