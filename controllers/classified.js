const ad = require('../models/ad');

exports.getAds = (req, res, next) => {
  ad.fetchAll(ads => {
    res.render('classified/ad-list', {
      prods: ads,
      pageTitle: 'All ads',
      path: '/ads'
    });
  });
};

exports.getAd = (req, res, next) => {
  const prodId = req.params.adId; // by using params, adId is important from routes/classified.js => router.get('/ads/:adId')
  ad.findById(prodId, ad => {
    res.render('classified/ad-detail', {
      ad: ad,
      pageTitle: ad.title,
      path: '/ads'
    });
  });
}

exports.getIndex = (req, res, next) => {
  ad.fetchAll(ads => {
    res.render('classified/index', {
      prods: ads,
      pageTitle: 'classified',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('classified/cart', { // res is used because this is a GET response
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.adId; // req is used because this is a POST request, adId comes from views/ad-details input name
  console.log(prodId);
  res.redirect('/cart')
}

exports.getOrders = (req, res, next) => {
  res.render('classified/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('classified/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
