// const express = require('express');
// const app = express();
// app.use(express.json());

const pool = require('./utils/pool.js');

const store = async books => {
    const result = await Promise.all(books.map(async book => {
        const { rows } = await pool.query(
            'INSERT INTO books (title, cover, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [book.title, book.cover, book.rating, book.price, book.inStock]);

        return rows[0];
    }
    )
    );
    return result.length;
};
module.exports = store;
