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
	const formatter = new Intl.DateTimeFormat("en-US", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
	const formattedDate = formatter.format(date);

	return (
		<>
			<h2>
				{location}, {region}, {country}
			</h2>
			<h4>
				{formattedDate} {tz}
			</h4>
			<img src={weatherIcon} alt={weatherCondition} />
			<h4>
				Current temperate is{" "}
				{isCelcius ? `${temp_c}\u00b0C` : `${temp_f}\u00b0F`} and Weather is{" "}
				{weatherCondition}
			</h4>
		</>
	);
}

export default WeatherDisplay;
