const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin')

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { 
    prods: products, 
    pageTitle: 'Shop', 
    path: '/', 
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  }); // render will use default templating engine, which was defined in app.js
});

module.exports = router;
