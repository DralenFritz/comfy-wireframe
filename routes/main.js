const express = require('express');
const router = express.Router();

const { homePage, joinPage, chatPage, cryptoAddressPage, localPaymentPage, paymentPage, paymentHandler } = require('../controllers/main');

router.route('/').get(homePage);
router.route('/join-form').get(joinPage);
router.route('/chat').get(chatPage);
router.route('/crypto-address').get(cryptoAddressPage);
router.route('/local-payment').get(localPaymentPage);
router.route('/payment').get(paymentPage).post(paymentHandler)

module.exports = router;