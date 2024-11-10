import { useEffect, useState } from "react";
import axios from "axios";

const useWeather = () => {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchWeatherAndCity = async () => {
			try {
				const locationResponse = await axios.get("https://ipinfo.io/json");
				const city = locationResponse.data.city;
				const [latitude, longitude] = locationResponse.data.loc
					.split(",")
					.map(Number);

				const WEATHER_API_KEY = "af0c5d45e93f3eaf790e566131302bea"; // Replace with your OpenWeatherMap API key
				const weatherResponse = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
				);

				const iconCode = weatherResponse.data.weather[0].icon;
				const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
				const { temp } = weatherResponse.data.main;

				setWeather({ temperature: temp, iconUrl, city });
			} catch (err) {
				console.log("fetch error ", err);
				setError("Failed to fetch weather or location data.");
			}
		};

		fetchWeatherAndCity();
	}, []);

	return { weather, error };
};

export default useWeather;
