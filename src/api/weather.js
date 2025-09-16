import api from "./api.js";

export async function searchCity(city) {
	const response = await api.get(
		`/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}&limit=1`
	);
	return response.data;
}

export async function getWeather(lat, lon) {
	const response = await api.get(
		`/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
			import.meta.env.VITE_API_KEY
		}&units=metric`
	);
	return response.data;
}

export async function getForecast(lat, lon) {
	const response = await api.get(
		`/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
			import.meta.env.VITE_API_KEY
		}&units=metric`
	);
	return response.data;
}
