

  const express = require('express');
  const movies = require('./movies.json')

  const app = express();
  app.use(express.json())

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const idFiltered = movies.find(({ id: idMovie }) => idMovie === Number(id));
  res.status(200).json(idFiltered);

})

app.get('/movies', (req, res) => {
  res.status(200).json(movies);
})

// app.post('/movies', (req, res) => {
//   const newMovie = { ...req.body };
//   movies.push(newMovie);
//   res.status(201).json(newMovie);
// })

app.post('/movies', (req, res) => {
  const { movie, price } = req.body;
  const obj = {
    movie,
    price,
  }
  movies.push(obj);
  res.status(201).json(obj);
})

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movieFiltered = movies.find(({ id: idMovie }) => idMovie === Number(id));


  movieFiltered.movie = movie;
  movieFiltered.price = price;
  res.status(200).json(movieFiltered);

}) 

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movieFiltered = movies.findIndex(({ id: idMovie }) => idMovie === Number(id));
  movies.splice(movieFiltered, 4)

  res.status(200).end();

})


module.exports = app;