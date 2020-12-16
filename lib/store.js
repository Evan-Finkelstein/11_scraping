const store = async books => {
    const result = Promise.all(books.map(book => {

        'INSERT INTO books (title, rating, price, cover, in_stock) VALUES ($1, $2, $3, $4 $5) RETURNING *',
            [book.title, book.rating, book.price, book.cover, book.in_stock];
    }));
    console.log(result)
    return result;
};

module.exports = store;
