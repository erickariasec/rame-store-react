import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import '../bootstrap.css';

const Carrusel2 = () => {
    const [carrusel, setCarrusel] = useState([]);

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




}