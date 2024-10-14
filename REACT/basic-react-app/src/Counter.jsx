import {useState} from "react"

function Counter() {
    let [count , setCount] = useState(0);

    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={() => {setCount(++count)}}>Click me !</button>
        </>
    )
}

export default Counter;