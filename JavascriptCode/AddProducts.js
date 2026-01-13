const express = require("express");
const { Pool } = require('pg');
const cors = require('cors');
const multer= require('multer');
const app = express();
const port = 5050;

app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BsSignIn',
    password: 'tiger',
    port: 5432,
});

const uplaod = multer({storage: multer.memoryStorage()});

app.post('/addproducts', uplaod.single('image'), async (req, res) => {
    try {
        const {productName, productId, price, description, deliveryTime, quantity} = req.body;
        const productIMG = req.file? req.file.buffer: null;
        const query = `
        INSERT INTO BsProducts
        (productName, productId, price, description, deliveryTime, quantity, productIMG)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *
        `;

        const newProduct = await pool.query(query, [
            productName,
            productId,
            price,
            description,
            deliveryTime,
            quantity,
            productIMG
        ]);
        res.json(newProduct.rows[0]);
    } catch (err){
        console.error(err);
        res.status(500).json({error:"failed to add prod"});
    }
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})