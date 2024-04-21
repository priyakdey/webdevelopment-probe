import { useState } from "react";
import Star from "./Star";

const elements = (n) => [...Array(n)];

const StarRating = ({ totalStars }) => {
	const [selected, setSelected] = useState(-1);

	const handleClick = (_, idx) => setSelected(() => idx);

	return elements(totalStars).map((_, idx) => (
		<Star 
            key={idx} 
            idx={idx} 
            selected={selected} 
            handleClick={handleClick} 
        />
	));
};

export default StarRating;
