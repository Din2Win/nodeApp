const fs = require('fs');
const path = require('path')

const p = path.join( // stores the path in a constant variable called p
    path.dirname(process.mainModule.filename),
    'data', // in the data folder
    'cart.json' // to create an object in a file called cart.json 
);

module.exports = class Cart {
    static AddAd() {
        // fecth the previous cart
        fs.readFile(p, (err, fileContent) => { // this reads the file at the path 'p', callback will either be an err or the file content
            let cart = {ads: [], totalPrice: 0};
            if (!err) { // if no error, it means cart is already created
                cart = JSON.parse(fileContent);
            }
            // Analyze the cart => Find existing ad
            const existingad = cart.find(prod => prod.id === id);
            let updatedad;
            if (existingad) {
                updatedad = { ...existingad }; 
                updatedad.qty = updatedad.qty + 1;
            }

        })
        // analyze the cart => find existing ad
        // add new ad /increase quantity 
    }
}