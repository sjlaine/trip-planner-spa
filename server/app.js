const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../models/db.js');

const app = express();
express.static(path.join(__dirname, '..', 'public'));


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/waergkjh', (req, res, next) => {
  res.send('Hello!');
});

app.listen(3000, () => console.log('listening on port 3000!'));

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  db.sync()
  .then(() => {
    console.log('Database has been synced!');
  })
  .catch(err => console.error(err).bind(console));

  res.status(err.status || 500);
  console.error(err);
  res.send(
    err.message
  );
});
