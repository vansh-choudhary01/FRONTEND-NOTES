import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

function Lottery({n = 3, winningCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winningCondition(ticket);
    
    let buyTicket = () => {
        setTicket(() => genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <h3>{isWinning && 'Congratulations, you won!' }</h3>
            <Button action={buyTicket}/>
        </div>
    )
}

export default Lottery;