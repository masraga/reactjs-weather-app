import moment from "moment";
import React from "react";
import { Link } from "react-router";
import { getForecast, getWeather, searchCity } from "./api/weather";
import { SearchIcon } from "./components/icons";

const MAP_WEATHER_TO_IMAGE = {
	Thunderstorm: "./images/thunderstorm.png",
	Drizzle: "./images/drizzle.png",
	Rain: "./images/rain.png",
	Snow: "./images/snow.png",
	Clear: "./images/clear.png",
	Clouds: "./images/clouds.png",
	Atmosphere: "./images/foggy.png",
};

export default function Dashboard() {
	const [city, setCity] = React.useState("pekanbaru");
	const [forecast, setForecast] = React.useState([]);
	const [weather, setWeather] = React.useState({
		temperature: 0,
		condition: MAP_WEATHER_TO_IMAGE["Rain"],
		dt: new Date().getTime(),
	});

	const handleSearch = (e) => {
		setCity(e.target.value.toUpperCase());
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCity("Loading...");
		const apiCity = await searchCity(city);
		if (apiCity.length === 0) {
			setCity("Kota tidak ditemukan");
			return;
		}
		const lat = apiCity[0].lat;
		const lon = apiCity[0].lon;
		const weather = await getWeather(lat, lon);
		setCity(apiCity[0].name);
		const currentWheater = weather.weather[0].main;
		const temperature = Math.floor(weather.main.temp);
		setWeather({
			condition: MAP_WEATHER_TO_IMAGE[currentWheater],
			temperature: temperature,
		});

		const forecast = await getForecast(lat, lon);
		const listForecast = forecast.list.map((v) => {
			return {
				condition: MAP_WEATHER_TO_IMAGE[v.weather[0].main],
				temperature: Math.floor(v.main.temp),
				dt: v.dt,
			};
		});
		setForecast(listForecast);
	};

	return (
		<div className='flex'>
			<div className='w-[30%]'>
				<div className='p-10'>
					{/* pencarian kota */}
					<form onSubmit={handleSubmit}>
						<div className='flex bg-gray-100 justify-between p-3 rounded-lg'>
							<input
								placeholder='cari kota...'
								type='text'
								className='w-[90%] outline-none'
								onChange={handleSearch}
							/>
							<button type='submit' className='icon'>
								<SearchIcon />
							</button>
						</div>
					</form>
					{/* .pencarian kota */}
					{/* gambar cuaca*/}
					<img
						src={weather.condition}
						alt='Weather'
						className='w-[300px] h-[300px] object-cover rounded-lg mt-5'
					/>
					{/* .gambar cuaca */}
					{/* info cuaca */}
					<div className='flex w-[50%] mt-6 text-gray-900'>
						<div className='text-6xl'>{weather.temperature}</div>
						<sup className='align-sup text-xl ml-2'>o</sup>
						<sup className='align-sup text-4xl ml-2'>c</sup>
					</div>
					<div className='mt-6'>
						<span className='text-lg text-gray-700'>
							{moment(weather.dt).format("dddd")},
						</span>
						<span className='text-lg text-gray-400'>
							{moment(weather.dt).format("HH:mm")}
						</span>
					</div>
					{/* .info cuaca */}
				</div>
			</div>
			<div className='w-[70%] bg-neutral-50 h-screen overflow-y-scroll'>
				<div className='p-10'>
					{/* breadcrumb */}
					<span className='mr-2 font-thin'>
						<Link to='/' className='hover:font-medium'>
							Halaman utama
						</Link>
					</span>
					<span className='mr-2 font-thin'>/</span>
					<span className='mr-2 font-thin'>Dasboard</span>
					<div className='mb-4'></div>
					{/* .breadcrumb */}
					<div className='text-2xl text-gray-800 font-bold'>
						{city.toUpperCase()}
					</div>
					<div className='mb-10'></div>
					{/* grid ramalan cuaca*/}
					<div className='grid grid-cols-4 gap-5'>
						{forecast.map((item, index) => {
							return (
								<div
									key={index}
									className='h-[200px] w-[200px] bg-white rounded flex justify-center items-center shadow'
								>
									<div>
										<div className='text-gray-800 text-center py-1'>
											{moment.unix(item.dt).format("dddd, HH:mm")}
										</div>
										<div className='text-gray-800 text-center py-1'>
											<img src={item.condition} className='w-[100px]' alt='' />
										</div>
										<div className='text-gray-800 text-center py-1'>
											<span className='text-2xl mr-1'>{item.temperature}</span>
											<span>
												<sup>0</sup>
											</span>
											<span>
												<sup>C</sup>
											</span>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					{/* .grid ramalan cuaca */}
				</div>
			</div>
		</div>
	);
}
