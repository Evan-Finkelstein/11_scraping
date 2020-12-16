const parse = require('./parser');
const store = require('./store');
const request = require('./request');


const scraper = async () => {
    request()
        .then(document => parse(document))
        .then(books => store(books))
        .then(console.log);
};

scraper();