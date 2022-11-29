import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../bootstrap.css';
//import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/products");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);

    return (
        <div className="container-fluid col-sm-7">
            <div className="row">
                <div className="page-title-box">
                    <h4 className="page-title">Listado de Productos</h4>
                </div>    
            </div>
            <div className="row">
                {products.map((product) => (
                    <div className="col-sm-2">                    
                        <div key={product.id} className="card">
                            <img className="card-img-top img-fluid" src={product.image} alt="" width={10}/>
                            <div className="card-body">
                                <h4 className="card-title">{product.name}</h4>
                                <p className="card-text">{product.description.substring(0,30)}</p>
                                <span className="badge rounded-pill bg-primary">$ {product.price}</span>
                            </div>
                        </div>
                        <br />                   
                    </div> 
                ))}
            </div>
        </div>
    );
};

export default Products;