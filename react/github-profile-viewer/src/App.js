import { useRef, useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
const BASE_URL = "https://api.github.com/users";

const STYLE_ERROR = {
	color: "#ff0000",
};

function App() {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const profileName = useRef(null);

	function handleClick() {
		const name = profileName.current.value;

		setIsLoading(true);
		setData(null);
		setError(null);

		fetch(`${BASE_URL}/${name}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`Error fetching data. Status code = ${response.status}`
					);
				}

				return response.json();
			})
			.then((data) => setData(data))
			.catch((err) => setError(err))
			.finally(() => {
				setIsLoading(false);
				profileName.current.value = "";
			});
	}

	return (
		<div className="App">
			<h1>Github Profile</h1>
			<label htmlFor="github__profilename">Github Profile name</label>
			<input
				id="github__profilename"
				ref={profileName}
				type="text"
				placeholder="github profile name..."
			></input>
			<button onClick={handleClick}>Submit</button>

			{!!isLoading && <p>Loading....</p>}

			{!!error && <p style={STYLE_ERROR}>Error loading data</p>}

			{!!data && (
				<Profile
					name={data.name}
					company={data.company}
					blog={data.blog}
					location={data.location}
					email={data.email}
					bio={data.bio}
					avatar_url={data.avatar_url}
				/>
			)}
		</div>
	);
}

export default App;
