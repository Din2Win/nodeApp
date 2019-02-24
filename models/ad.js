const fs = require('fs');
const path = require('path')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'ads.json'
);

const getAdsFromFile = (cb) => {
    
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};

module.exports = class ads {

    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString(); // creates ID for each ad on save()
        getAdsFromFile(ads => {
            ads.push(this);
            fs.writeFile(p, JSON.stringify(ads), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getAdsFromFile(cb)
    }

    static findById(id, cb) {
        getAdsFromFile(ads => {
            const ad = ads.find(p => p.id === id ); // short syntex where you can omit curly braces and return keyword
            cb(ad)
        });
    }
};