import { useState } from "react";
import Star from "./Star";

const elements = (n) => [...Array(n)];

const StarRating = ({ totalStars }) => {
	const [selectedStars, setSelectedStars] = useState(0);

	return elements(totalStars).map((_, idx) => (
		<Star 
            key={idx} 
            selected={selectedStars > idx} 
            onSelect={() => setSelectedStars(idx + 1)}
        />
	));
};

export default StarRating;
