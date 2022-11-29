import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

var connection = mysql.createConnection({
    host     : process.env.host,
    database : process.env.db,
    user     : process.env.db_usr,
    password : process.env.db_pwd  
});

app.get("/", (req, res) => {
    res.json("hola, este es el backend");
})

app.get("/products", (req, res) => {
    const q = "SELECT * from products WHERE id < 34 ORDER BY RAND() LIMIT 34";

    connection.query(q, function(error, results, fields){
        if (error) return res.json(error);
        return res.json(results);   
    })
})

app.get("/products/:id", (req, res) => {
    const productId = req.params.id;
    const q = "SELECT * from products where id = ?";

    connection.query(q, [productId], function(error, results, fields){
        if (error) return res.json(error);
        return res.json(results);
    })
})

app.get("/productsByCategory/:id", (req, res) => {
    const categoryId = req.params.id;
    const q = "SELECT * from products where id_category = ?";

    connection.query(q, [categoryId], function(error, results, fields){
        if (error) return res.json(error);
        return res.json(results);
    })
})

app.get("/carrusel", (req, res) => {
    const q = "SELECT * from products ORDER BY rand() LIMIT 5";

    connection.query(q, function(error, results, fields){
        if (error) return res.json(error);
        return res.json(results);
    })
})

app.listen(8800, () => {
    console.log("Conectado");
})