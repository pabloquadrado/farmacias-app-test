const express = require('express');
const router = express.Router();

const CategoryHandler = require('./Category/Handler');
const CategoryMiddleware = require('./Category/Middleware');

const ProductHandler = require('./Product/Handler');
const ProductMiddleware = require('./Product/Middleware');

const PharmacyHandler = require('./Pharmacy/Handler');
const PharmacyMiddleware = require('./Pharmacy/Middleware');

const OfferHandler = require('./Offer/Handler');
const OfferMiddleware = require('./Offer/Middleware');

router.post('/category', CategoryMiddleware.create, CategoryHandler.create);
router.get('/category', CategoryHandler.get);
router.delete('/category/:id', CategoryMiddleware.delete, CategoryHandler.delete);

router.post('/product', ProductMiddleware.create, ProductHandler.create);
router.get('/product', ProductHandler.get);
router.delete('/product/:id', ProductMiddleware.delete, ProductHandler.delete);

router.post('/pharmacy', PharmacyMiddleware.create, PharmacyHandler.create);
router.get('/pharmacy', PharmacyHandler.get);
router.delete('/pharmacy/:id', PharmacyMiddleware.delete, PharmacyHandler.delete);

router.post('/offer', OfferMiddleware.create, OfferHandler.create);
router.get('/offer', OfferHandler.get);
router.delete('/offer/:id', OfferMiddleware.delete, OfferHandler.delete);

module.exports = router;