const express = require('express');
const db = require('./db.json')
const name = require('./middlewares/nameMiddleware')
const price = require('./middlewares/priceMiddleware')
const description = require('./middlewares/descriptionMiddleware')
const created = require('./middlewares/createdAt')
const rating = require('./middlewares/rating')
const difficulty = require('./middlewares/difficulty')
const tokenGenerator = require('./generateToken')
const auth = require('./middlewares/auth')


const app = express();

app.use(express.json());

app.post('/activities', auth, name, price, description, created, rating, difficulty, (req, res) => {
  res.status(201).json({ message: 'Atividade registrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'Campos ausentes!' });
  }

  const token = tokenGenerator();

  return res.status(200).json({ token });
});

module.exports = app;