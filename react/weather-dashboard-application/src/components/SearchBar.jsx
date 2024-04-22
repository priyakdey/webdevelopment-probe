import { useState } from "react";
import "./searchbar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function SearchBar({ onClick }) {
	const [cityName, setCityName] = useState("");

	function handleInput(event) {
		setCityName(() => event.target.value);
	}

	return (
		// TODO: Make this thing justify
		<>
			<Form.Group as={Row} className="mb-3" controlId="textInput">
				<Form.Label htmlFor="search" column sm="2">
					Enter City Name
				</Form.Label>
				<Col sm="5">
					<Form.Control
						id="search"
						type="text"
						placeholder="Bangalore"
						onChange={handleInput}
					/>
				</Col>
			</Form.Group>
			<Button
				variant="primary"
				disabled={cityName.length === 0}
				onClick={(event) => onClick(event, cityName)}
			>
				Search
			</Button>
		</>
	);
}

export default SearchBar;
