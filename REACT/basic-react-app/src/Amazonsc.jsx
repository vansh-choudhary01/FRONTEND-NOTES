import "./Amazon.css"

function Amazon({heading, features, oldPrice, amount}) {
    return (
        <div className="box">
            <h3>{heading}</h3>
            <div className="list">{features.map((el) => <li>{el}</li>)}</div>
            <div className="price"><span id="old">₹ {oldPrice}</span> <span id="new">₹ {amount}</span></div>
        </div>
    )
}

export default Amazon;