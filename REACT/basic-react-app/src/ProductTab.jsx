import Product from "./Product";

function ProductTab() {
    let options = ["hi-tech", "durable", "fast"];
    // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>];
    // let options2 = {a : "hi-tech", b : "durable", c : "fast"}
    return <>
        <Product title="phone" price={30000} features={options} features2={{ a: "hi-tech" }} />
        <Product title="laptop" price={51000} />
        <Product title="pen" price={10} />
    </>
}

export default ProductTab;