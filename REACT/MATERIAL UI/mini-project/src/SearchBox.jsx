import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ resetData }) {
    let [city, setCity] = useState('');
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let API_KEY = "dc4f6aef786f493077b0db4df2a20ed7";

    let getWeatherInfo = async () => {
        let responce = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        console.log(jsonResponce);
        let result = {
            city: city,
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description,
            humidity : jsonResponce.main.humidity,
        }
        return result;
    }


    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            resetData(await getWeatherInfo());
            setCity('');
            setError(false);
        } catch(e) {
            setError(true);
        }
    }
    return (
        <div>
            <h3>Search for the weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="Search for the weather" variant="outlined" value={city} required onChange={handleChange} />
                <Button variant="contained" size='large' type="submit">Send</Button>
            </form>
            {error && <p style={{ color: "red" }}>No such location found</p>}
        </div>
    )
}