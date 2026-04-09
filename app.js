const express = require('express');

const app = express();

const mainRouter = require('./routes/main');
const notFoundMiddleware = require("./middleware/not-found");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.use('/', mainRouter);

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

module.exports = app;