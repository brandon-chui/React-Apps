import React, { useState } from 'react';
import moment from 'moment';
import Button from './button';

const api = {
    key: "fa46fc1d0dbc6d1807680d774e9193f1",
    url: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});


    let time = moment().format('dddd, MMMM Do YYYY');


    return (
        <section className="weatherApp">
            <div className="search-box">
                <input
                    type="text"
                    className="searchbar"
                    placeholder="Name of City"
                />
            </div>
            <div className="location-box">
                <div className="location">
                    San Francisco
        </div>
                <div className="date">
                    {time}
                </div>
                <div className="temperature">15°</div>
            </div>
            <Button />
        </section>
    );
}

export default Weather;
