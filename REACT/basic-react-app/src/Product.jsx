import "./Product.css";

function Product({ title, price = 1, features, features2 }) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "yellow" : ""};
    return (
        <div className="product" style={styles}>
            <h1>{title}</h1>
            <h5>Price : {price / 2}</h5>
            {/* <h4>{features.map((el) => <li>{el}</li>)}</h4> */}
            {isDiscount && <p>Discount : 5%</p>}
            <h4>{features2?.a || "N/A"}</h4>
        </div>
    );
}

export default Product;