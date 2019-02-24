const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-ad => GET
router.get('/add-ad', adminController.getAddAd);

// /admin/ads => GET
router.get('/ads', adminController.getAds);

// /admin/add-ad => POST
router.post('/add-ad', adminController.postAddAd);

module.exports = router;
