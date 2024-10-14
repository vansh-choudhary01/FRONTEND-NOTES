import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({});

    let resetData = (newWeather) => {
        setWeatherInfo(newWeather);
    }

    return (
        <>
            <h2>Weather app by Delta</h2>
            <SearchBox resetData={resetData}/>
            <InfoBox info={weatherInfo}/>
        </>
    )
}