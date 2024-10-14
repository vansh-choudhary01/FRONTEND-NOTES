import {useState} from "react";

function LudoBoard() {
    let [moves, setMoves] = useState({red : 0, green : 0, blue : 0, yellow : 0});
    let [arr, setArr] = useState(["no moves"]);

    function updateBlue() {
        setMoves(() => {
            return {...moves, blue : moves.blue + 1};
        });
        console.log(moves);

        setArr((prev) => {return [...prev, "blue moves"]});
    }
 
    function updateYellow() {
        setMoves(() => {
            return {...moves, yellow : moves.yellow + 1};
        });
        console.log(moves);
    }
 
    function updateRed() {
        setMoves(() => {
            return {...moves, red : moves.red + 1};
        });
        console.log(moves);
    }
 
    function updateGreen() {
        setMoves(() => {
            return {...moves, green : moves.green + 1};
        });
        console.log(moves);
    }
 
    return (
        <>
            <p>Game Begin's</p>    
            <div className="Board">
                <p>Blue Moves = {moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor : "blue"}}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor : "yellow", color : "black"}}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor : "green"}}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor : "red"}}>+1</button>
            </div>
            <div className="moves">
                <h3>Moves in string</h3>
                {arr.map((el) => <li>{el}</li>)}
            </div>
        </>
    )
}

export default LudoBoard;