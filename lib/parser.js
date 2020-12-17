const parse = document => {
    const books = document.querySelectorAll('.product_pod');

    const result = [...books].map(book => ({
        title: book.querySelector('h3 a').title,
        price: book.querySelector('.price_color').textContent,
        cover: book.querySelector('img').src,
        rating: book.querySelector('article p').className.split(' ')[1],
        inStock: !book.querySelector('.instock availibility')
    }))
    console.log(result)
    return result
};

module.exports = parse;