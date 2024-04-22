function WeatherCard({
	isCelcius,
	date,
	maxtemp_c,
	maxtemp_f,
	mintemp_c,
	mintemp_f,
	avgtemp_c,
	avgtemp_f,
}) {
	return (
		<div className="WeatherCard">
			<h4>Date: {date}</h4>
			<h4>
				Max temperature:{" "}
				{isCelcius ? `${maxtemp_c}\u00b0C` : `${maxtemp_f}\u00b0F`}
			</h4>
			<h4>
				Min temperature:{" "}
				{isCelcius ? `${mintemp_c}\u00b0C` : `${mintemp_f}\u00b0F`}
			</h4>
			<h4>
				Avg temperature:{" "}
				{isCelcius ? `${avgtemp_c}\u00b0C` : `${avgtemp_f}\u00b0F`}
			</h4>
		</div>
	);
}

export default WeatherCard;
