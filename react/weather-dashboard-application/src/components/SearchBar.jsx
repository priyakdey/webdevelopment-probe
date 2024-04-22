import { useRef } from "react";

function SearchBar({ onClick }) {
	const search = useRef();

	return (
		<>
			<label htmlFor="search">Enter City Name</label>
			<input
				id="search"
				ref={search}
				type="text"
				placeholder="Enter city name..."
			/>
			<button onClick={(event) => onClick(event, search)}>Search</button>
		</>
	);
}

export default SearchBar;
