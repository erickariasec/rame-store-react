import axios from "axios";
import { useEffect, useState } from "react"
import "./ProductCard.css"

// Format numbers as currency strings (USD)
let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export const ProductCard = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products")
            .then((res) => setData(res.data))
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {loading ? <h1 style={{textAlign:"center"}}>Loading...</h1> : (
                data.map((product) => (
                    <article key={product.id} className="card">
                        <section className="product-image">
                            <img src={product.image} alt="Product" />
                        </section>
                        <section className="product-content">
                            <div className="title">
                                <p>{product.title}</p>
                            </div>
                            <div className="price">
                                <h3>{formatter.format(`${product.price}`)}</h3>
                            </div>
                        </section>
                    </article>
                ))
            )}
        </>
    );
}
