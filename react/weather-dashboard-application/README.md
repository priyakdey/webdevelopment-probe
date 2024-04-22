# Weather Dashboard Application

An application that displays weather information for a user's chosen city.

## Features:

- A search input where users can type the name of a city.
- A display area to show the current weather details: temperature, weather
  condition, humidity, wind speed, etc.
- Icons or images that reflect the current weather conditions (sunny, cloudy,
  rainy, etc.).
- (Optional) Add a feature to toggle between Celsius and Fahrenheit.
- (Optional) Display a 3-day weather forecast.

## Learning Focus:

- Continue practicing the use of useState and useEffect for API calls.
- Use conditional rendering to display loading and error states.
- Practice lifting state up if you decide to have multiple components.
- Implement custom hooks if you find yourself repeating logic.
- Experiment with different ways to structure your project as it grows.

## Structure

- App.js: Main component with state management and API call logic.
- SearchBar.js: Component for the city search input.
- WeatherDisplay.js: Component to display the weather information.
- WeatherCard.js: (Optional) If displaying a forecast, use this smaller
  component for each day's weather.

### API Key:

Generate API key from [weather api](https://www.weatherapi.com/my/)
