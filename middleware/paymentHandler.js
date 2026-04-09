const paymentHandler = (req, res) => {
  const { payment } = req.body;

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

module.exports = paymentHandler;