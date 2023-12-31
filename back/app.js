const express = require('express');
const bodyParser = require('body-parser');

const session = require('express-session');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use(userRoutes);
app.use('/admin', adminRoutes);


app.listen(3001);
