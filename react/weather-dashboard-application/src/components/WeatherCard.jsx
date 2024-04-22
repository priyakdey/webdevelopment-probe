import Card from "react-bootstrap/Card";

function WeatherCard({
	isCelcius,
	date,
	maxtemp_c,
	maxtemp_f,
	mintemp_c,
	mintemp_f,
	avgtemp_c,
	avgtemp_f,
	weatherCondition,
	weatherIcon,
}) {
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Header>{date}</Card.Header>
				<Card.Text>
					Max temperature:{" "}
					{isCelcius ? `${maxtemp_c}\u00b0C` : `${maxtemp_f}\u00b0F`}
				</Card.Text>
				<Card.Text>
					Min temperature:{" "}
					{isCelcius ? `${mintemp_c}\u00b0C` : `${mintemp_f}\u00b0F`}
				</Card.Text>
				<Card.Text>
					Avg temperature:{" "}
					{isCelcius ? `${avgtemp_c}\u00b0C` : `${avgtemp_f}\u00b0F`}
				</Card.Text>
				<Card.Img src={weatherIcon} alt={weatherCondition} />
				<Card.Text>Weather would be {weatherCondition}</Card.Text>
			</Card>
		</>
	);
}

export default WeatherCard;
