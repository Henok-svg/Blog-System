const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const dbURL = 'mongodb://localhost:27017/nodejs';

mongoose.connect(dbURL)
  .then((result) => app.listen(3000))
  .catch((err) => console.log((err)));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//middleware and static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.use('/blogs' ,blogRoutes)

app.get('/about', (req, res) => {
  res.render('blogs/about', { title: 'About' });
});

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
