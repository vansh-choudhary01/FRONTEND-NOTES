import { useEffect, useState } from "react";

export default function Joke() {
    let [joke, setJoke] = useState({});
    let URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        let responce = await fetch(URL);
        let jsonResponce = await responce.json();
        setJoke({ setup: jsonResponce.setup, punchline: jsonResponce.punchline });
    }

    useEffect(() => {
        getJoke();
    }, [])

    return (
        <>
            <h3>Joker !</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getJoke}>Get new Joke</button>
        </>
    )
}