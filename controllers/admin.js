const Ad = require('../models/ad');

exports.getAddAd = (req, res, next) => {
  res.render('admin/add-ad', {
    pageTitle: 'Add ad',
    path: '/admin/add-ad',
    formsCSS: true,
    adCSS: true,
    activeAddAd: true
  });
};

exports.postAddAd = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const ad = new ad(title, imageUrl, price, description);
  Ad.save();
  res.redirect('/');
};

exports.getAds = (req, res, next) => {
  Ad.fetchAll(ads => {
    res.render('admin/ads', {
      prods: ads,
      pageTitle: 'Admin ads',
      path: '/admin/ads'
    });
  });
};
