import TicketNum from "./TicketNum"
import "./ticket.css"

export default function Ticket({ticket}) {
    return (
        <div className="Ticket">
            <p>Ticket</p>
            {ticket.map((num, idx) => {
                return <TicketNum n={num} key={idx}/>
            })}
        </div>
    )
}