import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherCard from "./components/WeatherCard";
import "./App.css";
import { useEffect, useState } from "react";

// http://api.weatherapi.com/v1/forecast.json?key=ff074edca2384e3f926142635242204&q=kanchrapara&days=3&aqi=no&alerts=no

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json";
const API_KEY = "ff074edca2384e3f926142635242204";

function App() {
	const [cityName, setCityName] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isCelcius, setIsCelcius] = useState(true);

	useEffect(() => {
		if (cityName.length === 0) return;

		const url = `${BASE_URL}?key=${API_KEY}&q=${cityName}&days=3&aqi=no&alerts=no`;

		setIsLoading(true);
		setData(null);
		setError(null);

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error();
				}

				return response.json();
			})
			.then((data) => setData(data))
			.catch((err) => setError(err))
			.finally(() => setIsLoading(false));
	}, [cityName]);

	function handleSearch(_, cityName) {
		if (cityName.length === 0) return;
		setCityName(cityName);
	}

	return (
		<div className="App">
			<header>
				<h1>Weather Dashboard Application</h1>
			</header>
			<main>
				<SearchBar onClick={handleSearch} />
				{!!isLoading && <p>Loading data....</p>}
				{!!error && (
					<p style={{ color: "red" }}>
						ERROR: Could not fetch data for {cityName}.
					</p>
				)}

				{!!data && (
					<>
						<WeatherDisplay
							isCelcius={isCelcius}
							location={data.location.name}
							region={data.location.region}
							country={data.location.country}
							tz={data.location.tz_id}
							temp_c={data.current.temp_c}
							temp_f={data.current.temp_f}
							weatherCondition={data.current.condition.text}
							weatherIcon={data.current.condition.icon}
						/>
						<div className="App__forecast">
							{data.forecast.forecastday.map((forecast) => {
								{
									JSON.stringify(forecast);
								}
								return (
									<WeatherCard
										key={forecast.date}
										isCelcius={isCelcius}
										date={forecast.date}
										maxtemp_c={forecast.day.maxtemp_c}
										maxtemp_f={forecast.day.maxtemp_f}
										mintemp_c={forecast.day.mintemp_c}
										mintemp_f={forecast.day.mintemp_f}
										avgtemp_c={forecast.day.avgtemp_c}
										avgtemp_f={forecast.day.avgtemp_f}
										weatherCondition={forecast.day.condition.text}
										weatherIcon={forecast.day.condition.icon}
									/>
								);
							})}
						</div>
						<button onClick={() => setIsCelcius((prev) => !prev)}>
							Show temperate in {isCelcius ? "Fahrenheit" : "Celcius"}
						</button>
					</>
				)}
			</main>
		</div>
	);
}

export default App;
