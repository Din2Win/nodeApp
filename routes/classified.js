const path = require('path');

const express = require('express');

const classifiedController = require('../controllers/classified');

const router = express.Router();

router.get('/', classifiedController.getIndex);

router.get('/ads', classifiedController.getAds);

//this is a dynamic route, when using both dynamaic and static routes, remember order matters and static route should come first
router.get('/ads/:adId', classifiedController.getAd) // : symbol signals to express that :adId will be replaced with a value

router.get('/cart', classifiedController.getCart);

router.post('/cart', classifiedController.postCart);

router.get('/checkout', classifiedController.getCheckout);

module.exports = router;
