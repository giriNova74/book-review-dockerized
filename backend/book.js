// backend/book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  review: String
});

module.exports = mongoose.model('Book', bookSchema);
