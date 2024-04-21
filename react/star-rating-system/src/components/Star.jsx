import { FaStar } from "react-icons/fa";

const Star = ({ idx, selected = -1, handleClick }) => {
	return (
		<FaStar
			color={idx <= selected ? "#ffff55" : "#808080"}
			onClick={(e) => handleClick(e, idx)}
		/>
	);
};

export default Star;
