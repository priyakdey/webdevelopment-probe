import Card from "react-bootstrap/Card";
import "./WeatherDisplay.css";

function WeatherDisplay({
	isCelcius,
	location,
	region,
	country,
	tz,
	temp_c,
	temp_f,
	weatherCondition,
	weatherIcon,
}) {
	const date = new Date();
	const formatter = new Intl.DateTimeFormat("en-CA", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
	const formattedDate = formatter.format(date);

	return (
		<div className="WeatherDisplay">
			<h3>
				{location}, {region}, {country}
			</h3>
			<Card style={{ width: "18rem", height: "auto" }}>
				<Card.Header>{`${formattedDate} ${tz}`}</Card.Header>
				<Card.Img src={weatherIcon} alt={weatherCondition} />
				<Card.Text>
					Current temperate is{" "}
					{isCelcius ? `${temp_c}\u00b0C` : `${temp_f}\u00b0F`} and Weather is{" "}
					{weatherCondition}
				</Card.Text>
			</Card>
		</div>
	);
}

export default WeatherDisplay;
