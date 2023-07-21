import React, { useState } from 'react';
import Form from './Form';
import WeatherDetails from './WeatherDetails';
import getWeatherdata from '../../api/api.weatherData';

export default function Body() {
    const [weatherDetails, setweatherDetails] = useState({
        success: false,
        data: null,
    });
    const fetchWeatherDetails = async (cityName) => {
        const data = await getWeatherdata(cityName);
        setweatherDetails(data);
    };
    const [displayProperty, setDisplayProperty] = useState('none');
    const updateDisplayProperty = () => {
        setDisplayProperty('block');
    };
    return (
        <div className="body-container">
            <Form
                fetchWeatherDetails={fetchWeatherDetails}
                updateDisplayProperty={updateDisplayProperty}
            />
            <WeatherDetails
                weatherDetails={weatherDetails}
                displayProperty={displayProperty}
            />
        </div>
    );
}
