import React from 'react';
import JSONPretty from 'react-json-pretty';
import '../../../style/weather.scss';

var JSONPrettyMon = require('react-json-pretty/dist/monikai');
export default function WeatherDetails(props) {
    const weatherData = props.weatherDetails.data;
    return (
        <div
            className="weather-display-container"
            style={{ display: props.displayProperty }}>
            <JSONPretty
                theme={JSONPrettyMon}
                id="json-pretty"
                data={weatherData}
                space="4"></JSONPretty>
        </div>
    );
}
