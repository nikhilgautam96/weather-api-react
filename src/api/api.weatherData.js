import { WEATHER_URL, KEY, AQI } from '../config/weather.config';
export default async function getWeatherdata(cityName) {
    try {
        var requestOptions = {
            method: 'GET',
        };
        const url = `${WEATHER_URL}?key=${KEY}&q=${cityName}&aqi=${AQI}`;
        const response = await fetch(url, requestOptions);
        const weatherData = await response.json();
        return {
            success: true,
            data: weatherData,
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            error: err,
        };
    }
}
