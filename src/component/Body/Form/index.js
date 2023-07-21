import React from 'react';
import CITIES from '../../../config/cities.config';
import '../../../style/form.scss';
import Select from 'react-select';

function Dropdown(props) {
    const allCities = CITIES.map((elem, index) => {
        return {
            value: elem,
            label: elem.charAt(0).toUpperCase() + elem.slice(1),
        };
    });
    const handleChange = (e) => {
        console.log(e.value);
        props.fetchWeatherDetails(e.value);
        props.updateDisplayProperty();
    };
    return (
        <div className="form-container">
            <form>
                <label className="form-label" htmlFor="select-city">
                    Choose your favourite city
                </label>
                <Select
                    className="form-dropdown"
                    id="select-city"
                    options={allCities}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}

export default Dropdown;
