const path = require('path');
const pagesDir = path.join(__dirname, '../public/pages');

const homePage = (req, res) => {
  res.status(200).sendFile(path.join(pagesDir, 'index.html'));
}

const joinPage = (req, res) => {
  res.status(200).sendFile(path.join(pagesDir, 'join-form.html'));
}

const chatPage = (req, res) => {
  res.status(200).sendFile(path.join(pagesDir, 'chat.html'));
}

const paymentPage = (req, res) => {
  res.status(200).sendFile(path.join(pagesDir, 'payment.html'));
}

const cryptoAddressPage = (req, res) => {
  res.status(200).sendFile(path.join(pagesDir, 'crypto-address.html'));
}

const localPaymentPage = (req, res) => {
  res.status(200).json({ message: 'local currency payments.' });
}

const paymentHandler = (req, res) => {
  const { payment } = req.body;
  console.log(req.body);
  // integrating with a payment gateway
  if (payment === 'crypto') {
    return res.redirect('/crypto-address');
  }
  if (payment === 'local-currency') {
    return res.redirect('/local-payment'); // whatever your route is
  }

  // no option selected
  res.redirect('/payment');
}


module.exports = {
  homePage,
  joinPage,
  chatPage,
  cryptoAddressPage,
  paymentPage,
  localPaymentPage,
  paymentHandler
}